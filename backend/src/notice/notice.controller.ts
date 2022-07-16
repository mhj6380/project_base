import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from "@nestjs/common";
import { Notice } from "./entities/notice.entity";
import { NoticeService } from "./notice.service";

@Controller("notice")
export class NoticeController {
  constructor(private readonly noticeService: NoticeService) {}

  // **** 고객공지 ****
  //등록
  @Post("/")
  createBoard(@Body() body: any): Promise<Notice> {
    return this.noticeService.createNotice(body);
  }

  //수정
  @Put("/")
  updateNotice(@Body() body: any) {
    return this.noticeService.updateNotice(body);
  }

  //전체조회
  @Get("/:language/:page/:limit")
  getAllNotice(
    @Param("language") language: string,
    @Param("page") page: number,
    @Param("limit") limit: number
  ) {
    return this.noticeService.getAllNotice(language, page, limit);
  }

  //1개조회
  @Get("/:id")
  getOneNotice(@Param("id") id: number) {
    return this.noticeService.getOneNotice(id);
  }

  //삭제
  @Delete("/:id")
  deleteBoard(@Param("id") id: number) {
    return this.noticeService.deleteNotice(id);
  }
}
