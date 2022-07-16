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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./auth.service");
const login_user_dto_1 = require("./dto/login-user.dto");
const create_user_dto_1 = require("./dto/create-user.dto");
const update_user_dto_1 = require("./dto/update-user.dto");
const passport_1 = require("@nestjs/passport");
const swagger_1 = require("@nestjs/swagger");
const roles_guard_1 = require("../app/guard/roles.guard");
let AuthController = class AuthController {
    constructor(userService) {
        this.userService = userService;
    }
    tempAuth() {
        return { auth: "works" };
    }
    getAll() {
        return this.userService.getAll();
    }
    getPersonalUser(req) {
        const uid = req.headers.uid;
        return this.userService.getPersonalUser(uid);
    }
    getAdminList(page, limit, teamCode) {
        return this.userService.getAdminList(page, limit, teamCode);
    }
    registerWeb(userData) {
        console.log(userData);
        return this.userService.registerWeb(userData);
    }
    registerApp(userData) {
        return this.userService.registerApp(userData);
    }
    deleteUid(uid) {
        return this.userService.deleteUid(uid);
    }
    login(userData) {
        return this.userService.login(userData);
    }
    getOneUser(userId) {
        return this.userService.getOne(userId);
    }
    delete(userId) {
        return this.userService.delete(userId);
    }
    patch(updateData, req) {
        const uid = req.headers.uid;
        return this.userService.update(updateData, uid);
    }
    getAllUsers(page, limit) {
        return this.userService.getAllUsers(page, limit);
    }
    searchUser(search) {
        return this.userService.searchUser(search);
    }
    getSearchUserList(page, limit, searchText, startDate, endDate) {
        return this.userService.getSearchUserList(page, limit, searchText, startDate, endDate);
    }
};
__decorate([
    common_1.Get("/temp"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "tempAuth", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "getAll", null);
__decorate([
    common_1.Get("/user"),
    __param(0, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "getPersonalUser", null);
__decorate([
    common_1.Get("/admin-list/:page/:limit/:teamCode"),
    __param(0, common_1.Param("page")),
    __param(1, common_1.Param("limit")),
    __param(2, common_1.Param("teamCode")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, String]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "getAdminList", null);
__decorate([
    common_1.Post("/register-web"),
    swagger_1.ApiCreatedResponse({
        description: "회원가입 성공",
    }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDTO]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "registerWeb", null);
__decorate([
    common_1.Post("/register"),
    swagger_1.ApiCreatedResponse({
        description: "회원가입 성공",
    }),
    swagger_1.ApiBody({ type: create_user_dto_1.CreateUserDTO }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDTO]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "registerApp", null);
__decorate([
    common_1.Delete("/uid-delete/:uid"),
    swagger_1.ApiCreatedResponse({
        description: "회원가입 성공",
    }),
    swagger_1.ApiBody({ type: create_user_dto_1.CreateUserDTO }),
    __param(0, common_1.Param("uid")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "deleteUid", null);
__decorate([
    common_1.Post("/login"),
    swagger_1.ApiOkResponse({
        description: "유저 로그인 성공",
    }),
    swagger_1.ApiBody({ type: login_user_dto_1.LoginUserDTO }),
    swagger_1.ApiUnauthorizedResponse({ description: "인증 실패" }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_user_dto_1.LoginUserDTO]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    common_1.Get("/:userId"),
    common_1.UseGuards(passport_1.AuthGuard("jwt")),
    __param(0, common_1.Param("userId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], AuthController.prototype, "getOneUser", null);
__decorate([
    common_1.Delete("/:userId"),
    __param(0, common_1.Param("userId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "delete", null);
__decorate([
    common_1.Put("/"),
    __param(0, common_1.Body()), __param(1, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_user_dto_1.UpdateUserDTO, Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "patch", null);
__decorate([
    common_1.Get("/users/:page/:limit"),
    __param(0, common_1.Param("page")), __param(1, common_1.Param("limit")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Object)
], AuthController.prototype, "getAllUsers", null);
__decorate([
    common_1.Get("/user-search/:search"),
    __param(0, common_1.Param("search")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], AuthController.prototype, "searchUser", null);
__decorate([
    common_1.Get("/users/search/:searchText/:startDate/:endDate/:page/:limit"),
    __param(0, common_1.Param("page")),
    __param(1, common_1.Param("limit")),
    __param(2, common_1.Param("searchText")),
    __param(3, common_1.Param("startDate")),
    __param(4, common_1.Param("endDate")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, String, String, String]),
    __metadata("design:returntype", Object)
], AuthController.prototype, "getSearchUserList", null);
AuthController = __decorate([
    common_1.Controller("auth"),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map