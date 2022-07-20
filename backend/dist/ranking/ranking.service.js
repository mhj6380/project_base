"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RankingService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const auth_entity_1 = require("../auth/entities/auth.entity");
const typeorm_2 = require("typeorm");
let RankingService = class RankingService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    getRank(userId, league, country) {
        return __awaiter(this, void 0, void 0, function* () {
            const myRanking = yield this.userRepository
                .query(`SELECT rk.userId, rk.country, rk.nickname, rk.accumulatedPoints, rk.rank, ug.title as grade FROM (SELECT   userId,country,level, nickname, accumulatedPoints, rank FROM (SELECT userId,nickname,accumulatedPoints,country,level,@vRank := @vRank + 1 AS rank
        FROM user AS p, (SELECT @vRank := 0) AS r 
        ORDER BY  accumulatedPoints DESC
        ) AS CNT  limit 100) as rk LEFT JOIN user_grade as ug ON rk.level = ug.level  WHERE userId = "${userId}" ORDER BY rank ASC `);
            let ranking;
            if (league === "total") {
                if (country === "total") {
                    console.log("둘다 토탈이 맞잔아");
                    ranking = yield this.userRepository
                        .query(`SELECT rk.userId, rk.country, rk.nickname, rk.accumulatedPoints, rk.rank, ug.title as grade FROM (SELECT   userId,country,level, nickname, accumulatedPoints, rank FROM (SELECT userId,nickname,accumulatedPoints,country,level,@vRank := @vRank + 1 AS rank
            FROM user AS p, (SELECT @vRank := 0) AS r  
            ORDER BY  accumulatedPoints DESC
            ) AS CNT  limit 100) as rk LEFT JOIN user_grade as ug ON rk.level = ug.level ORDER BY rank ASC`);
                }
                else {
                    ranking = yield this.userRepository.query(`
        SELECT rk.userId, rk.country, rk.nickname, rk.accumulatedPoints, rk.rank, ug.title as grade FROM (SELECT   userId,country,level, nickname, accumulatedPoints, rank FROM (SELECT userId,nickname,accumulatedPoints,country,level,@vRank := @vRank + 1 AS rank
          FROM user AS p, (SELECT @vRank := 0) AS r WHERE country ="${country}"
          ORDER BY  accumulatedPoints DESC
          ) AS CNT limit 100) as rk LEFT JOIN user_grade as ug ON rk.level = ug.level ORDER BY rank ASC
        `);
                }
            }
            else {
                if (country === "total") {
                    ranking = yield this.userRepository
                        .query(`SELECT rk.userId, rk.country, rk.nickname, rk.accumulatedPoints, rk.rank, ug.title as grade FROM (SELECT   userId,country,level, nickname, accumulatedPoints, rank FROM (SELECT userId,nickname,accumulatedPoints,country,level,@vRank := @vRank + 1 AS rank
            FROM user AS p, (SELECT @vRank := 0) AS r WHERE level ="${league}"
            ORDER BY  accumulatedPoints DESC
            ) AS CNT limit 100) as rk LEFT JOIN user_grade as ug ON rk.level = ug.level ORDER BY rank ASC`);
                }
                else {
                    ranking = yield this.userRepository
                        .query(`SELECT rk.userId, rk.country, rk.nickname, rk.accumulatedPoints, rk.rank, ug.title as grade FROM (SELECT   userId,country,level, nickname, accumulatedPoints, rank FROM (SELECT userId,nickname,accumulatedPoints,country,level,@vRank := @vRank + 1 AS rank
            FROM user AS p, (SELECT @vRank := 0) AS r WHERE country ="${country}" AND level = "${league}" 
            ORDER BY  accumulatedPoints DESC
            ) AS CNT limit 100) as rk LEFT JOIN user_grade as ug ON rk.level = ug.level ORDER BY rank ASC`);
                }
            }
            ranking.map((item) => {
                item.rank = Number(item.rank);
            });
            myRanking.map((item) => {
                console.log(item.rank);
                item.rank = Number(item.rank);
            });
            if (myRanking.length === 0) {
                const myInfo = yield this.userRepository.findOne({ userId });
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
        });
    }
};
RankingService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(auth_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], RankingService);
exports.RankingService = RankingService;
//# sourceMappingURL=ranking.service.js.map