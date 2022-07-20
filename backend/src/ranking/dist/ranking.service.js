"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.RankingService = void 0;
var common_1 = require("@nestjs/common");
var typeorm_1 = require("@nestjs/typeorm");
var auth_entity_1 = require("src/auth/entities/auth.entity");
var RankingService = /** @class */ (function () {
    function RankingService(userRepository) {
        this.userRepository = userRepository;
    }
    RankingService.prototype.getRank = function (userId, league, country) {
        return __awaiter(this, void 0, void 0, function () {
            var myRanking, ranking;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.userRepository
                            .query("SELECT rk.userId, rk.country, rk.nickname, rk.accumulatedPoints, rk.rank, ug.title as grade FROM (SELECT   userId,country,level, nickname, accumulatedPoints, rank FROM (SELECT userId,nickname,accumulatedPoints,country,level,@vRank := @vRank + 1 AS rank\n        FROM user AS p, (SELECT @vRank := 0) AS r \n        ORDER BY  accumulatedPoints DESC\n        ) AS CNT  limit 100) as rk LEFT JOIN user_grade as ug ON rk.level = ug.level  WHERE userId = \"" + userId + "\" ORDER BY rank ASC ")];
                    case 1:
                        myRanking = _a.sent();
                        if (!(league === "total")) return [3 /*break*/, 6];
                        if (!(country === "total")) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.userRepository
                                .query("SELECT rk.userId, rk.country, rk.nickname, rk.accumulatedPoints, rk.rank, ug.title as grade FROM (SELECT   userId,country,level, nickname, accumulatedPoints, rank FROM (SELECT userId,nickname,accumulatedPoints,country,level,@vRank := @vRank + 1 AS rank\n            FROM user AS p, (SELECT @vRank := 0) AS r  \n            ORDER BY  accumulatedPoints DESC\n            ) AS CNT  limit 100) as rk LEFT JOIN user_grade as ug ON rk.level = ug.level ORDER BY rank ASC")];
                    case 2:
                        ranking = _a.sent();
                        return [3 /*break*/, 5];
                    case 3: return [4 /*yield*/, this.userRepository.query("\n        SELECT rk.userId, rk.country, rk.nickname, rk.accumulatedPoints, rk.rank, ug.title as grade FROM (SELECT   userId,country,level, nickname, accumulatedPoints, rank FROM (SELECT userId,nickname,accumulatedPoints,country,level,@vRank := @vRank + 1 AS rank\n          FROM user AS p, (SELECT @vRank := 0) AS r WHERE country =\"" + country + "\"\n          ORDER BY  accumulatedPoints DESC\n          ) AS CNT limit 100) as rk LEFT JOIN user_grade as ug ON rk.level = ug.level ORDER BY rank ASC\n        ")];
                    case 4:
                        ranking = _a.sent();
                        _a.label = 5;
                    case 5: return [3 /*break*/, 10];
                    case 6:
                        if (!(country === "total")) return [3 /*break*/, 8];
                        return [4 /*yield*/, this.userRepository
                                .query("SELECT rk.userId, rk.country, rk.nickname, rk.accumulatedPoints, rk.rank, ug.title as grade FROM (SELECT   userId,country,level, nickname, accumulatedPoints, rank FROM (SELECT userId,nickname,accumulatedPoints,country,level,@vRank := @vRank + 1 AS rank\n            FROM user AS p, (SELECT @vRank := 0) AS r WHERE level =\"" + league + "\"\n            ORDER BY  accumulatedPoints DESC\n            ) AS CNT limit 100) as rk LEFT JOIN user_grade as ug ON rk.level = ug.level ORDER BY rank ASC")];
                    case 7:
                        ranking = _a.sent();
                        return [3 /*break*/, 10];
                    case 8: return [4 /*yield*/, this.userRepository
                            .query("SELECT rk.userId, rk.country, rk.nickname, rk.accumulatedPoints, rk.rank, ug.title as grade FROM (SELECT   userId,country,level, nickname, accumulatedPoints, rank FROM (SELECT userId,nickname,accumulatedPoints,country,level,@vRank := @vRank + 1 AS rank\n            FROM user AS p, (SELECT @vRank := 0) AS r WHERE country =\"" + country + "\" AND level = \"" + league + "\" \n            ORDER BY  accumulatedPoints DESC\n            ) AS CNT limit 100) as rk LEFT JOIN user_grade as ug ON rk.level = ug.level ORDER BY rank ASC")];
                    case 9:
                        ranking = _a.sent();
                        _a.label = 10;
                    case 10:
                        // if (myRanking.length > 0 && myRanking[0].hasOwnProperty("ranking")) {
                        //   myRanking[0].ranking = Number(myRanking[0].ranking);
                        // }
                        ranking.map(function (item) {
                            console.log(item.rank);
                            item.rank = Number(item.rank);
                        });
                        myRanking.map(function (item) {
                            console.log(item.rank);
                            item.rank = Number(item.rank);
                        });
                        return [2 /*return*/, {
                                myRanking: myRanking,
                                ranking: ranking
                            }];
                }
            });
        });
    };
    RankingService = __decorate([
        common_1.Injectable(),
        __param(0, typeorm_1.InjectRepository(auth_entity_1.User))
    ], RankingService);
    return RankingService;
}());
exports.RankingService = RankingService;
