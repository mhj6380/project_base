import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from "@nestjs/common";
import { CreateScheduleDTO, UpdateScheduleDTO } from "./dto/schedule.dto";
import { Schedule } from "./entities/schedule.entity";
import { ScheduleService } from "./schedule.service";

@Controller("schedule")
export class ScheduleController {
  constructor(private readonly scheduleService: ScheduleService) {}

  @Post("/")
  createSchedule(@Body() body: CreateScheduleDTO): Promise<any> {
    return this.scheduleService.createSchedule(body);
  }

  //수정
  @Put("/")
  updateSchedule(@Body() body: UpdateScheduleDTO) {
    return this.scheduleService.updateSchedule(body);
  }
  @Delete("/:id")
  deleteSchedule(@Param("id") id: number) {
    return this.scheduleService.deleteSchedule(id);
  }
  @Get("/:categoryUid/:yearMonth")
  getListSchedule(
    @Param("categoryUid") categoryUid: string,
    @Param("yearMonth") yearMonth: string
  ) {
    return this.scheduleService.getListSchedule(categoryUid, yearMonth);
  }
}
