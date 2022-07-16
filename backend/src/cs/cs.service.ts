import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
// import { Encrypt } from "src/globalFuntion";
import { Repository } from "typeorm";
import { Cs } from "./entities/cs.entity";

@Injectable()
export class CsService {
  constructor(
    @InjectRepository(Cs)
    private readonly csRepository: Repository<Cs>
  ) {}

  async test() {
    return "test";
  }

  async getNewCsList(page: number, limit: number) {
    // Validate partner

    const skippedItems = (page - 1) * limit;
    const totalCount = await this.csRepository.count();
    const crmItems = await this.csRepository
      .createQueryBuilder()
      .orderBy("createdAt", "DESC")
      .offset(skippedItems)
      .limit(limit)
      .getMany();

    return {
      totalCount,
      page,
      limit,
      data: crmItems,
    };
  }

  async getNewCsSearchList(
    page: number,
    limit: number,
    searchText: string,
    startDate: string,
    endDate: string
  ) {
    // Validate partner

    const skippedItems = (page - 1) * limit;
    const totalCount = await this.csRepository.count();

    console.log("startDate::", startDate);
    console.log("endDate::", endDate);

    let crmItems;

    if (searchText === "empty") {
      crmItems = await this.csRepository
        .createQueryBuilder()
        .andWhere("createdAt >= :startDate", { startDate })
        .andWhere("createdAt <= :endDate", { endDate: `${endDate} 23:59:59` })
        .orderBy("createdAt", "DESC")
        .offset(skippedItems)
        .limit(limit)
        .getMany();
    } else {
      crmItems = await this.csRepository
        .createQueryBuilder()
        .andWhere("title like :title", { title: `%${searchText}%` })
        .andWhere("createdAt >= :startDate", { startDate })
        .andWhere("createdAt <= :endDate", { endDate: `${endDate} 23:59:59` })
        .orWhere("username like :username", { username: `%${searchText}%` })
        .orWhere("content like :content", { content: `%${searchText}%` })
        .orWhere("memo like :memo", { memo: `%${searchText}%` })
        .orderBy("createdAt", "DESC")
        .offset(skippedItems)
        .limit(limit)
        .getMany();
    }

    return {
      totalCount,
      page,
      limit,
      data: crmItems,
    };
  }

  async getOneNewCs(id: number) {
    const cs = await this.csRepository.findOne({ id });
    if (!cs) throw new NotFoundException(`Not Fount CRM ID:${cs}`);

    return cs;
  }
  async createNewCs(body: any) {
    const cs = new Cs();
    cs.userId = body.userId;
    cs.question = body.question;
    cs.answer = body.answer;

    const result = await this.csRepository.save(cs);

    return result;
  }
  async updateNewCs(body: any) {
    const result = await this.csRepository.update({ id: body.id }, body);

    return result;
  }
  async deleteNewCs(id: number) {
    await this.csRepository.delete({ id });
  }
}
