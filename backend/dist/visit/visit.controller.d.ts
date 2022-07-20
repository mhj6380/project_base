import { VisitService } from "./visit.service";
export declare class VisitController {
    private readonly visitService;
    constructor(visitService: VisitService);
    createVisit(body: any): any;
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
    getChartYear(startDate: string, endDate: string): Promise<{
        labels: any[];
        counts: any[];
    }>;
}
