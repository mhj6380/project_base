import { User } from "src/auth/entities/auth.entity";
import { Repository } from "typeorm";
export declare class RankingService {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    getRank(userId: string, league: string, country: string): Promise<{
        myRanking: any;
        ranking: any;
    }>;
}
