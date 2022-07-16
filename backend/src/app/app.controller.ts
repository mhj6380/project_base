import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Req,
  UseFilters,
} from "@nestjs/common";
import { OneSignalService } from "onesignal-api-client-nest";
import { AppService } from "./app.service";
import clayful from "clayful";

@Controller("")
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly oneSignalService: OneSignalService
  ) {}

  @Get()
  home() {
    return "Backend v.0.0.111";
  }

  @Get("/devtool")
  async devTool() {
    try {
      return await this.appService.devTool();
    } catch (e) {
      console.log(e.message);
    }
  }

  @Put("/update")
  async testDataUpdate(@Body() body) {
    return await this.appService.testDataUpdate(body);
  }
  @Get("/get/:field")
  async getTestData(@Param("field") field) {
    return await this.appService.getTestData(field);
  }
}
