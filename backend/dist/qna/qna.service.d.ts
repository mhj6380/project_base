import { Repository } from "typeorm";
import { Qna } from "./entities/qna.entity";
export declare class QnaService {
    private readonly qnaRepository;
    constructor(qnaRepository: Repository<Qna>);
    sortChange(body: any): Promise<boolean>;
    getAllNotice(language: string): Promise<{
        totalCount: number;
        data: any;
    }>;
    getAll(): Promise<Qna[]>;
    getOneNotice(id: number): Promise<Qna>;
    createNotice(body: any): Promise<Qna>;
    updateNotice(body: any): Promise<import("typeorm").UpdateResult>;
    deleteNotice(id: number): Promise<boolean>;
}
