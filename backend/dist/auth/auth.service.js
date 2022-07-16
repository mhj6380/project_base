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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const auth_entity_1 = require("./entities/auth.entity");
const jwt_1 = require("@nestjs/jwt");
const bcrypt = require("bcryptjs");
const config_1 = require("@nestjs/config");
const globalFuntion_1 = require("../globalFuntion");
const dayjs = require("dayjs");
const splash_entity_1 = require("../app/entities/splash.entity");
let AuthService = class AuthService {
    constructor(userRepository, splashRepository, jwtService, config) {
        this.userRepository = userRepository;
        this.splashRepository = splashRepository;
        this.jwtService = jwtService;
        this.config = config;
    }
    getPersonalUser(uid) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.userRepository.findOne({ uid });
            if (!result)
                throw new common_1.NotFoundException(`유저 정보가 존재하지 않습니다. uid: ${uid}`);
            delete result.id;
            delete result.password;
            return result;
        });
    }
    existsByUserId(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.userRepository.findOne({ userId: userId || "" });
            if (user) {
                throw new common_1.ConflictException("이미 존재하는 계정입니다. 다른 정보를 입력해 주세요.");
            }
            return null;
        });
    }
    validateUser(userId, pass) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.getOne(userId);
            if (!bcrypt.compareSync(pass, user.password)) {
                throw new common_1.UnauthorizedException("이메일 또는 비밀번호를 다시 확인하세요. 이메일 또는 비밀번호를 잘못 입력하셨습니다.");
            }
            if (user && bcrypt.compareSync(pass, user.password)) {
                const { password } = user, result = __rest(user, ["password"]);
                return result;
            }
            return null;
        });
    }
    registerWeb(userData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const splash = yield this.splashRepository.findOne();
                const user = new auth_entity_1.User();
                user.userId = userData.userId;
                user.password = userData.password;
                user.nickname = userData.nickname;
                user.username = userData.username;
                user.agreeMarketing = userData.agreeMarketing;
                user.email = userData.email;
                user.level = userData.level;
                user.uid = userData.uid || userData.userId;
                user.phone = userData.phone ? globalFuntion_1.Encrypt(userData.phone) : "";
                yield this.userRepository.save(user);
                const accessToken = yield this.jwtService.signAsync({
                    userId: userData.userId,
                });
                return {
                    statusCode: 200,
                    expires_in: 3600,
                    access_token: accessToken,
                    refresh_token: "",
                    user_data: userData,
                    message: "회원가입 성공!",
                };
            }
            catch (e) {
                console.log(e.message);
                return e;
            }
        });
    }
    registerApp(userData) {
        return __awaiter(this, void 0, void 0, function* () {
            const accessToken = yield this.jwtService.signAsync({
                uid: userData.uid,
            });
            const refreshToken = yield this.jwtService.signAsync({
                uid: userData.uid,
            });
            if (userData.isAnonymous) {
                const aleadyUidCheck = yield this.userRepository.findOne({
                    uid: userData.uid,
                });
                if (!userData.uid || userData.uid === "")
                    throw new common_1.HttpException("uid는 필수입니다.", common_1.HttpStatus.FORBIDDEN);
                if (aleadyUidCheck)
                    throw new common_1.HttpException("중복된 uid가 존재합니다.", common_1.HttpStatus.FORBIDDEN);
                const user = new auth_entity_1.User();
                user.userId = userData.userId;
                user.registerPath = userData.registerPath;
                user.deviceLanguage = userData.deviceLanguage;
                user.device = userData.device;
                user.uid = userData.uid;
                user.udid = userData.udid;
                user.deviceType = userData.deviceType;
                user.temp1 = userData.temp1;
                user.temp2 = userData.temp2;
                user.temp3 = userData.temp3;
                user.temp4 = userData.temp4;
                user.temp5 = userData.temp5;
                user.temp6 = userData.temp6;
                user.temp7 = userData.temp7;
                user.temp8 = userData.temp8;
                yield this.userRepository.save(user);
                return {
                    statusCode: 200,
                    message: "비회원 가입 성공!",
                };
            }
            else {
                if (!userData.userId)
                    throw new common_1.HttpException("userId 값은 필수입니다.", common_1.HttpStatus.FORBIDDEN);
                const aleadyUserCheck = yield this.userRepository.findOne({
                    userId: userData.userId,
                });
                if (aleadyUserCheck) {
                    yield this.userRepository.update({
                        userId: userData.userId,
                    }, userData);
                }
                else {
                    userData.registedAt = new Date();
                    yield this.userRepository.update({
                        uid: userData.uid,
                    }, userData);
                }
                return {
                    statusCode: 200,
                    message: "정회원으로 로그인 성공",
                    access_token: accessToken,
                    refresh_token: refreshToken,
                };
            }
        });
    }
    deleteUid(uid) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(uid);
            this.userRepository.delete({ uid });
            return true;
        });
    }
    login(user) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.validateUser(user.userId, user.password).then((userData) => __awaiter(this, void 0, void 0, function* () {
                if (!userData) {
                    throw new common_1.UnauthorizedException("존재하지 않습니다.");
                }
                const accessToken = yield this.jwtService.signAsync({
                    userId: userData.userId,
                });
                const refreshToken = yield this.jwtService.signAsync({
                    userId: userData.userId,
                });
                console.log(accessToken);
                return {
                    expires_in: 3600,
                    access_token: accessToken,
                    refresh_token: refreshToken,
                    userId: userData.userId,
                    statusCode: 200,
                    message: "로그인 성공!",
                };
            }));
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.userRepository.find();
        });
    }
    getOne(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.userRepository.findOne({ userId: userId || "" });
            if (!user)
                throw new common_1.NotFoundException(`"${userId}" ID가 존재하지 않습니다.`);
            const today = dayjs().format("YYYY-MM-DD");
            let isMembership = false;
            const membership = yield this.userRepository
                .createQueryBuilder()
                .where("userId=:userId AND premiumExprierdAt >= :today", {
                userId,
                today,
            })
                .getOne();
            if (membership)
                isMembership = true;
            return Object.assign(Object.assign({}, user), { isMembership });
        });
    }
    getAllUsers(page, limit) {
        return __awaiter(this, void 0, void 0, function* () {
            const skippedItems = (page - 1) * limit;
            const totalCount = yield this.userRepository.count();
            const users = yield this.userRepository
                .createQueryBuilder()
                .orderBy("createdAt", "DESC")
                .offset(skippedItems)
                .limit(limit)
                .getMany();
            return {
                totalCount,
                page,
                limit,
                data: users,
            };
        });
    }
    getAdminList(page, limit, teamCode) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(teamCode);
            const skippedItems = (page - 1) * limit;
            const totalCount = yield this.userRepository.count();
            const users = yield this.userRepository
                .createQueryBuilder()
                .where("level >= :level", { level: 9 })
                .orderBy("createdAt", "DESC")
                .offset(skippedItems)
                .limit(limit)
                .getMany();
            return {
                totalCount,
                page,
                limit,
                data: users,
            };
        });
    }
    searchUser(search) {
        return __awaiter(this, void 0, void 0, function* () {
            let users = [];
            if (search === "empty") {
                users = [];
            }
            else {
                users = yield this.userRepository
                    .createQueryBuilder("user")
                    .select(["user.userId", "user.username"])
                    .where(`user.userId LIKE "%${search}%" OR user.username LIKE "%${search}%"`, {
                    userId: `%${search}%`,
                })
                    .getMany();
            }
            return users;
        });
    }
    getSearchUserList(page, limit, searchText, startDate, endDate) {
        return __awaiter(this, void 0, void 0, function* () {
            const skippedItems = (page - 1) * limit;
            const totalCount = yield this.userRepository.count();
            let users;
            if (searchText === "empty") {
                users = yield this.userRepository
                    .createQueryBuilder()
                    .andWhere("createdAt >= :startDate", { startDate })
                    .andWhere("createdAt <= :endDate", { endDate: `${endDate} 23:59:59` })
                    .orderBy("createdAt", "DESC")
                    .offset(skippedItems)
                    .limit(limit)
                    .getMany();
            }
            else {
                users = yield this.userRepository
                    .createQueryBuilder()
                    .where("createdAt >= :startDate AND createdAt <= :endDate AND userId like :userId", {
                    startDate,
                    endDate: `${endDate} 23:59:59`,
                    userId: `%${searchText}%`,
                })
                    .orWhere("createdAt >= :startDate AND createdAt <= :endDate AND nickname like :nickname", {
                    startDate,
                    endDate: `${endDate} 23:59:59`,
                    nickname: `%${searchText}%`,
                })
                    .orderBy("createdAt", "DESC")
                    .offset(skippedItems)
                    .limit(limit)
                    .getMany();
            }
            return {
                totalCount,
                page,
                limit,
                data: users,
            };
        });
    }
    delete(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getOne(userId);
            yield this.userRepository.delete({ userId });
        });
    }
    update(updateData, uid) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!uid)
                throw new common_1.BadRequestException("uid는 필수입니다.");
            if (updateData.nickname) {
                const validateNickname = yield this.userRepository.findOne({
                    nickname: updateData.nickname,
                });
                if (validateNickname && validateNickname.uid != uid) {
                    return {
                        statusCode: 400,
                        message: "중복된 닉네임 입니다.",
                    };
                }
            }
            yield this.userRepository.update({ uid }, updateData);
            const userData = yield this.getOne(updateData.userId);
            return {
                statusCode: 200,
                user_data: userData,
                message: "회원정보 수정 완료!",
            };
        });
    }
};
AuthService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(auth_entity_1.User)),
    __param(1, typeorm_1.InjectRepository(splash_entity_1.Splash)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        jwt_1.JwtService,
        config_1.ConfigService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map