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
exports.__esModule = true;
exports.AuthController = void 0;
var common_1 = require("@nestjs/common");
var login_user_dto_1 = require("./dto/login-user.dto");
var create_user_dto_1 = require("./dto/create-user.dto");
var passport_1 = require("@nestjs/passport");
var swagger_1 = require("@nestjs/swagger");
var AuthController = /** @class */ (function () {
    function AuthController(userService) {
        this.userService = userService;
    }
    // @ApiBearerAuth()
    // @UseGuards(AuthGuard("jwt"))
    AuthController.prototype.tempAuth = function () {
        return { auth: "works" };
    };
    AuthController.prototype.getAll = function () {
        return this.userService.getAll();
    };
    AuthController.prototype.premiumPresent = function (userId, body) {
        return this.userService.premiumPresent(body);
    };
    AuthController.prototype.premiumInfinity = function (userId) {
        return this.userService.premiumInfinity(userId);
    };
    // @UseGuards(RolesGuard)
    AuthController.prototype.getPersonalUser = function (req) {
        var uid = req.headers.uid;
        return this.userService.getPersonalUser(uid);
    };
    AuthController.prototype.getAdminList = function (page, limit, teamCode) {
        return this.userService.getAdminList(page, limit, teamCode);
    };
    //웹 전용 Register
    // @ApiBody({ type: CreateUserDTO })
    AuthController.prototype.registerWeb = function (userData) {
        console.log(userData);
        return this.userService.registerWeb(userData);
    };
    //앱 전용 Register
    AuthController.prototype.registerApp = function (userData) {
        return this.userService.registerApp(userData);
    };
    //앱 전용 Register
    AuthController.prototype.deleteUid = function (uid) {
        return this.userService.deleteUid(uid);
    };
    AuthController.prototype.login = function (userData) {
        return this.userService.login(userData);
    };
    AuthController.prototype.getOneUser = function (userId) {
        return this.userService.getOne(userId);
    };
    AuthController.prototype["delete"] = function (userId) {
        return this.userService["delete"](userId);
    };
    // @UseGuards(RolesGuard)
    AuthController.prototype.patch = function (updateData, req) {
        var uid = req.headers.uid;
        return this.userService.update(updateData, uid);
    };
    // @UseGuards(AuthGuard('jwt'))
    AuthController.prototype.getAllUsers = function (page, limit) {
        return this.userService.getAllUsers(page, limit);
    };
    // @UseGuards(AuthGuard('jwt'))
    AuthController.prototype.searchUser = function (search) {
        return this.userService.searchUser(search);
    };
    // @UseGuards(AuthGuard('jwt'))
    AuthController.prototype.getSearchUserList = function (page, limit, searchText, startDate, endDate) {
        return this.userService.getSearchUserList(page, limit, searchText, startDate, endDate);
    };
    __decorate([
        common_1.Get("/temp")
    ], AuthController.prototype, "tempAuth");
    __decorate([
        common_1.Get()
    ], AuthController.prototype, "getAll");
    __decorate([
        common_1.Put("/premium-present"),
        __param(0, common_1.Param("userId")),
        __param(1, common_1.Body())
    ], AuthController.prototype, "premiumPresent");
    __decorate([
        common_1.Get("/premium-infinity/:userId"),
        __param(0, common_1.Param("userId"))
    ], AuthController.prototype, "premiumInfinity");
    __decorate([
        common_1.Get("/user"),
        __param(0, common_1.Req())
    ], AuthController.prototype, "getPersonalUser");
    __decorate([
        common_1.Get("/admin-list/:page/:limit/:teamCode"),
        __param(0, common_1.Param("page")),
        __param(1, common_1.Param("limit")),
        __param(2, common_1.Param("teamCode"))
    ], AuthController.prototype, "getAdminList");
    __decorate([
        common_1.Post("/register-web"),
        swagger_1.ApiCreatedResponse({
            description: "회원가입 성공"
        }),
        __param(0, common_1.Body())
    ], AuthController.prototype, "registerWeb");
    __decorate([
        common_1.Post("/register"),
        swagger_1.ApiCreatedResponse({
            description: "회원가입 성공"
        }),
        swagger_1.ApiBody({ type: create_user_dto_1.CreateUserDTO }),
        __param(0, common_1.Body())
    ], AuthController.prototype, "registerApp");
    __decorate([
        common_1.Delete("/uid-delete/:uid"),
        swagger_1.ApiCreatedResponse({
            description: "회원가입 성공"
        }),
        swagger_1.ApiBody({ type: create_user_dto_1.CreateUserDTO }),
        __param(0, common_1.Param("uid"))
    ], AuthController.prototype, "deleteUid");
    __decorate([
        common_1.Post("/login"),
        swagger_1.ApiOkResponse({
            description: "유저 로그인 성공"
        }),
        swagger_1.ApiBody({ type: login_user_dto_1.LoginUserDTO }),
        swagger_1.ApiUnauthorizedResponse({ description: "인증 실패" }),
        __param(0, common_1.Body())
    ], AuthController.prototype, "login");
    __decorate([
        common_1.Get("/:userId"),
        common_1.UseGuards(passport_1.AuthGuard("jwt")),
        __param(0, common_1.Param("userId"))
    ], AuthController.prototype, "getOneUser");
    __decorate([
        common_1.Delete("/:userId"),
        __param(0, common_1.Param("userId"))
    ], AuthController.prototype, "delete");
    __decorate([
        common_1.Put("/"),
        __param(0, common_1.Body()), __param(1, common_1.Req())
    ], AuthController.prototype, "patch");
    __decorate([
        common_1.Get("/users/:page/:limit"),
        __param(0, common_1.Param("page")), __param(1, common_1.Param("limit"))
    ], AuthController.prototype, "getAllUsers");
    __decorate([
        common_1.Get("/user-search/:search"),
        __param(0, common_1.Param("search"))
    ], AuthController.prototype, "searchUser");
    __decorate([
        common_1.Get("/users/search/:searchText/:startDate/:endDate/:page/:limit"),
        __param(0, common_1.Param("page")),
        __param(1, common_1.Param("limit")),
        __param(2, common_1.Param("searchText")),
        __param(3, common_1.Param("startDate")),
        __param(4, common_1.Param("endDate"))
    ], AuthController.prototype, "getSearchUserList");
    AuthController = __decorate([
        common_1.Controller("auth")
    ], AuthController);
    return AuthController;
}());
exports.AuthController = AuthController;
