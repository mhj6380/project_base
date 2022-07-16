import { Notice } from "./entities/notice.entity";
import { NoticeService } from "./notice.service";
export declare class NoticeController {
    private readonly noticeService;
    constructor(noticeService: NoticeService);
    createBoard(body: any): Promise<Notice>;
    updateNotice(body: any): Promise<import("typeorm").UpdateResult>;
    getAllNotice(language: string, page: number, limit: number): Promise<{
        totalCount: number;
        page: number;
        limit: number;
        data: any;
    }>;
    getOneNotice(id: number): Promise<Notice>;
    deleteBoard(id: number): Promise<boolean>;
}
