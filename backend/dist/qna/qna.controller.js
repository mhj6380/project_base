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
exports.QnaController = void 0;
const common_1 = require("@nestjs/common");
const qna_service_1 = require("./qna.service");
let QnaController = class QnaController {
    constructor(qnaService) {
        this.qnaService = qnaService;
    }
    sortChange(body) {
        return this.qnaService.sortChange(body);
    }
    createBoard(body) {
        return this.qnaService.createNotice(body);
    }
    updateNotice(body) {
        return this.qnaService.updateNotice(body);
    }
    getAll() {
        return this.qnaService.getAll();
    }
    getAllNotice(language) {
        return this.qnaService.getAllNotice(language);
    }
    getOneNotice(id) {
        console.log("GGG");
        return this.qnaService.getOneNotice(id);
    }
    deleteBoard(id) {
        return this.qnaService.deleteNotice(id);
    }
};
__decorate([
    common_1.Put("/sort-change"),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], QnaController.prototype, "sortChange", null);
__decorate([
    common_1.Post("/"),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], QnaController.prototype, "createBoard", null);
__decorate([
    common_1.Put("/"),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], QnaController.prototype, "updateNotice", null);
__decorate([
    common_1.Get("/"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], QnaController.prototype, "getAll", null);
__decorate([
    common_1.Get("/:language"),
    __param(0, common_1.Param("language")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], QnaController.prototype, "getAllNotice", null);
__decorate([
    common_1.Get("/detail/:id"),
    __param(0, common_1.Param("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], QnaController.prototype, "getOneNotice", null);
__decorate([
    common_1.Delete("/:id"),
    __param(0, common_1.Param("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], QnaController.prototype, "deleteBoard", null);
QnaController = __decorate([
    common_1.Controller("qna"),
    __metadata("design:paramtypes", [qna_service_1.QnaService])
], QnaController);
exports.QnaController = QnaController;
//# sourceMappingURL=qna.controller.js.map