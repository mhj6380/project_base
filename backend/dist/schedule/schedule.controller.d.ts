import { CreateScheduleDTO, UpdateScheduleDTO } from "./dto/schedule.dto";
import { Schedule } from "./entities/schedule.entity";
import { ScheduleService } from "./schedule.service";
export declare class ScheduleController {
    private readonly scheduleService;
    constructor(scheduleService: ScheduleService);
    createSchedule(body: CreateScheduleDTO): Promise<any>;
    updateSchedule(body: UpdateScheduleDTO): Promise<{
        statusCode: number;
        message: string;
    }>;
    deleteSchedule(id: number): Promise<{
        statusCode: number;
        message: string;
    }>;
    getListSchedule(categoryUid: string, yearMonth: string): Promise<Schedule[]>;
}
