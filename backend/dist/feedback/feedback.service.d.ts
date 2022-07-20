import { Repository } from "typeorm";
import { Feedback } from "./entities/feedback.entity";
export declare class FeedbackService {
    private readonly feedbackRepository;
    constructor(feedbackRepository: Repository<Feedback>);
    createFeedback(body: any): Promise<{
        statusCode: number;
        message: string;
    }>;
    getFeedbackList(page: number, limit: number): Promise<{
        totalCount: number;
        page: number;
        limit: number;
        items: Feedback[];
    }>;
}
