import { Repository } from "typeorm";
import { Notice } from "./entities/notice.entity";
export declare class NoticeService {
    private readonly noticeRepository;
    constructor(noticeRepository: Repository<Notice>);
    getAllNotice(language: string, page: number, limit: number): Promise<{
        totalCount: number;
        page: number;
        limit: number;
        data: any;
    }>;
    getOneNotice(id: number): Promise<Notice>;
    createNotice(body: any): Promise<Notice>;
    updateNotice(body: any): Promise<import("typeorm").UpdateResult>;
    deleteNotice(id: number): Promise<boolean>;
}
