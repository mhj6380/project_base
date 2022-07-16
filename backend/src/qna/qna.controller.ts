import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from "@nestjs/common";
import { Qna } from "./entities/qna.entity";
import { QnaService } from "./qna.service";

@Controller("qna")
export class QnaController {
  constructor(private readonly qnaService: QnaService) {}

  @Put("/sort-change")
  sortChange(@Body() body: any) {
    return this.qnaService.sortChange(body);
  }

  //등록
  @Post("/")
  createBoard(@Body() body: any): Promise<Qna> {
    return this.qnaService.createNotice(body);
  }

  //수정
  @Put("/")
  updateNotice(@Body() body: any) {
    return this.qnaService.updateNotice(body);
  }

  //전체조회 - 관리자용
  @Get("/")
  getAll() {
    return this.qnaService.getAll();
  }

  //전체조회
  @Get("/:language")
  getAllNotice(@Param("language") language) {
    return this.qnaService.getAllNotice(language);
  }

  // //1개조회
  @Get("/detail/:id")
  getOneNotice(@Param("id") id: number) {
    console.log("GGG");
    return this.qnaService.getOneNotice(id);
  }

  //삭제
  @Delete("/:id")
  deleteBoard(@Param("id") id: number) {
    return this.qnaService.deleteNotice(id);
  }
}
