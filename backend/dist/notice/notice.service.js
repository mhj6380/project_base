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
exports.NoticeService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const notice_entity_1 = require("./entities/notice.entity");
let NoticeService = class NoticeService {
    constructor(noticeRepository) {
        this.noticeRepository = noticeRepository;
    }
    getAllNotice(language, page, limit) {
        return __awaiter(this, void 0, void 0, function* () {
            const totalCount = yield this.noticeRepository.count();
            let items;
            if (language === "KO") {
                items = yield this.noticeRepository.query("SELECT id,title, content,viewCount,createdAt, updatedAt FROM notice ORDER BY createdAt DESC");
            }
            else {
                items = yield this.noticeRepository.query("SELECT id,titleEn as title, contentEn as content,viewCount,createdAt, updatedAt FROM notice ORDER BY createdAt DESC");
            }
            return {
                totalCount,
                page,
                limit,
                data: items,
            };
        });
    }
    getOneNotice(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const product = yield this.noticeRepository.findOne({ id });
            if (!product)
                throw new common_1.NotFoundException(`Not Fount product ID:${product}`);
            return product;
        });
    }
    createNotice(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const notice = new notice_entity_1.Notice();
            notice.title = body.title;
            notice.titleEn = body.titleEn;
            notice.content = body.content;
            notice.contentEn = body.contentEn;
            console.log(body);
            const result = yield this.noticeRepository.save(notice);
            return result;
        });
    }
    updateNotice(body) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(body);
            const result = yield this.noticeRepository.update({ id: body.id }, body);
            console.log(result);
            return result;
        });
    }
    deleteNotice(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.noticeRepository.delete({
                id,
            });
            return true;
        });
    }
};
NoticeService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(notice_entity_1.Notice)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], NoticeService);
exports.NoticeService = NoticeService;
//# sourceMappingURL=notice.service.js.map