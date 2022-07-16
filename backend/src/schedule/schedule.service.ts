import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Schedule } from "./entities/schedule.entity";

@Injectable()
export class ScheduleService {
  constructor(
    @InjectRepository(Schedule)
    private readonly scheduleRepository: Repository<Schedule>
  ) {}

  async createSchedule(body) {
    const schedule = new Schedule();
    schedule.title = body.title;
    schedule.content = body.content;
    schedule.useRange = body.useRange;
    schedule.startAt = body.startAt;
    schedule.endAt = body.endAt;
    schedule.userId = body.userId;
    schedule.categoryUid = body.categoryUid;
    await this.scheduleRepository.save(schedule);
    return {
      statusCode: 200,
      message: "스케쥴이 등록되었습니다.",
    };
  }
  async updateSchedule(body) {
    await this.scheduleRepository.update({ id: body.id }, body);
    return {
      statusCode: 200,
      message: "스케쥴이 수정되었습니다.",
    };
  }
  async deleteSchedule(id: number) {
    await this.scheduleRepository.delete({ id });
    return {
      statusCode: 200,
      message: "스케쥴이 삭제되었습니다.",
    };
  }
  async getListSchedule(categoryUid: string, yearMonth: string) {
    const result = await this.scheduleRepository
      .createQueryBuilder("schedule")
      .where(
        "schedule.categoryUid = :categoryUid AND (startAt LIKE :range OR endAt LIKE :range)",
        { categoryUid, range: `%${yearMonth}%` }
      )
      .orderBy("schedule.startAt", "ASC")
      .getMany();

    return result;
  }
}
