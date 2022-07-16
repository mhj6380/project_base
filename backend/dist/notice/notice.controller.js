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
exports.NoticeController = void 0;
const common_1 = require("@nestjs/common");
const notice_service_1 = require("./notice.service");
let NoticeController = class NoticeController {
    constructor(noticeService) {
        this.noticeService = noticeService;
    }
    createBoard(body) {
        return this.noticeService.createNotice(body);
    }
    updateNotice(body) {
        return this.noticeService.updateNotice(body);
    }
    getAllNotice(language, page, limit) {
        return this.noticeService.getAllNotice(language, page, limit);
    }
    getOneNotice(id) {
        return this.noticeService.getOneNotice(id);
    }
    deleteBoard(id) {
        return this.noticeService.deleteNotice(id);
    }
};
__decorate([
    common_1.Post("/"),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], NoticeController.prototype, "createBoard", null);
__decorate([
    common_1.Put("/"),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], NoticeController.prototype, "updateNotice", null);
__decorate([
    common_1.Get("/:language/:page/:limit"),
    __param(0, common_1.Param("language")),
    __param(1, common_1.Param("page")),
    __param(2, common_1.Param("limit")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number, Number]),
    __metadata("design:returntype", void 0)
], NoticeController.prototype, "getAllNotice", null);
__decorate([
    common_1.Get("/:id"),
    __param(0, common_1.Param("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], NoticeController.prototype, "getOneNotice", null);
__decorate([
    common_1.Delete("/:id"),
    __param(0, common_1.Param("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], NoticeController.prototype, "deleteBoard", null);
NoticeController = __decorate([
    common_1.Controller("notice"),
    __metadata("design:paramtypes", [notice_service_1.NoticeService])
], NoticeController);
exports.NoticeController = NoticeController;
//# sourceMappingURL=notice.controller.js.map