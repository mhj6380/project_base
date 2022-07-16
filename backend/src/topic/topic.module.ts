import { Module } from "@nestjs/common";
import { TopicService } from "./topic.service";
import { TopicController } from "./topic.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Topic } from "./entities/topic.entity";
import { ConfigModule } from "@nestjs/config";

@Module({
  imports: [TypeOrmModule.forFeature([Topic]), ConfigModule],
  providers: [TopicService],
  controllers: [TopicController],
})
export class TopicModule {}
