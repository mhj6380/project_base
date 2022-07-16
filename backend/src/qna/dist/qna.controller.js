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
exports.QnaController = void 0;
var common_1 = require("@nestjs/common");
var QnaController = /** @class */ (function () {
    function QnaController(qnaService) {
        this.qnaService = qnaService;
    }
    QnaController.prototype.sortChange = function (body) {
        return this.qnaService.sortChange(body);
    };
    //등록
    QnaController.prototype.createBoard = function (body) {
        return this.qnaService.createNotice(body);
    };
    //수정
    QnaController.prototype.updateNotice = function (body) {
        return this.qnaService.updateNotice(body);
    };
    //전체조회 - 관리자용
    QnaController.prototype.getAll = function () {
        return this.qnaService.getAll();
    };
    //전체조회
    QnaController.prototype.getAllNotice = function (language) {
        return this.qnaService.getAllNotice(language);
    };
    // //1개조회
    QnaController.prototype.getOneNotice = function (id) {
        console.log("GGG");
        return this.qnaService.getOneNotice(id);
    };
    //삭제
    QnaController.prototype.deleteBoard = function (id) {
        return this.qnaService.deleteNotice(id);
    };
    __decorate([
        common_1.Put("/sort-change"),
        __param(0, common_1.Body())
    ], QnaController.prototype, "sortChange");
    __decorate([
        common_1.Post("/"),
        __param(0, common_1.Body())
    ], QnaController.prototype, "createBoard");
    __decorate([
        common_1.Put("/"),
        __param(0, common_1.Body())
    ], QnaController.prototype, "updateNotice");
    __decorate([
        common_1.Get("/")
    ], QnaController.prototype, "getAll");
    __decorate([
        common_1.Get("/:language"),
        __param(0, common_1.Param("language"))
    ], QnaController.prototype, "getAllNotice");
    __decorate([
        common_1.Get("/detail/:id"),
        __param(0, common_1.Param("id"))
    ], QnaController.prototype, "getOneNotice");
    __decorate([
        common_1.Delete("/:id"),
        __param(0, common_1.Param("id"))
    ], QnaController.prototype, "deleteBoard");
    QnaController = __decorate([
        common_1.Controller("qna")
    ], QnaController);
    return QnaController;
}());
exports.QnaController = QnaController;
