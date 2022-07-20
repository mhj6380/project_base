import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Feedback } from "./entities/feedback.entity";

@Injectable()
export class FeedbackService {
  constructor(
    @InjectRepository(Feedback)
    private readonly feedbackRepository: Repository<Feedback>
  ) {}

  async createFeedback(body: any) {
    const feedback = new Feedback();

    feedback.userId = body.userId;
    feedback.content = body.content;
    feedback.score = body.score;
    await this.feedbackRepository.save(feedback);

    return {
      statusCode: 200,
      message: "피드백 작성 완료",
    };
  }
  async getFeedbackList(page: number, limit: number) {
    const skippedItems = (page - 1) * limit;
    const totalCount = await this.feedbackRepository.count();
    const crmItems = await this.feedbackRepository
      .createQueryBuilder()
      .orderBy("createdAt", "DESC")
      .offset(skippedItems)
      .limit(limit)
      .getMany();

    return {
      totalCount,
      page,
      limit,
      items: crmItems,
    };
  }
}
