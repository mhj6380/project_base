import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/auth/entities/auth.entity";
import { Repository } from "typeorm";

@Injectable()
export class RankingService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ) {}

  async getRank(userId: string, league: string, country: string) {
    // 내 랭킹정보
    const myRanking = await this.userRepository
      .query(`SELECT rk.userId, rk.country, rk.nickname, rk.accumulatedPoints, rk.rank, ug.title as grade FROM (SELECT   userId,country,level, nickname, accumulatedPoints, rank FROM (SELECT userId,nickname,accumulatedPoints,country,level,@vRank := @vRank + 1 AS rank
        FROM user AS p, (SELECT @vRank := 0) AS r 
        ORDER BY  accumulatedPoints DESC
        ) AS CNT  limit 100) as rk LEFT JOIN user_grade as ug ON rk.level = ug.level  WHERE userId = "${userId}" ORDER BY rank ASC `);

    let ranking;

    //리그별 & 국가별
    if (league === "total") {
      if (country === "total") {
        console.log("둘다 토탈이 맞잔아");
        ranking = await this.userRepository
          .query(`SELECT rk.userId, rk.country, rk.nickname, rk.accumulatedPoints, rk.rank, ug.title as grade FROM (SELECT   userId,country,level, nickname, accumulatedPoints, rank FROM (SELECT userId,nickname,accumulatedPoints,country,level,@vRank := @vRank + 1 AS rank
            FROM user AS p, (SELECT @vRank := 0) AS r  
            ORDER BY  accumulatedPoints DESC
            ) AS CNT  limit 100) as rk LEFT JOIN user_grade as ug ON rk.level = ug.level ORDER BY rank ASC`);
      } else {
        ranking = await this.userRepository.query(`
        SELECT rk.userId, rk.country, rk.nickname, rk.accumulatedPoints, rk.rank, ug.title as grade FROM (SELECT   userId,country,level, nickname, accumulatedPoints, rank FROM (SELECT userId,nickname,accumulatedPoints,country,level,@vRank := @vRank + 1 AS rank
          FROM user AS p, (SELECT @vRank := 0) AS r WHERE country ="${country}"
          ORDER BY  accumulatedPoints DESC
          ) AS CNT limit 100) as rk LEFT JOIN user_grade as ug ON rk.level = ug.level ORDER BY rank ASC
        `);
      }
    } else {
      if (country === "total") {
        ranking = await this.userRepository
          .query(`SELECT rk.userId, rk.country, rk.nickname, rk.accumulatedPoints, rk.rank, ug.title as grade FROM (SELECT   userId,country,level, nickname, accumulatedPoints, rank FROM (SELECT userId,nickname,accumulatedPoints,country,level,@vRank := @vRank + 1 AS rank
            FROM user AS p, (SELECT @vRank := 0) AS r WHERE level ="${league}"
            ORDER BY  accumulatedPoints DESC
            ) AS CNT limit 100) as rk LEFT JOIN user_grade as ug ON rk.level = ug.level ORDER BY rank ASC`);
      } else {
        ranking = await this.userRepository
          .query(`SELECT rk.userId, rk.country, rk.nickname, rk.accumulatedPoints, rk.rank, ug.title as grade FROM (SELECT   userId,country,level, nickname, accumulatedPoints, rank FROM (SELECT userId,nickname,accumulatedPoints,country,level,@vRank := @vRank + 1 AS rank
            FROM user AS p, (SELECT @vRank := 0) AS r WHERE country ="${country}" AND level = "${league}" 
            ORDER BY  accumulatedPoints DESC
            ) AS CNT limit 100) as rk LEFT JOIN user_grade as ug ON rk.level = ug.level ORDER BY rank ASC`);
      }
    }

    // if (myRanking.length > 0 && myRanking[0].hasOwnProperty("ranking")) {
    //   myRanking[0].ranking = Number(myRanking[0].ranking);
    // }

    ranking.map((item: any) => {
      item.rank = Number(item.rank);
    });

    myRanking.map((item: any) => {
      console.log(item.rank);
      item.rank = Number(item.rank);
    });

    if (myRanking.length === 0) {
      const myInfo = await this.userRepository.findOne({ userId });

      myRanking.push({
        userId: myInfo.userId,
        country: myInfo.country,
        nickname: myInfo.nickname,
        accumulatedPoints: myInfo.accumulatedPoints,
        rank: 0,
        grade: "Bronze1",
      });
    }

    return {
      myRanking,
      ranking,
    };
  }
}
