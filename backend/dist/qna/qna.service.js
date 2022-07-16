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
exports.QnaService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const qna_entity_1 = require("./entities/qna.entity");
let QnaService = class QnaService {
    constructor(qnaRepository) {
        this.qnaRepository = qnaRepository;
    }
    sortChange(body) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(body.datas);
            body.datas.map((item, index) => {
                this.qnaRepository.update({ id: item.id }, { sortIndex: index });
            });
            return true;
        });
    }
    getAllNotice(language) {
        return __awaiter(this, void 0, void 0, function* () {
            const totalCount = yield this.qnaRepository.count();
            let items;
            if (language === "KO") {
                items = yield this.qnaRepository.query(`SELECT qna.id, qna.title, qna.content, qna.viewCount,  qna.createdAt, qna.updatedAt, tp.title as topic FROM qna as qna
        LEFT JOIN topic as tp ON qna.topic = tp.topicKey 
        ORDER BY sortIndex ASC, createdAt DESC`);
            }
            else {
                items = yield this.qnaRepository.query(`SELECT qna.id, qna.titleEn as title, qna.contentEn as content, qna.viewCount,  qna.createdAt, qna.updatedAt, tp.titleEn as topic FROM qna as qna
        LEFT JOIN topic as tp ON qna.topic = tp.topicKey 
        ORDER BY sortIndex ASC, createdAt DESC`);
            }
            return {
                totalCount,
                data: items,
            };
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const product = yield this.qnaRepository
                .createQueryBuilder()
                .orderBy("sortIndex", "ASC")
                .addOrderBy("createdAt", "DESC")
                .getMany();
            return product;
        });
    }
    getOneNotice(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const product = yield this.qnaRepository.findOne({ id });
            if (!product)
                throw new common_1.NotFoundException(`Not Fount product ID:${product}`);
            return product;
        });
    }
    createNotice(body) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("BODY", body);
            const notice = new qna_entity_1.Qna();
            notice.title = body.title;
            notice.content = body.content;
            notice.titleEn = body.titleEn;
            notice.contentEn = body.contentEn;
            notice.topic = body.topic;
            const result = yield this.qnaRepository.save(notice);
            return result;
        });
    }
    updateNotice(body) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(body);
            const result = yield this.qnaRepository.update({ id: body.id }, body);
            console.log(result);
            return result;
        });
    }
    deleteNotice(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.qnaRepository.delete({
                id,
            });
            return true;
        });
    }
};
QnaService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(qna_entity_1.Qna)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], QnaService);
exports.QnaService = QnaService;
//# sourceMappingURL=qna.service.js.map