import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Topic } from "./entities/topic.entity";
import { Repository } from "typeorm";
import { ITopicList } from "src/interface/topic.interface";
import { IResponse } from "src/interface/response.interface";
import { CreateTopicDTO, UpdateTopicDTO } from "./dto/topic.dto";

@Injectable()
export class TopicService {
  constructor(
    @InjectRepository(Topic)
    private readonly topicRepository: Repository<Topic>
  ) {}

  async getList(type: string): Promise<ITopicList> {
    const totalCount = await this.topicRepository.count();
    const items = await this.topicRepository
      .createQueryBuilder()
      .where("type = :type", { type })
      .orderBy("createdAt", "DESC")
      .getMany();

    return {
      totalCount,
      items,
    };
  }

  async createItem(body: CreateTopicDTO): Promise<Topic> {
    const topic = new Topic();
    topic.title = body.title;
    topic.type = body.type;

    await this.topicRepository.save(topic);

    return topic;
  }

  async getOne(id: number): Promise<Topic> {
    const product = await this.topicRepository.findOne({ id });
    if (!product)
      throw new NotFoundException(`Not Fount product ID:${product}`);

    return product;
  }

  async updateItem(body: UpdateTopicDTO): Promise<IResponse> {
    await this.topicRepository.update({ id: body.id }, body);

    return {
      statusCode: 200,
      message: "수정이 완료되었습니다.",
    };
  }

  async deleteItem(id: number): Promise<IResponse> {
    await this.topicRepository.delete({ id });
    return {
      statusCode: 200,
      message: "삭제가 완료되었습니다.",
    };
  }
}
