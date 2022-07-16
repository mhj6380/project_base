import { Qna } from "./entities/qna.entity";
import { QnaService } from "./qna.service";
export declare class QnaController {
    private readonly qnaService;
    constructor(qnaService: QnaService);
    sortChange(body: any): Promise<boolean>;
    createBoard(body: any): Promise<Qna>;
    updateNotice(body: any): Promise<import("typeorm").UpdateResult>;
    getAll(): Promise<Qna[]>;
    getAllNotice(language: any): Promise<{
        totalCount: number;
        data: any;
    }>;
    getOneNotice(id: number): Promise<Qna>;
    deleteBoard(id: number): Promise<boolean>;
}
