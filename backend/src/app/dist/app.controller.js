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
exports.AppController = void 0;
var common_1 = require("@nestjs/common");
// const http = require("http");
var AppController = /** @class */ (function () {
    function AppController(appService, oneSignalService) {
        this.appService = appService;
        this.oneSignalService = oneSignalService;
    }
    AppController.prototype.home = function () {
        return "ASMR Backend v.0.0.2";
    };
    AppController.prototype.devTool = function () {
        return __awaiter(this, void 0, void 0, function () {
            var e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        // const input = new NotificationBySegmentBuilder()
                        //   .setIncludedSegments(["Active Users", "Inactive Users"])
                        //   .notification()
                        //   .setAttachments({
                        //     data: { targetPath: "4", targetOption: "alskdblaadklaksdbklasblaks" },
                        //     // big_picture:
                        //     //   "https://t1.daumcdn.net/liveboard/holapet/0e5f90af436e4c218343073164a5f657.JPG",
                        //   })
                        //   .setDelivery({ ttl: 3600 })
                        //   .setMutableContent(true)
                        //   .setSubtitle({ en: "푸시 제목입니다." })
                        //   .setContents({ en: "푸시 내용입니다." })
                        //   .build();
                        // await this.oneSignalService.createNotification(input);
                        return [4 /*yield*/, this.appService.devTool()];
                    case 1:
                        // const input = new NotificationBySegmentBuilder()
                        //   .setIncludedSegments(["Active Users", "Inactive Users"])
                        //   .notification()
                        //   .setAttachments({
                        //     data: { targetPath: "4", targetOption: "alskdblaadklaksdbklasblaks" },
                        //     // big_picture:
                        //     //   "https://t1.daumcdn.net/liveboard/holapet/0e5f90af436e4c218343073164a5f657.JPG",
                        //   })
                        //   .setDelivery({ ttl: 3600 })
                        //   .setMutableContent(true)
                        //   .setSubtitle({ en: "푸시 제목입니다." })
                        //   .setContents({ en: "푸시 내용입니다." })
                        //   .build();
                        // await this.oneSignalService.createNotification(input);
                        _a.sent();
                        return [2 /*return*/, true];
                    case 2:
                        e_1 = _a.sent();
                        console.log(e_1.message);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    AppController.prototype.getUserProfile = function (myUserId, targetUserId) {
        return this.appService.getUserProfile(myUserId, targetUserId);
    };
    AppController.prototype.likeUser = function (body) {
        return this.appService.likeUser(body);
    };
    AppController.prototype.getLanguageString = function () {
        return this.appService.getLanguageString();
    };
    AppController.prototype.updateLanguageString = function (body) {
        return this.appService.updateLanguageString(body);
    };
    AppController.prototype.splash = function (userId, language) {
        return this.appService.splash(userId, language);
    };
    AppController.prototype.addPremium = function (userId) {
        return this.appService.addPremium(userId);
    };
    AppController.prototype.policy = function () {
        return this.appService.policy();
    };
    AppController.prototype.updateSplash = function (body) {
        return this.appService.updateSplash(body);
    };
    // 파트너 QnA
    // @Post("/qna")
    // createBoard(@Body() body: any): Promise<Qna> {
    //   return this.appService.createQnA(body);
    // }
    // //수정
    // @Put("/qna")
    // updateBoard(@Body() body: any) {
    //   return this.appService.updateQnA(body);
    // }
    // //전체조회
    AppController.prototype.getAllQnA = function (page, limit) {
        return this.appService.getAllQnA(page, limit);
    };
    // //1개조회
    // @Get("/qna/:id")
    // getOneQnA(@Param("id") id: number) {
    //   return this.appService.getOneQnA(id);
    // }
    // //삭제
    // @Delete("/qna/:id")
    // deleteBoard(@Param("id") id: number) {
    //   return this.appService.deleteQnA(id);
    // }
    // 내 보관함 조회
    AppController.prototype.getMyScrab = function (userId, topic) {
        return this.appService.getMyScrab(userId, topic);
    };
    // 하단메뉴 List
    AppController.prototype.getBottomNavList = function () {
        return this.appService.getBottomNavList();
    };
    // 나의 팬 리스트 조회
    AppController.prototype.searchMyFans = function (body) {
        // @Param("keyword") keyword: string,
        // @Param("userId") userId: string,
        // @Param("page") page: number,
        // @Param("limit") limit: number
        return this.appService.searchMyFans(body);
    };
    __decorate([
        common_1.Get()
    ], AppController.prototype, "home");
    __decorate([
        common_1.Get("/devtool")
    ], AppController.prototype, "devTool");
    __decorate([
        common_1.Get("/profile/:myUserId/:targetUserId"),
        __param(0, common_1.Param("myUserId")),
        __param(1, common_1.Param("targetUserId"))
    ], AppController.prototype, "getUserProfile");
    __decorate([
        common_1.Post("/like-user"),
        __param(0, common_1.Body())
    ], AppController.prototype, "likeUser");
    __decorate([
        common_1.Get("/language-string")
    ], AppController.prototype, "getLanguageString");
    __decorate([
        common_1.Put("/language-string"),
        __param(0, common_1.Body())
    ], AppController.prototype, "updateLanguageString");
    __decorate([
        common_1.Get("/splash/:userId/:language"),
        __param(0, common_1.Param("userId")), __param(1, common_1.Param("language"))
    ], AppController.prototype, "splash");
    __decorate([
        common_1.Post("/add-premium"),
        __param(0, common_1.Body("userId"))
    ], AppController.prototype, "addPremium");
    __decorate([
        common_1.Get("/policy")
    ], AppController.prototype, "policy");
    __decorate([
        common_1.Put("/splash"),
        __param(0, common_1.Body())
    ], AppController.prototype, "updateSplash");
    __decorate([
        common_1.Get("/qna/list/:page/:limit"),
        __param(0, common_1.Param("page")), __param(1, common_1.Param("limit"))
    ], AppController.prototype, "getAllQnA");
    __decorate([
        common_1.Get("/liked/:userId/:topic"),
        __param(0, common_1.Param("userId")), __param(1, common_1.Param("topic"))
    ], AppController.prototype, "getMyScrab");
    __decorate([
        common_1.Get("/bottom-nav")
    ], AppController.prototype, "getBottomNavList");
    __decorate([
        common_1.Post("/search/fans"),
        __param(0, common_1.Body())
    ], AppController.prototype, "searchMyFans");
    AppController = __decorate([
        common_1.Controller("")
    ], AppController);
    return AppController;
}());
exports.AppController = AppController;
