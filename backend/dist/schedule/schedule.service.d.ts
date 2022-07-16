import { Repository } from "typeorm";
import { Schedule } from "./entities/schedule.entity";
export declare class ScheduleService {
    private readonly scheduleRepository;
    constructor(scheduleRepository: Repository<Schedule>);
    createSchedule(body: any): Promise<{
        statusCode: number;
        message: string;
    }>;
    updateSchedule(body: any): Promise<{
        statusCode: number;
        message: string;
    }>;
    deleteSchedule(id: number): Promise<{
        statusCode: number;
        message: string;
    }>;
    getListSchedule(categoryUid: string, yearMonth: string): Promise<Schedule[]>;
}
