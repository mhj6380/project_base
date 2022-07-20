import { Repository } from "typeorm";
import { Visit } from "./entities/visit.entity";
export declare class VisitService {
    private readonly visitRepository;
    constructor(visitRepository: Repository<Visit>);
    createVisit(body: any): Promise<void>;
    getChartTime(startDate: string, endDate: string): Promise<{
        labels: any[];
        counts: any[];
    }>;
    getChartDay(startDate: string, endDate: string): Promise<{
        labels: any[];
        counts: any[];
    }>;
    getChartMonth(startDate: string, endDate: string): Promise<{
        labels: any[];
        counts: any[];
    }>;
    getChartYear(): Promise<{
        labels: any[];
        counts: any[];
    }>;
}
