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
exports.CsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const cs_entity_1 = require("./entities/cs.entity");
let CsService = class CsService {
    constructor(csRepository) {
        this.csRepository = csRepository;
    }
    test() {
        return __awaiter(this, void 0, void 0, function* () {
            return "test";
        });
    }
    getNewCsList(page, limit) {
        return __awaiter(this, void 0, void 0, function* () {
            const skippedItems = (page - 1) * limit;
            const totalCount = yield this.csRepository.count();
            const crmItems = yield this.csRepository
                .createQueryBuilder()
                .orderBy("createdAt", "DESC")
                .offset(skippedItems)
                .limit(limit)
                .getMany();
            return {
                totalCount,
                page,
                limit,
                data: crmItems,
            };
        });
    }
    getNewCsSearchList(page, limit, searchText, startDate, endDate) {
        return __awaiter(this, void 0, void 0, function* () {
            const skippedItems = (page - 1) * limit;
            const totalCount = yield this.csRepository.count();
            console.log("startDate::", startDate);
            console.log("endDate::", endDate);
            let crmItems;
            if (searchText === "empty") {
                crmItems = yield this.csRepository
                    .createQueryBuilder()
                    .andWhere("createdAt >= :startDate", { startDate })
                    .andWhere("createdAt <= :endDate", { endDate: `${endDate} 23:59:59` })
                    .orderBy("createdAt", "DESC")
                    .offset(skippedItems)
                    .limit(limit)
                    .getMany();
            }
            else {
                crmItems = yield this.csRepository
                    .createQueryBuilder()
                    .andWhere("title like :title", { title: `%${searchText}%` })
                    .andWhere("createdAt >= :startDate", { startDate })
                    .andWhere("createdAt <= :endDate", { endDate: `${endDate} 23:59:59` })
                    .orWhere("username like :username", { username: `%${searchText}%` })
                    .orWhere("content like :content", { content: `%${searchText}%` })
                    .orWhere("memo like :memo", { memo: `%${searchText}%` })
                    .orderBy("createdAt", "DESC")
                    .offset(skippedItems)
                    .limit(limit)
                    .getMany();
            }
            return {
                totalCount,
                page,
                limit,
                data: crmItems,
            };
        });
    }
    getOneNewCs(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const cs = yield this.csRepository.findOne({ id });
            if (!cs)
                throw new common_1.NotFoundException(`Not Fount CRM ID:${cs}`);
            return cs;
        });
    }
    createNewCs(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const cs = new cs_entity_1.Cs();
            cs.userId = body.userId;
            cs.question = body.question;
            cs.answer = body.answer;
            const result = yield this.csRepository.save(cs);
            return result;
        });
    }
    updateNewCs(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.csRepository.update({ id: body.id }, body);
            return result;
        });
    }
    deleteNewCs(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.csRepository.delete({ id });
        });
    }
};
CsService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(cs_entity_1.Cs)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CsService);
exports.CsService = CsService;
//# sourceMappingURL=cs.service.js.map