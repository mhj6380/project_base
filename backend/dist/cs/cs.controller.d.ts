import { CsService } from "./cs.service";
export declare class CsController {
    private readonly crmService;
    constructor(crmService: CsService);
    test(): Promise<string>;
    getOneNewCs(id: number): Promise<import("./entities/cs.entity").Cs>;
    createNewCs(body: any): Promise<import("./entities/cs.entity").Cs>;
    updateNewCs(body: any): Promise<import("typeorm").UpdateResult>;
    deleteNewCs(id: number): Promise<void>;
    getNewCsList(page: number, limit: number): Promise<{
        totalCount: number;
        page: number;
        limit: number;
        data: import("./entities/cs.entity").Cs[];
    }>;
}
