import { Module } from "@nestjs/common";
import { ScheduleService } from "./schedule.service";
import { ScheduleController } from "./schedule.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigModule } from "@nestjs/config";
import { Schedule } from "./entities/schedule.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Schedule]), ConfigModule],
  providers: [ScheduleService],
  controllers: [ScheduleController],
})
export class ScheduleModule {}
