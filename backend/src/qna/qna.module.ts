import { Module } from "@nestjs/common";
import { QnaService } from "./qna.service";
import { QnaController } from "./qna.controller";
import { Qna } from "./entities/qna.entity";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [TypeOrmModule.forFeature([Qna]), ConfigModule],
  providers: [QnaService],
  controllers: [QnaController],
})
export class QnaModule {}
