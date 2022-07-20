import { FeedbackService } from "./feedback.service";
export declare class FeedbackController {
    private readonly feedbackService;
    constructor(feedbackService: FeedbackService);
    createFeedback(body: any): Promise<{
        statusCode: number;
        message: string;
    }>;
    getFeedbackList(page: number, limit: number): Promise<any>;
}
