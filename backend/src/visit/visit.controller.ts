import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { VisitService } from "./visit.service";

@Controller("visit")
export class VisitController {
  constructor(private readonly visitService: VisitService) {}

  @Post("/")
  createVisit(@Body() body): any {
    return this.visitService.createVisit(body);
  }

  @Get("/time/:startDate/:endDate")
  getChartTime(
    @Param("startDate") startDate: string,
    @Param("endDate") endDate: string
  ) {
    return this.visitService.getChartTime(startDate, endDate);
  }

  @Get("/day/:startDate/:endDate")
  getChartDay(
    @Param("startDate") startDate: string,
    @Param("endDate") endDate: string
  ) {
    return this.visitService.getChartDay(startDate, endDate);
  }

  @Get("/month/:startDate/:endDate")
  getChartMonth(
    @Param("startDate") startDate: string,
    @Param("endDate") endDate: string
  ) {
    return this.visitService.getChartMonth(startDate, endDate);
  }

  @Get("/year/:startDate/:endDate")
  getChartYear(
    @Param("startDate") startDate: string,
    @Param("endDate") endDate: string
  ) {
    return this.visitService.getChartYear();
  }
}
