import { Module } from "@nestjs/common";
import { RankingService } from "./ranking.service";
import { RankingController } from "./ranking.controller";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "src/auth/entities/auth.entity";

@Module({
  imports: [TypeOrmModule.forFeature([User]), ConfigModule],
  providers: [RankingService],
  controllers: [RankingController],
})
export class RankingModule {}
