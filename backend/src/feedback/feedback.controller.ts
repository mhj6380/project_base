import { Body, Controller, Get, Param, Post, Req } from "@nestjs/common";
import { FeedbackService } from "./feedback.service";

@Controller("feedback")
export class FeedbackController {
  constructor(private readonly feedbackService: FeedbackService) {}

  // 등록
  @Post("/feedback")
  createFeedback(@Body() body) {
    return this.feedbackService.createFeedback(body);
  }

  @Get("/feedback/:page/:limit")
  getFeedbackList(
    @Param("page") page: number,
    @Param("limit") limit: number
  ): Promise<any> {
    return this.feedbackService.getFeedbackList(page, limit);
  }
}
