import { Module } from "@nestjs/common";
import { BoardService } from "./board.service";
import { BoardController } from "./board.controller";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import {
  Board,
  BoardContent,
  Comment,
  CommentLike,
  Like,
  Scrap,
} from "./entities/board.entity";
import { ContentTemplate } from "./entities/template.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Board,
      BoardContent,
      Comment,
      Like,
      Scrap,
      ContentTemplate,
      CommentLike,
    ]),
    ConfigModule,
  ],
  providers: [BoardService],
  controllers: [BoardController],
})
export class BoardModule {}
