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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScheduleService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const schedule_entity_1 = require("./entities/schedule.entity");
let ScheduleService = class ScheduleService {
    constructor(scheduleRepository) {
        this.scheduleRepository = scheduleRepository;
    }
    createSchedule(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const schedule = new schedule_entity_1.Schedule();
            schedule.title = body.title;
            schedule.content = body.content;
            schedule.useRange = body.useRange;
            schedule.startAt = body.startAt;
            schedule.endAt = body.endAt;
            schedule.userId = body.userId;
            schedule.categoryUid = body.categoryUid;
            yield this.scheduleRepository.save(schedule);
            return {
                statusCode: 200,
                message: "스케쥴이 등록되었습니다.",
            };
        });
    }
    updateSchedule(body) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.scheduleRepository.update({ id: body.id }, body);
            return {
                statusCode: 200,
                message: "스케쥴이 수정되었습니다.",
            };
        });
    }
    deleteSchedule(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.scheduleRepository.delete({ id });
            return {
                statusCode: 200,
                message: "스케쥴이 삭제되었습니다.",
            };
        });
    }
    getListSchedule(categoryUid, yearMonth) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.scheduleRepository
                .createQueryBuilder("schedule")
                .where("schedule.categoryUid = :categoryUid AND (startAt LIKE :range OR endAt LIKE :range)", { categoryUid, range: `%${yearMonth}%` })
                .orderBy("schedule.startAt", "ASC")
                .getMany();
            return result;
        });
    }
};
ScheduleService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(schedule_entity_1.Schedule)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ScheduleService);
exports.ScheduleService = ScheduleService;
//# sourceMappingURL=schedule.service.js.map