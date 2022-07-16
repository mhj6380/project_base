import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from "@nestjs/common";
import { CsService } from "./cs.service";

@Controller("cs")
export class CsController {
  constructor(private readonly crmService: CsService) {}

  @Get("/")
  test() {
    return this.crmService.test();
  }

  @Get("/:id")
  getOneNewCs(@Param("id") id: number) {
    return this.crmService.getOneNewCs(id);
  }

  @Post("/")
  createNewCs(@Body() body: any) {
    return this.crmService.createNewCs(body);
  }

  @Put("/:id")
  updateNewCs(@Body() body: any) {
    return this.crmService.updateNewCs(body);
  }

  @Delete("/:id")
  deleteNewCs(@Param("id") id: number) {
    return this.crmService.deleteNewCs(id);
  }

  @Get("/:page/:limit")
  getNewCsList(@Param("page") page: number, @Param("limit") limit: number) {
    return this.crmService.getNewCsList(page, limit);
  }
}
