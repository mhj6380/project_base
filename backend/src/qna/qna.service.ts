import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Qna } from "./entities/qna.entity";

@Injectable()
export class QnaService {
  constructor(
    @InjectRepository(Qna)
    private readonly qnaRepository: Repository<Qna>
  ) {}

  async sortChange(body: any) {
    console.log(body.datas);
    body.datas.map((item, index) => {
      this.qnaRepository.update({ id: item.id }, { sortIndex: index });
    });

    return true;
  }

  async getAllNotice(language: string) {
    // Validate partner
    const totalCount = await this.qnaRepository.count();
    // const productItems = await this.qnaRepository
    //   .createQueryBuilder()
    //   .orderBy("createdAt", "DESC")
    //   .getMany();

    let items;

    if (language === "KO") {
      items = await this.qnaRepository.query(
        `SELECT qna.id, qna.title, qna.content, qna.viewCount,  qna.createdAt, qna.updatedAt, tp.title as topic FROM qna as qna
        LEFT JOIN topic as tp ON qna.topic = tp.topicKey 
        ORDER BY sortIndex ASC, createdAt DESC`
      );
    } else {
      items = await this.qnaRepository.query(
        `SELECT qna.id, qna.titleEn as title, qna.contentEn as content, qna.viewCount,  qna.createdAt, qna.updatedAt, tp.titleEn as topic FROM qna as qna
        LEFT JOIN topic as tp ON qna.topic = tp.topicKey 
        ORDER BY sortIndex ASC, createdAt DESC`
      );
    }

    return {
      totalCount,
      data: items,
    };
  }

  async getAll() {
    const product = await this.qnaRepository
      .createQueryBuilder()
      .orderBy("sortIndex", "ASC")
      .addOrderBy("createdAt", "DESC")
      .getMany();

    return product;
  }

  async getOneNotice(id: number) {
    const product = await this.qnaRepository.findOne({ id });
    if (!product)
      throw new NotFoundException(`Not Fount product ID:${product}`);

    return product;
  }
  async createNotice(body: any) {
    console.log("BODY", body);
    const notice = new Qna();
    notice.title = body.title;
    notice.content = body.content;
    notice.titleEn = body.titleEn;
    notice.contentEn = body.contentEn;
    notice.topic = body.topic;

    const result = await this.qnaRepository.save(notice);

    return result;
  }

  async updateNotice(body: any) {
    console.log(body);
    const result = await this.qnaRepository.update({ id: body.id }, body);
    console.log(result);

    return result;
  }

  async deleteNotice(id: number) {
    await this.qnaRepository.delete({
      id,
    });

    return true;
  }
}
