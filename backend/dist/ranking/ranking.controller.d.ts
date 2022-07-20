import { RankingService } from "./ranking.service";
export declare class RankingController {
    private readonly rankingService;
    constructor(rankingService: RankingService);
    getRank(userId: string, league: string, country: string): Promise<{
        myRanking: any;
        ranking: any;
    }>;
}
