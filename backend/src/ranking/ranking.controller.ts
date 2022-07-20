import { Controller, Get, Param } from "@nestjs/common";
import { RankingService } from "./ranking.service";

@Controller("ranking")
export class RankingController {
  constructor(private readonly rankingService: RankingService) {}
  //전체랭킹
  @Get("/:league/:country/:userId")
  getRank(
    @Param("userId") userId: string,
    @Param("league") league: string,
    @Param("country") country: string
  ) {
    return this.rankingService.getRank(userId, league, country);
  }
}
