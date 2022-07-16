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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
exports.__esModule = true;
exports.AuthService = void 0;
var common_1 = require("@nestjs/common");
var typeorm_1 = require("@nestjs/typeorm");
var auth_entity_1 = require("./entities/auth.entity");
var bcrypt = require("bcryptjs");
var globalFuntion_1 = require("../globalFuntion");
var membership_entity_1 = require("src/app/entities/membership.entity");
var dayjs = require("dayjs");
var splash_entity_1 = require("src/app/entities/splash.entity");
var AuthService = /** @class */ (function () {
    function AuthService(userRepository, splashRepository, membershipRepository, jwtService, config // ConfigService 불러오기
    ) {
        this.userRepository = userRepository;
        this.splashRepository = splashRepository;
        this.membershipRepository = membershipRepository;
        this.jwtService = jwtService;
        this.config = config;
    }
    AuthService.prototype.premiumPresent = function (body) {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    // console.log(body.freeDate);
                    return [4 /*yield*/, this.userRepository.update({ userId: body.userId }, { premiumExprierdAt: body.freeDate })];
                    case 1:
                        // console.log(body.freeDate);
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AuthService.prototype.premiumInfinity = function (userId) {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.userRepository.update({ userId: userId }, { premiumExprierdAt: "9999-12-31 00:00:00" })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AuthService.prototype.getPersonalUser = function (uid) {
        return __awaiter(this, void 0, Promise, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.userRepository.findOne({ uid: uid })];
                    case 1:
                        result = _a.sent();
                        if (!result)
                            throw new common_1.NotFoundException("\uC720\uC800 \uC815\uBCF4\uAC00 \uC874\uC7AC\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. uid: " + uid);
                        delete result.id;
                        delete result.password;
                        return [2 /*return*/, result];
                }
            });
        });
    };
    // 회원가입 Validation
    AuthService.prototype.existsByUserId = function (userId) {
        return __awaiter(this, void 0, Promise, function () {
            var user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.userRepository.findOne({ userId: userId || "" })];
                    case 1:
                        user = _a.sent();
                        if (user) {
                            throw new common_1.ConflictException("이미 존재하는 계정입니다. 다른 정보를 입력해 주세요.");
                        }
                        return [2 /*return*/, null];
                }
            });
        });
    };
    // 로그인 Validation
    AuthService.prototype.validateUser = function (userId, pass) {
        return __awaiter(this, void 0, Promise, function () {
            var user, password, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getOne(userId)];
                    case 1:
                        user = _a.sent();
                        if (!bcrypt.compareSync(pass, user.password)) {
                            throw new common_1.UnauthorizedException("이메일 또는 비밀번호를 다시 확인하세요. 이메일 또는 비밀번호를 잘못 입력하셨습니다.");
                        }
                        if (user && bcrypt.compareSync(pass, user.password)) {
                            password = user.password, result = __rest(user, ["password"]);
                            return [2 /*return*/, result];
                        }
                        return [2 /*return*/, null];
                }
            });
        });
    };
    // 웹 전용 회원가입 V1 (일반, Firebase 연동안함)
    AuthService.prototype.registerWeb = function (userData) {
        return __awaiter(this, void 0, void 0, function () {
            var splash, user, accessToken, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        return [4 /*yield*/, this.splashRepository.findOne()];
                    case 1:
                        splash = _a.sent();
                        user = new auth_entity_1.User();
                        user.userId = userData.userId;
                        user.password = userData.password;
                        user.nickname = userData.nickname;
                        user.username = userData.username;
                        user.agreeMarketing = userData.agreeMarketing;
                        user.email = userData.email;
                        user.level = userData.level;
                        user.premiumExprierdAt = dayjs().add(splash.freeDays, "days").toDate();
                        user.uid = userData.uid || userData.userId;
                        user.phone = userData.phone ? globalFuntion_1.Encrypt(userData.phone) : "";
                        return [4 /*yield*/, this.userRepository.save(user)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.jwtService.signAsync({
                                userId: userData.userId
                            })];
                    case 3:
                        accessToken = _a.sent();
                        // const refreshToken = await this.jwtService.signAsync({
                        //   userId: userData.userId,
                        // });
                        return [2 /*return*/, {
                                statusCode: 200,
                                expires_in: 3600,
                                access_token: accessToken,
                                refresh_token: "",
                                user_data: userData,
                                message: "회원가입 성공!"
                            }];
                    case 4:
                        e_1 = _a.sent();
                        console.log(e_1.message);
                        return [2 /*return*/, e_1];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    // 웹 전용 회원가입 V2 (Firebase 연동)
    // 모바일 앱 전용 회원가입 (Firebase 연동)
    AuthService.prototype.registerApp = function (userData) {
        return __awaiter(this, void 0, void 0, function () {
            var accessToken, refreshToken, aleadyUidCheck, user, aleadyUserCheck;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.jwtService.signAsync({
                            uid: userData.uid
                        })];
                    case 1:
                        accessToken = _a.sent();
                        return [4 /*yield*/, this.jwtService.signAsync({
                                uid: userData.uid
                            })];
                    case 2:
                        refreshToken = _a.sent();
                        if (!userData.isAnonymous) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.userRepository.findOne({
                                uid: userData.uid
                            })];
                    case 3:
                        aleadyUidCheck = _a.sent();
                        if (!userData.uid || userData.uid === "")
                            throw new common_1.HttpException("uid는 필수입니다.", common_1.HttpStatus.FORBIDDEN);
                        if (aleadyUidCheck)
                            throw new common_1.HttpException("중복된 uid가 존재합니다.", common_1.HttpStatus.FORBIDDEN);
                        user = new auth_entity_1.User();
                        user.userId = userData.userId;
                        user.registerPath = userData.registerPath;
                        user.deviceLanguage = userData.deviceLanguage;
                        user.device = userData.device;
                        user.uid = userData.uid;
                        user.udid = userData.udid;
                        user.deviceType = userData.deviceType;
                        // user.about = '';
                        user.temp1 = userData.temp1;
                        user.temp2 = userData.temp2;
                        user.temp3 = userData.temp3;
                        user.temp4 = userData.temp4;
                        user.temp5 = userData.temp5;
                        user.temp6 = userData.temp6;
                        user.temp7 = userData.temp7;
                        user.temp8 = userData.temp8;
                        return [4 /*yield*/, this.userRepository.save(user)];
                    case 4:
                        _a.sent();
                        return [2 /*return*/, {
                                statusCode: 200,
                                message: "비회원 가입 성공!"
                            }];
                    case 5:
                        // 정회원으로 전환인경우
                        if (!userData.userId)
                            throw new common_1.HttpException("userId 값은 필수입니다.", common_1.HttpStatus.FORBIDDEN);
                        return [4 /*yield*/, this.userRepository.findOne({
                                userId: userData.userId
                            })];
                    case 6:
                        aleadyUserCheck = _a.sent();
                        if (!aleadyUserCheck) return [3 /*break*/, 8];
                        // 이미 존재하는 계정이면
                        // 기존 임시 uid를 제거해주고,
                        // this.userRepository.delete({ uid: userData.uid });
                        return [4 /*yield*/, this.userRepository.update({
                                userId: userData.userId
                            }, userData)];
                    case 7:
                        // 이미 존재하는 계정이면
                        // 기존 임시 uid를 제거해주고,
                        // this.userRepository.delete({ uid: userData.uid });
                        _a.sent();
                        return [3 /*break*/, 10];
                    case 8:
                        // 새로운 계정이면
                        userData.registedAt = new Date();
                        return [4 /*yield*/, this.userRepository.update({
                                uid: userData.uid
                            }, userData)];
                    case 9:
                        _a.sent();
                        _a.label = 10;
                    case 10: return [2 /*return*/, {
                            statusCode: 200,
                            message: "정회원으로 로그인 성공",
                            access_token: accessToken,
                            refresh_token: refreshToken
                        }];
                }
            });
        });
    };
    AuthService.prototype.deleteUid = function (uid) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                console.log(uid);
                this.userRepository["delete"]({ uid: uid });
                return [2 /*return*/, true];
            });
        });
    };
    AuthService.prototype.login = function (user) {
        return __awaiter(this, void 0, Promise, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, this.validateUser(user.userId, user.password).then(function (userData) { return __awaiter(_this, void 0, void 0, function () {
                        var accessToken, refreshToken;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    if (!userData) {
                                        throw new common_1.UnauthorizedException("존재하지 않습니다.");
                                    }
                                    return [4 /*yield*/, this.jwtService.signAsync({
                                            userId: userData.userId
                                        })];
                                case 1:
                                    accessToken = _a.sent();
                                    return [4 /*yield*/, this.jwtService.signAsync({
                                            userId: userData.userId
                                        })];
                                case 2:
                                    refreshToken = _a.sent();
                                    console.log(accessToken);
                                    return [2 /*return*/, {
                                            expires_in: 3600,
                                            access_token: accessToken,
                                            refresh_token: refreshToken,
                                            userId: userData.userId,
                                            statusCode: 200,
                                            message: "로그인 성공!"
                                        }];
                            }
                        });
                    }); })];
            });
        });
    };
    AuthService.prototype.getAll = function () {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.userRepository.find()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    AuthService.prototype.getOne = function (userId) {
        return __awaiter(this, void 0, Promise, function () {
            var user, today, isMembership, membership;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.userRepository.findOne({ userId: userId || "" })];
                    case 1:
                        user = _a.sent();
                        if (!user)
                            throw new common_1.NotFoundException("\"" + userId + "\" ID\uAC00 \uC874\uC7AC\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.");
                        today = dayjs().format("YYYY-MM-DD");
                        isMembership = false;
                        return [4 /*yield*/, this.userRepository
                                .createQueryBuilder()
                                .where("userId=:userId AND premiumExprierdAt >= :today", {
                                userId: userId,
                                today: today
                            })
                                .getOne()];
                    case 2:
                        membership = _a.sent();
                        if (membership)
                            isMembership = true;
                        return [2 /*return*/, __assign(__assign({}, user), { isMembership: isMembership })];
                }
            });
        });
    };
    AuthService.prototype.getAllUsers = function (page, limit) {
        return __awaiter(this, void 0, Promise, function () {
            var skippedItems, totalCount, users;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        skippedItems = (page - 1) * limit;
                        return [4 /*yield*/, this.userRepository.count()];
                    case 1:
                        totalCount = _a.sent();
                        return [4 /*yield*/, this.userRepository
                                .createQueryBuilder()
                                .orderBy("createdAt", "DESC")
                                .offset(skippedItems)
                                .limit(limit)
                                .getMany()];
                    case 2:
                        users = _a.sent();
                        return [2 /*return*/, {
                                totalCount: totalCount,
                                page: page,
                                limit: limit,
                                data: users
                            }];
                }
            });
        });
    };
    AuthService.prototype.getAdminList = function (page, limit, teamCode) {
        return __awaiter(this, void 0, Promise, function () {
            var skippedItems, totalCount, users;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(teamCode);
                        skippedItems = (page - 1) * limit;
                        return [4 /*yield*/, this.userRepository.count()];
                    case 1:
                        totalCount = _a.sent();
                        return [4 /*yield*/, this.userRepository
                                .createQueryBuilder()
                                .where("level >= :level", { level: 9 })
                                .orderBy("createdAt", "DESC")
                                .offset(skippedItems)
                                .limit(limit)
                                .getMany()];
                    case 2:
                        users = _a.sent();
                        return [2 /*return*/, {
                                totalCount: totalCount,
                                page: page,
                                limit: limit,
                                data: users
                            }];
                }
            });
        });
    };
    AuthService.prototype.searchUser = function (search) {
        return __awaiter(this, void 0, void 0, function () {
            var users;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        users = [];
                        if (!(search === "empty")) return [3 /*break*/, 1];
                        users = [];
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, this.userRepository
                            .createQueryBuilder("user")
                            .select(["user.userId", "user.username"])
                            .where("user.userId LIKE \"%" + search + "%\" OR user.username LIKE \"%" + search + "%\"", {
                            userId: "%" + search + "%"
                        })
                            .getMany()];
                    case 2:
                        users = _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/, users];
                }
            });
        });
    };
    AuthService.prototype.getSearchUserList = function (page, limit, searchText, startDate, endDate) {
        return __awaiter(this, void 0, Promise, function () {
            var skippedItems, totalCount, users;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        skippedItems = (page - 1) * limit;
                        return [4 /*yield*/, this.userRepository.count()];
                    case 1:
                        totalCount = _a.sent();
                        if (!(searchText === "empty")) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.userRepository
                                .createQueryBuilder()
                                .andWhere("createdAt >= :startDate", { startDate: startDate })
                                .andWhere("createdAt <= :endDate", { endDate: endDate + " 23:59:59" })
                                .orderBy("createdAt", "DESC")
                                .offset(skippedItems)
                                .limit(limit)
                                .getMany()];
                    case 2:
                        users = _a.sent();
                        return [3 /*break*/, 5];
                    case 3: return [4 /*yield*/, this.userRepository
                            .createQueryBuilder()
                            .where("createdAt >= :startDate AND createdAt <= :endDate AND userId like :userId", {
                            startDate: startDate,
                            endDate: endDate + " 23:59:59",
                            userId: "%" + searchText + "%"
                        })
                            .orWhere("createdAt >= :startDate AND createdAt <= :endDate AND nickname like :nickname", {
                            startDate: startDate,
                            endDate: endDate + " 23:59:59",
                            nickname: "%" + searchText + "%"
                        })
                            .orderBy("createdAt", "DESC")
                            .offset(skippedItems)
                            .limit(limit)
                            .getMany()];
                    case 4:
                        users = _a.sent();
                        _a.label = 5;
                    case 5: return [2 /*return*/, {
                            totalCount: totalCount,
                            page: page,
                            limit: limit,
                            data: users
                        }];
                }
            });
        });
    };
    AuthService.prototype["delete"] = function (userId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getOne(userId)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.userRepository["delete"]({ userId: userId })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AuthService.prototype.update = function (updateData, uid) {
        return __awaiter(this, void 0, void 0, function () {
            var validateNickname, userData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!uid)
                            throw new common_1.BadRequestException("uid는 필수입니다.");
                        if (!updateData.nickname) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.userRepository.findOne({
                                nickname: updateData.nickname
                            })];
                    case 1:
                        validateNickname = _a.sent();
                        if (validateNickname && validateNickname.uid != uid) {
                            return [2 /*return*/, {
                                    statusCode: 400,
                                    message: "중복된 닉네임 입니다."
                                }];
                        }
                        _a.label = 2;
                    case 2: return [4 /*yield*/, this.userRepository.update({ uid: uid }, updateData)];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.getOne(updateData.userId)];
                    case 4:
                        userData = _a.sent();
                        return [2 /*return*/, {
                                statusCode: 200,
                                user_data: userData,
                                message: "회원정보 수정 완료!"
                            }];
                }
            });
        });
    };
    AuthService = __decorate([
        common_1.Injectable(),
        __param(0, typeorm_1.InjectRepository(auth_entity_1.User)),
        __param(1, typeorm_1.InjectRepository(splash_entity_1.Splash)),
        __param(2, typeorm_1.InjectRepository(membership_entity_1.Membership))
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
