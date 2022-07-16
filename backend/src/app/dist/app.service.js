"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
exports.AppService = void 0;
var common_1 = require("@nestjs/common");
var typeorm_1 = require("@nestjs/typeorm");
var splash_entity_1 = require("./entities/splash.entity");
var qna_entity_1 = require("./entities/qna.entity");
var sound_entity_1 = require("../sound/entities/sound.entity");
var sound_mix_entity_1 = require("../sound-mix/entities/sound-mix.entity");
var sound_original_entity_1 = require("../sound-original/entities/sound-original.entity");
var topic_entity_1 = require("../topic/entities/topic.entity");
var language_string_entity_1 = require("./entities/language-string.entity");
var follow_entity_1 = require("../follow/entities/follow.entity");
var auth_entity_1 = require("../auth/entities/auth.entity");
var like_entity_1 = require("./entities/like.entity");
var history_point_entity_1 = require("../history-point/entities/history-point.entity");
var dayjs = require("dayjs");
var premium_entity_1 = require("./entities/premium.entity");
var user_grade_entity_1 = require("src/history-point/entities/user-grade.entity");
var scrab_entity_1 = require("./entities/scrab.entity");
// import dayjs = require("dayjs");
var AppService = /** @class */ (function () {
    function AppService(splashRepository, bottomNavRepository, qnaRepository, soundRepository, soundMixRepository, soundOriginalRepository, topicRepository, languageRepository, followRepository, userRepository, likeUserRepository, premiumRepository, userGradeRepository, scrabRepository, historyPointRepository, historyPointService) {
        this.splashRepository = splashRepository;
        this.bottomNavRepository = bottomNavRepository;
        this.qnaRepository = qnaRepository;
        this.soundRepository = soundRepository;
        this.soundMixRepository = soundMixRepository;
        this.soundOriginalRepository = soundOriginalRepository;
        this.topicRepository = topicRepository;
        this.languageRepository = languageRepository;
        this.followRepository = followRepository;
        this.userRepository = userRepository;
        this.likeUserRepository = likeUserRepository;
        this.premiumRepository = premiumRepository;
        this.userGradeRepository = userGradeRepository;
        this.scrabRepository = scrabRepository;
        this.historyPointRepository = historyPointRepository;
        this.historyPointService = historyPointService;
    }
    AppService.prototype.devTool = function () {
        return __awaiter(this, void 0, void 0, function () {
            var i;
            return __generator(this, function (_a) {
                for (i = 1; i < 201; i++) {
                    this.languageRepository.query("UPDATE language_string SET string" + i + " = \"String" + i + "\" WHERE language=\"EN\"");
                    console.log("UPDATE language_string SET string" + i + " = \"String" + i + "\" WHERE language=\"EN\"");
                }
                return [2 /*return*/, true];
            });
        });
    };
    // App Splash Datas
    AppService.prototype.policy = function () {
        return __awaiter(this, void 0, void 0, function () {
            var policyData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.splashRepository
                            .createQueryBuilder("splash")
                            .select(["splash.policy", "splash.terms"])
                            .getOne()];
                    case 1:
                        policyData = _a.sent();
                        console.log(policyData);
                        return [2 /*return*/, policyData];
                }
            });
        });
    };
    AppService.prototype.addPremium = function (userId) {
        return __awaiter(this, void 0, void 0, function () {
            var currentData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.soundMixRepository.query("SELECT id FROM achievement WHERE userId = \"" + userId + "\"")];
                    case 1:
                        currentData = _a.sent();
                        if (!currentData[0]) {
                            this.soundMixRepository.query("INSERT INTO achievement (userId, assetId) VALUES (\"" + userId + "\",11)");
                        }
                        return [2 /*return*/, true];
                }
            });
        });
    };
    AppService.prototype.likeUser = function (body) {
        return __awaiter(this, void 0, Promise, function () {
            var isLikedValid, likeUser;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.likeUserRepository.findOne({
                            fromUser: body.fromUser,
                            toUser: body.toUser
                        })];
                    case 1:
                        isLikedValid = _a.sent();
                        if (!isLikedValid) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.userRepository.decrement({ userId: body.toUser }, "likeCount", 1)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.likeUserRepository["delete"]({
                                fromUser: body.fromUser,
                                toUser: body.toUser
                            })];
                    case 3:
                        _a.sent();
                        return [2 /*return*/, {
                                statusCode: 200,
                                message: "유저 좋아요 취소"
                            }];
                    case 4: return [4 /*yield*/, this.userRepository.increment({ userId: body.toUser }, "likeCount", 1)];
                    case 5:
                        _a.sent();
                        console.log({ userId: body.toUser });
                        likeUser = new like_entity_1.LikeUser();
                        likeUser.fromUser = body.fromUser;
                        likeUser.toUser = body.toUser;
                        return [4 /*yield*/, this.likeUserRepository.save(likeUser)];
                    case 6:
                        _a.sent();
                        return [2 /*return*/, {
                                statusCode: 200,
                                message: "유저 좋아요 완료"
                            }];
                }
            });
        });
    };
    AppService.prototype.getLanguageString = function () {
        return __awaiter(this, void 0, Promise, function () {
            var languageString;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.languageRepository.find()];
                    case 1:
                        languageString = _a.sent();
                        return [2 /*return*/, languageString];
                }
            });
        });
    };
    AppService.prototype.updateLanguageString = function (body) {
        return __awaiter(this, void 0, Promise, function () {
            var languageString;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.languageRepository.update({ language: body.language }, body)];
                    case 1:
                        languageString = _a.sent();
                        return [2 /*return*/, languageString];
                }
            });
        });
    };
    AppService.prototype.splash = function (userId, language) {
        return __awaiter(this, void 0, Promise, function () {
            var splash, bottomNav, soundTopicList, originalTopicList, soundItemList, rescentSoundMixList, mySoundMixList, originalSoundList, myArchievementList, myFollowList, myFanList, popularProducerList, languageString, today, premiumState, isPremium, gradeList, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (userId !== "empty") {
                            this.historyPointService.incrementUserPoint({
                                userId: userId,
                                reason: "login"
                            });
                        }
                        return [4 /*yield*/, this.splashRepository.findOne()];
                    case 1:
                        splash = _a.sent();
                        delete splash.id;
                        return [4 /*yield*/, this.bottomNavRepository
                                .createQueryBuilder()
                                .orderBy("sortIndex", "ASC")
                                .getMany()];
                    case 2:
                        bottomNav = _a.sent();
                        return [4 /*yield*/, this.topicRepository
                                .createQueryBuilder()
                                .where("type = :type", { type: "sound" })
                                .orderBy("createdAt", "DESC")
                                .getMany()];
                    case 3:
                        soundTopicList = _a.sent();
                        return [4 /*yield*/, this.topicRepository
                                .createQueryBuilder()
                                .where("type = :type", { type: "original" })
                                .orderBy("createdAt", "DESC")
                                .getMany()];
                    case 4:
                        originalTopicList = _a.sent();
                        if (!(language === "KO")) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.soundRepository.query("SELECT id, icon, iconSelected,title,topic,source,createdAt,updatedAt,isPremium,type,volume,indexId FROM sound WHERE isPublic = true ORDER BY sortIndex ASC,createdAt DESC")];
                    case 5:
                        soundItemList = _a.sent();
                        return [3 /*break*/, 8];
                    case 6: return [4 /*yield*/, this.soundRepository.query("SELECT id, icon, iconSelected,titleEn as title,topic,source,createdAt,updatedAt,isPremium,type,volume,indexId FROM sound WHERE isPublic = true ORDER BY sortIndex ASC,createdAt DESC")];
                    case 7:
                        soundItemList = _a.sent();
                        _a.label = 8;
                    case 8:
                        soundItemList.map(function (item) {
                            item.play = false;
                            item.isPremium = Boolean(item.isPremium);
                        });
                        return [4 /*yield*/, this.soundMixRepository
                                .createQueryBuilder("soundMix")
                                .leftJoinAndSelect("soundMix.author", "author")
                                .select(["soundMix", "author.profile", "author.nickname"])
                                .where("isPublic = :isPublic", { isPublic: true })
                                .andWhere("author.profile IS NOT :null", { "null": null })
                                .andWhere("soundMix.isActive = :isActive", { isActive: false }) // 게시자가 삭제한건 제외.andWhere("soundMix.isActive = :isActive", { isActive: false }) // 게시자가 삭제한건 제외
                                .orderBy("soundMix.createdAt", "DESC")
                                .limit(20)
                                .getMany()];
                    case 9:
                        rescentSoundMixList = _a.sent();
                        return [4 /*yield*/, this.soundMixRepository
                                .createQueryBuilder("soundMix")
                                .leftJoinAndSelect("soundMix.author", "author")
                                .select(["soundMix", "author.profile", "author.nickname"])
                                .where("soundMix.userId = :userId", { userId: userId })
                                .andWhere("author.profile IS NOT :null", { "null": null })
                                .andWhere("soundMix.isActive = :isActive", { isActive: false }) // 게시자가 삭제한건 제외
                                .orderBy("soundMix.createdAt", "DESC")
                                .limit(20)
                                .getMany()];
                    case 10:
                        mySoundMixList = _a.sent();
                        return [4 /*yield*/, this.soundOriginalRepository
                                .createQueryBuilder()
                                .orderBy("createdAt", "DESC")
                                .limit(20)
                                .getMany()];
                    case 11:
                        originalSoundList = _a.sent();
                        return [4 /*yield*/, this.soundMixRepository.query("SELECT aa.id, aa.disabledIcon, aa.activeIcon, aa.title,IF(av.userId IS NULL, 0, 1) as completed FROM achievementAsset as aa LEFT JOIN (SELECT * FROM achievement WHERE userId =  \"" + userId + "\") as av on aa.id = av.assetId  ORDER BY av.id ASC")];
                    case 12:
                        myArchievementList = _a.sent();
                        myArchievementList.map(function (item) {
                            item.completed = item.completed.toString();
                        });
                        return [4 /*yield*/, this.followRepository
                                .createQueryBuilder()
                                .where("fromUser = :userId", { userId: userId })
                                .orderBy("createdAt", "DESC")
                                .getMany()];
                    case 13:
                        myFollowList = _a.sent();
                        return [4 /*yield*/, this.followRepository
                                .createQueryBuilder()
                                .where("toUser = :userId", { userId: userId })
                                .orderBy("createdAt", "DESC")
                                .getMany()];
                    case 14:
                        myFanList = _a.sent();
                        return [4 /*yield*/, this.userRepository
                                .createQueryBuilder("user")
                                .select(["user.userId", "user.profile"])
                                .orderBy("createdAt", "DESC")
                                .limit(20)
                                .getMany()];
                    case 15:
                        popularProducerList = _a.sent();
                        return [4 /*yield*/, this.languageRepository.find({ language: language })];
                    case 16:
                        languageString = _a.sent();
                        today = dayjs().format("YYYY-MM-DD HH:mm:ss");
                        console.log(today);
                        return [4 /*yield*/, this.premiumRepository
                                .createQueryBuilder("premium")
                                .select(["premium.endDatetime"])
                                .where("userId = :userId", { userId: userId })
                                .andWhere("endDatetime > :today", { today: today })
                                .getOne()];
                    case 17:
                        premiumState = _a.sent();
                        isPremium = premiumState ? true : false;
                        return [4 /*yield*/, this.userGradeRepository
                                .createQueryBuilder("grade")
                                .select(["grade.level", "grade.title"])
                                .orderBy("grade.level", "ASC")
                                .getMany()];
                    case 18:
                        gradeList = _a.sent();
                        response = __assign(__assign({}, splash), { isPremium: isPremium,
                            bottomNav: bottomNav,
                            soundTopicList: soundTopicList,
                            originalTopicList: originalTopicList,
                            soundItemList: soundItemList,
                            rescentSoundMixList: rescentSoundMixList,
                            originalSoundList: originalSoundList,
                            mySoundMixList: mySoundMixList,
                            myArchievementList: myArchievementList,
                            myFollowList: myFollowList,
                            myFanList: myFanList,
                            popularProducerList: popularProducerList,
                            gradeList: gradeList, languageString: languageString[0] });
                        return [2 /*return*/, response];
                }
            });
        });
    };
    // 해당 유저의 프로필 API
    AppService.prototype.getUserProfile = function (myUserId, targetUserId) {
        return __awaiter(this, void 0, void 0, function () {
            var user, soundMixList, achievementList, isLikedValid, isLiked, isFollowedValid, isFollowed;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.userRepository.findOne({
                            userId: targetUserId || ""
                        })];
                    case 1:
                        user = _a.sent();
                        if (!user)
                            throw new common_1.NotFoundException("Not Fount User ID:" + targetUserId);
                        if (!(myUserId === targetUserId)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.soundMixRepository
                                .createQueryBuilder("soundMix")
                                .leftJoinAndSelect("soundMix.author", "author")
                                .select(["soundMix", "author.profile", "author.nickname"])
                                .where("soundMix.userId = :userId", { userId: targetUserId })
                                .andWhere("author.profile IS NOT :null", { "null": null })
                                .orderBy("soundMix.createdAt", "DESC")
                                .getMany()];
                    case 2:
                        soundMixList = _a.sent();
                        return [3 /*break*/, 5];
                    case 3: return [4 /*yield*/, this.soundMixRepository
                            .createQueryBuilder("soundMix")
                            .leftJoinAndSelect("soundMix.author", "author")
                            .select(["soundMix", "author.profile", "author.nickname"])
                            .where("soundMix.userId = :userId", { userId: targetUserId })
                            .andWhere("soundMix.isPublic = :isPublic", { isPublic: true })
                            .andWhere("author.profile IS NOT :null", { "null": null })
                            .orderBy("soundMix.createdAt", "DESC")
                            .getMany()];
                    case 4:
                        soundMixList = _a.sent();
                        _a.label = 5;
                    case 5: return [4 /*yield*/, this.soundMixRepository.query("SELECT aa.id, aa.disabledIcon, aa.activeIcon, aa.title,IF(av.userId IS NULL, 0, 1) as completed FROM achievementAsset as aa LEFT JOIN (SELECT * FROM achievement WHERE userId = \"" + targetUserId + "\") as av on aa.id = av.assetId ORDER BY aa.sortIndex ASC")];
                    case 6:
                        achievementList = _a.sent();
                        return [4 /*yield*/, this.likeUserRepository.findOne({
                                fromUser: myUserId,
                                toUser: targetUserId
                            })];
                    case 7:
                        isLikedValid = _a.sent();
                        isLiked = isLikedValid ? true : false;
                        return [4 /*yield*/, this.followRepository.findOne({
                                fromUser: myUserId,
                                toUser: targetUserId
                            })];
                    case 8:
                        isFollowedValid = _a.sent();
                        isFollowed = isFollowedValid ? true : false;
                        return [2 /*return*/, {
                                isLiked: isLiked,
                                isFollowed: isFollowed,
                                userData: user,
                                soundMixList: soundMixList,
                                achievementList: achievementList
                            }];
                }
            });
        });
    };
    // App Splash Datas
    AppService.prototype.updateSplash = function (body) {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                this.splashRepository.update({}, body);
                return [2 /*return*/];
            });
        });
    };
    AppService.prototype.getAllQnA = function (page, limit) {
        return __awaiter(this, void 0, void 0, function () {
            var skippedItems, totalCount, productItems;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        skippedItems = (page - 1) * limit;
                        return [4 /*yield*/, this.qnaRepository.count()];
                    case 1:
                        totalCount = _a.sent();
                        return [4 /*yield*/, this.qnaRepository
                                .createQueryBuilder()
                                .orderBy("sortIndex", "ASC")
                                .addOrderBy("createdAt", "DESC")
                                .offset(skippedItems)
                                .limit(limit)
                                .getMany()];
                    case 2:
                        productItems = _a.sent();
                        return [2 /*return*/, {
                                totalCount: totalCount,
                                page: page,
                                limit: limit,
                                data: productItems
                            }];
                }
            });
        });
    };
    AppService.prototype.getOneQnA = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var product;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.qnaRepository.findOne({ id: id })];
                    case 1:
                        product = _a.sent();
                        if (!product)
                            throw new common_1.NotFoundException("Not Fount product ID:" + product);
                        return [2 /*return*/, product];
                }
            });
        });
    };
    AppService.prototype.createQnA = function (body) {
        return __awaiter(this, void 0, void 0, function () {
            var qna, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        qna = new qna_entity_1.Qna();
                        qna.title = body.title;
                        qna.content = body.content;
                        qna.topic = body.topic;
                        return [4 /*yield*/, this.qnaRepository.save(qna)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    AppService.prototype.updateQnA = function (body) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.qnaRepository.update({ id: body.id }, body)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    AppService.prototype.deleteQnA = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.qnaRepository["delete"]({
                            id: id
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, true];
                }
            });
        });
    };
    AppService.prototype.getMyScrab = function (userId, topic) {
        return __awaiter(this, void 0, void 0, function () {
            var page, limit, itemTable, scrabTable, skippedItems, totalCount, productItems, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        console.log({ userId: userId, topic: topic });
                        page = 1;
                        limit = 9999;
                        scrabTable = "likes";
                        skippedItems = (page - 1) * limit;
                        return [4 /*yield*/, this.scrabRepository.count({ userId: userId })];
                    case 1:
                        totalCount = _b.sent();
                        _a = topic;
                        switch (_a) {
                            case "sound-mix": return [3 /*break*/, 2];
                            case "sound-original": return [3 /*break*/, 4];
                        }
                        return [3 /*break*/, 6];
                    case 2:
                        itemTable = "sound_mix";
                        return [4 /*yield*/, this.soundMixRepository
                                .query("SELECT * FROM (SELECT data.*, @rownum:=@rownum+1 AS position FROM (SELECT item.*,us.profile, us.nickname FROM " + scrabTable + " as scrab\n            LEFT JOIN " + itemTable + " as item ON scrab.parentId = item.id \n            LEFT JOIN user as us ON item.userId = us.userId\n            WHERE scrab.userId=\"" + userId + "\" AND scrab.topic=\"" + topic + "\") data, (SELECT @rownum:=0) TMP) H WHERE position > " + skippedItems + " limit " + limit)];
                    case 3:
                        productItems = _b.sent();
                        productItems.map(function (item) {
                            item.isPublic ? (item.isPublic = true) : (item.isPublic = false);
                            item.isActive ? (item.isActive = true) : (item.isActive = false);
                            item.isPremium ? (item.isPremium = true) : (item.isPremium = false);
                            item.isLiked ? (item.isLiked = true) : (item.isLiked = false);
                            item.isFollowed
                                ? (item.isFollowed = true)
                                : (item.isFollowed = false);
                            item.author = {
                                profile: item.profile ? item.profile : "",
                                nickname: item.nickname ? item.nickname : "rest asmr"
                            };
                            delete item.position;
                            delete item.profile;
                            delete item.nickname;
                        });
                        return [3 /*break*/, 7];
                    case 4:
                        itemTable = "sound_original";
                        return [4 /*yield*/, this.soundMixRepository
                                .query("SELECT * FROM (SELECT data.*, @rownum:=@rownum+1 AS position FROM (SELECT item.* FROM " + scrabTable + " as scrab\n          LEFT JOIN " + itemTable + " as item ON scrab.parentId = item.id\n          WHERE scrab.userId=\"" + userId + "\" AND scrab.topic=\"" + topic + "\") data, (SELECT @rownum:=0) TMP) H WHERE position > " + skippedItems + " limit " + limit)];
                    case 5:
                        productItems = _b.sent();
                        return [3 /*break*/, 7];
                    case 6:
                        productItems = [];
                        return [3 /*break*/, 7];
                    case 7: 
                    // return {
                    //   totalCount,
                    //   page,
                    //   limit,
                    //   data: productItems,
                    // };
                    return [2 /*return*/, productItems];
                }
            });
        });
    };
    AppService.prototype.searchMyFans = function (_a) {
        var keyword = _a.keyword, userId = _a.userId, page = _a.page, limit = _a.limit;
        return __awaiter(this, void 0, void 0, function () {
            var skippedItems, followersList, total, totalCount;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        skippedItems = (page - 1) * limit;
                        if (!!keyword) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.soundMixRepository
                                .query("SELECT * FROM (SELECT data.*, @rownum:=@rownum+1 AS position FROM (SELECT item.userId, item.profile, item.nickname FROM follow as follow\n            LEFT JOIN user as item ON follow.fromUser = item.userId\n            WHERE follow.toUser=\"" + userId + "\") data, (SELECT @rownum:=0) TMP) H WHERE position > " + skippedItems + " limit " + limit)];
                    case 1:
                        followersList = _b.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.soundMixRepository
                            .query("SELECT * FROM (SELECT data.*, @rownum:=@rownum+1 AS position FROM (SELECT item.userId, item.profile, item.nickname FROM follow as follow\n          LEFT JOIN (SELECT * FROM user WHERE nickname LIKE '%" + keyword + "%') as item ON follow.fromUser = item.userId\n          WHERE follow.toUser=\"" + userId + "\") data, (SELECT @rownum:=0) TMP) H WHERE position > " + skippedItems + " AND userId IS NOT null limit " + limit + " ")];
                    case 3:
                        followersList = _b.sent();
                        _b.label = 4;
                    case 4: return [4 /*yield*/, this.soundMixRepository.query("SELECT id from follow WHERE toUser = '" + userId + "'")];
                    case 5:
                        total = _b.sent();
                        totalCount = total.length;
                        followersList.map(function (item) {
                            delete item.position;
                        });
                        return [2 /*return*/, {
                                totalCount: totalCount,
                                page: page,
                                limit: limit,
                                items: followersList
                            }];
                }
            });
        });
    };
    AppService.prototype.getBottomNavList = function () {
        return __awaiter(this, void 0, void 0, function () {
            var bottomNav;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.bottomNavRepository
                            .createQueryBuilder()
                            .orderBy("sortIndex", "ASC")
                            .getMany()];
                    case 1:
                        bottomNav = _a.sent();
                        return [2 /*return*/, bottomNav];
                }
            });
        });
    };
    AppService = __decorate([
        common_1.Injectable(),
        __param(0, typeorm_1.InjectRepository(splash_entity_1.Splash)),
        __param(1, typeorm_1.InjectRepository(splash_entity_1.BottomNav)),
        __param(2, typeorm_1.InjectRepository(qna_entity_1.Qna)),
        __param(3, typeorm_1.InjectRepository(sound_entity_1.Sound)),
        __param(4, typeorm_1.InjectRepository(sound_mix_entity_1.SoundMix)),
        __param(5, typeorm_1.InjectRepository(sound_original_entity_1.SoundOriginal)),
        __param(6, typeorm_1.InjectRepository(topic_entity_1.Topic)),
        __param(7, typeorm_1.InjectRepository(language_string_entity_1.LanguageString)),
        __param(8, typeorm_1.InjectRepository(follow_entity_1.Follow)),
        __param(9, typeorm_1.InjectRepository(auth_entity_1.User)),
        __param(10, typeorm_1.InjectRepository(like_entity_1.LikeUser)),
        __param(11, typeorm_1.InjectRepository(premium_entity_1.Premium)),
        __param(12, typeorm_1.InjectRepository(user_grade_entity_1.UserGrade)),
        __param(13, typeorm_1.InjectRepository(scrab_entity_1.Scrab)),
        __param(14, typeorm_1.InjectRepository(history_point_entity_1.HistoryPoint))
    ], AppService);
    return AppService;
}());
exports.AppService = AppService;
