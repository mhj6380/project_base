import { Module } from "@nestjs/common";
import { CsService } from "./cs.service";
import { CsController } from "./cs.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigModule } from "@nestjs/config";
import { Cs } from "./entities/cs.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Cs]), ConfigModule],
  providers: [CsService],
  controllers: [CsController],
})
export class CsModule {}
