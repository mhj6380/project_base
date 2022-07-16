import { Repository } from "typeorm";
import { Cs } from "./entities/cs.entity";
export declare class CsService {
    private readonly csRepository;
    constructor(csRepository: Repository<Cs>);
    test(): Promise<string>;
    getNewCsList(page: number, limit: number): Promise<{
        totalCount: number;
        page: number;
        limit: number;
        data: Cs[];
    }>;
    getNewCsSearchList(page: number, limit: number, searchText: string, startDate: string, endDate: string): Promise<{
        totalCount: number;
        page: number;
        limit: number;
        data: any;
    }>;
    getOneNewCs(id: number): Promise<Cs>;
    createNewCs(body: any): Promise<Cs>;
    updateNewCs(body: any): Promise<import("typeorm").UpdateResult>;
    deleteNewCs(id: number): Promise<void>;
}
