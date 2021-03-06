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
exports.VisitService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const visit_entity_1 = require("./entities/visit.entity");
const dayjs = require("dayjs");
let VisitService = class VisitService {
    constructor(visitRepository) {
        this.visitRepository = visitRepository;
    }
    createVisit(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const today = dayjs().format("YYYY-MM-DD");
            const currentItem = yield this.visitRepository.findOne({
                uuid: body.uuid,
                vsDate: today,
            });
            if (!currentItem) {
                const visit = new visit_entity_1.Visit();
                visit.uuid = body.uuid;
                visit.language = body.language;
                this.visitRepository.save(visit);
            }
        });
    }
    getChartTime(startDate, endDate) {
        return __awaiter(this, void 0, void 0, function* () {
            const stmt = `SELECT LEFT(vsTime,2) as timegroup, COUNT(vsTime) as allcount FROM visit WHERE (vsDate > '${startDate}' OR vsDate = '${startDate}') AND (vsDate < '${endDate}'  OR vsDate = '${endDate}') GROUP BY timegroup`;
            const datas = yield this.visitRepository.query(stmt);
            datas.map((item) => {
                item.allcount = Number(item.allcount);
            });
            let initialArr = {
                "00???": 0,
                "01???": 0,
                "02???": 0,
                "03???": 0,
                "04???": 0,
                "05???": 0,
                "06???": 0,
                "07???": 0,
                "08???": 0,
                "09???": 0,
                "10???": 0,
                "11???": 0,
                "12???": 0,
                "13???": 0,
                "14???": 0,
                "15???": 0,
                "16???": 0,
                "17???": 0,
                "18???": 0,
                "19???": 0,
                "20???": 0,
                "21???": 0,
                "22???": 0,
                "23???": 0,
                "24???": 0,
            };
            let labelArr = [];
            let countArr = [];
            datas.map((item) => {
                initialArr[`${Number(item.timegroup)}???`] = Number(item.allcount);
            });
            const dataArr = Object.entries(initialArr);
            dataArr.map((item) => {
                labelArr.push(item[0]);
                countArr.push(item[1]);
            });
            return { labels: labelArr, counts: countArr };
        });
    }
    getChartDay(startDate, endDate) {
        return __awaiter(this, void 0, void 0, function* () {
            const stmt = `SELECT COUNT(vsDate) allcount, MID(vsDate, 9,2) as daygroup FROM visit WHERE (vsDate > '${startDate}' AND vsDate < '${endDate}') OR (vsDate = '${startDate}' OR vsDate = '${endDate}' ) GROUP BY daygroup`;
            const datas = yield this.visitRepository.query(stmt);
            let initialArr = {
                "1???": 0,
                "2???": 0,
                "3???": 0,
                "4???": 0,
                "5???": 0,
                "6???": 0,
                "7???": 0,
                "8???": 0,
                "9???": 0,
                "10???": 0,
                "11???": 0,
                "12???": 0,
                "13???": 0,
                "14???": 0,
                "15???": 0,
                "16???": 0,
                "17???": 0,
                "18???": 0,
                "19???": 0,
                "20???": 0,
                "21???": 0,
                "22???": 0,
                "23???": 0,
                "24???": 0,
                "25???": 0,
                "26???": 0,
                "27???": 0,
                "28???": 0,
                "29???": 0,
                "30???": 0,
                "31???": 0,
            };
            let labelArr = [];
            let countArr = [];
            datas.map((item) => {
                initialArr[`${Number(item.daygroup)}???`] = Number(item.allcount);
            });
            const dataArr = Object.entries(initialArr);
            dataArr.map((item) => {
                labelArr.push(item[0]);
                countArr.push(item[1]);
            });
            return { labels: labelArr, counts: countArr };
        });
    }
    getChartMonth(startDate, endDate) {
        return __awaiter(this, void 0, void 0, function* () {
            const stmt = `SELECT count(vsDate) as allcount, vsDate,MID(vsDate,6,2) monthgroup FROM visit WHERE (vsDate > '${startDate}'  OR vsDate = '${startDate}') AND (vsDate < '${endDate}' OR vsDate = '${endDate}' ) GROUP BY monthgroup`;
            const datas = yield this.visitRepository.query(stmt);
            let labelArr = [];
            let countArr = [];
            let initialArr = {
                "1???": 0,
                "2???": 0,
                "3???": 0,
                "4???": 0,
                "5???": 0,
                "6???": 0,
                "7???": 0,
                "8???": 0,
                "9???": 0,
                "10???": 0,
                "11???": 0,
                "12???": 0,
            };
            datas.map((item) => {
                initialArr[`${Number(item.monthgroup)}???`] = Number(item.allcount);
            });
            const test = Object.entries(initialArr);
            test.map((item) => {
                labelArr.push(item[0]);
                countArr.push(item[1]);
            });
            return { labels: labelArr, counts: countArr };
        });
    }
    getChartYear() {
        return __awaiter(this, void 0, void 0, function* () {
            let labelArr = [];
            let countArr = [];
            const stmt = `SELECT COUNT(vsDate) allcount, LEFT(vsDate,4) yeargroup FROM visit GROUP BY yeargroup`;
            const datas = yield this.visitRepository.query(stmt);
            datas.map((item) => {
                labelArr.push(`${item.yeargroup}???`);
                countArr.push(Number(item.allcount));
            });
            return { labels: labelArr, counts: countArr };
        });
    }
};
VisitService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(visit_entity_1.Visit)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], VisitService);
exports.VisitService = VisitService;
//# sourceMappingURL=visit.service.js.map