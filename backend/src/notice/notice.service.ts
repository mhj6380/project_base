import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Notice } from "./entities/notice.entity";

@Injectable()
export class NoticeService {
  constructor(
    @InjectRepository(Notice)
    private readonly noticeRepository: Repository<Notice>
  ) {}

  async getAllNotice(language: string, page: number, limit: number) {
    // Validate partner
    // const skippedItems = (page - 1) * limit;
    const totalCount = await this.noticeRepository.count();
    // const productItems = await this.noticeRepository
    //   .createQueryBuilder()
    //   .orderBy("createdAt", "DESC")
    //   .offset(skippedItems)
    //   .limit(limit)
    //   .getMany();
    let items;
    if (language === "KO") {
      items = await this.noticeRepository.query(
        "SELECT id,title, content,viewCount,createdAt, updatedAt FROM notice ORDER BY createdAt DESC"
      );
    } else {
      items = await this.noticeRepository.query(
        "SELECT id,titleEn as title, contentEn as content,viewCount,createdAt, updatedAt FROM notice ORDER BY createdAt DESC"
      );
    }

    return {
      totalCount,
      page,
      limit,
      data: items,
    };
  }

  async getOneNotice(id: number) {
    const product = await this.noticeRepository.findOne({ id });
    if (!product)
      throw new NotFoundException(`Not Fount product ID:${product}`);

    return product;
  }
  async createNotice(body: any) {
    const notice = new Notice();
    notice.title = body.title;
    notice.titleEn = body.titleEn;

    notice.content = body.content;
    notice.contentEn = body.contentEn;

    console.log(body);
    const result = await this.noticeRepository.save(notice);

    return result;
  }

  async updateNotice(body: any) {
    console.log(body);
    const result = await this.noticeRepository.update({ id: body.id }, body);
    console.log(result);

    return result;
  }

  async deleteNotice(id: number) {
    await this.noticeRepository.delete({
      id,
    });

    return true;
  }
}
