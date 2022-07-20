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
exports.VisitController = void 0;
const common_1 = require("@nestjs/common");
const visit_service_1 = require("./visit.service");
let VisitController = class VisitController {
    constructor(visitService) {
        this.visitService = visitService;
    }
    createVisit(body) {
        return this.visitService.createVisit(body);
    }
    getChartTime(startDate, endDate) {
        return this.visitService.getChartTime(startDate, endDate);
    }
    getChartDay(startDate, endDate) {
        return this.visitService.getChartDay(startDate, endDate);
    }
    getChartMonth(startDate, endDate) {
        return this.visitService.getChartMonth(startDate, endDate);
    }
    getChartYear(startDate, endDate) {
        return this.visitService.getChartYear();
    }
};
__decorate([
    common_1.Post("/"),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], VisitController.prototype, "createVisit", null);
__decorate([
    common_1.Get("/time/:startDate/:endDate"),
    __param(0, common_1.Param("startDate")),
    __param(1, common_1.Param("endDate")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], VisitController.prototype, "getChartTime", null);
__decorate([
    common_1.Get("/day/:startDate/:endDate"),
    __param(0, common_1.Param("startDate")),
    __param(1, common_1.Param("endDate")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], VisitController.prototype, "getChartDay", null);
__decorate([
    common_1.Get("/month/:startDate/:endDate"),
    __param(0, common_1.Param("startDate")),
    __param(1, common_1.Param("endDate")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], VisitController.prototype, "getChartMonth", null);
__decorate([
    common_1.Get("/year/:startDate/:endDate"),
    __param(0, common_1.Param("startDate")),
    __param(1, common_1.Param("endDate")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], VisitController.prototype, "getChartYear", null);
VisitController = __decorate([
    common_1.Controller("visit"),
    __metadata("design:paramtypes", [visit_service_1.VisitService])
], VisitController);
exports.VisitController = VisitController;
//# sourceMappingURL=visit.controller.js.map