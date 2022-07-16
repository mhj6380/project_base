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
exports.ScheduleController = void 0;
const common_1 = require("@nestjs/common");
const schedule_dto_1 = require("./dto/schedule.dto");
const schedule_service_1 = require("./schedule.service");
let ScheduleController = class ScheduleController {
    constructor(scheduleService) {
        this.scheduleService = scheduleService;
    }
    createSchedule(body) {
        return this.scheduleService.createSchedule(body);
    }
    updateSchedule(body) {
        return this.scheduleService.updateSchedule(body);
    }
    deleteSchedule(id) {
        return this.scheduleService.deleteSchedule(id);
    }
    getListSchedule(categoryUid, yearMonth) {
        return this.scheduleService.getListSchedule(categoryUid, yearMonth);
    }
};
__decorate([
    common_1.Post("/"),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [schedule_dto_1.CreateScheduleDTO]),
    __metadata("design:returntype", Promise)
], ScheduleController.prototype, "createSchedule", null);
__decorate([
    common_1.Put("/"),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [schedule_dto_1.UpdateScheduleDTO]),
    __metadata("design:returntype", void 0)
], ScheduleController.prototype, "updateSchedule", null);
__decorate([
    common_1.Delete("/:id"),
    __param(0, common_1.Param("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ScheduleController.prototype, "deleteSchedule", null);
__decorate([
    common_1.Get("/:categoryUid/:yearMonth"),
    __param(0, common_1.Param("categoryUid")),
    __param(1, common_1.Param("yearMonth")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], ScheduleController.prototype, "getListSchedule", null);
ScheduleController = __decorate([
    common_1.Controller("schedule"),
    __metadata("design:paramtypes", [schedule_service_1.ScheduleService])
], ScheduleController);
exports.ScheduleController = ScheduleController;
//# sourceMappingURL=schedule.controller.js.map