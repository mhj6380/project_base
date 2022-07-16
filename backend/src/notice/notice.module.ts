import { Module } from "@nestjs/common";
import { NoticeService } from "./notice.service";
import { NoticeController } from "./notice.controller";
import { Notice } from "./entities/notice.entity";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [TypeOrmModule.forFeature([Notice]), ConfigModule],
  providers: [NoticeService],
  controllers: [NoticeController],
})
export class NoticeModule {}
