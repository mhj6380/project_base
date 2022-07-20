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
                "00시": 0,
                "01시": 0,
                "02시": 0,
                "03시": 0,
                "04시": 0,
                "05시": 0,
                "06시": 0,
                "07시": 0,
                "08시": 0,
                "09시": 0,
                "10시": 0,
                "11시": 0,
                "12시": 0,
                "13시": 0,
                "14시": 0,
                "15시": 0,
                "16시": 0,
                "17시": 0,
                "18시": 0,
                "19시": 0,
                "20시": 0,
                "21시": 0,
                "22시": 0,
                "23시": 0,
                "24시": 0,
            };
            let labelArr = [];
            let countArr = [];
            datas.map((item) => {
                initialArr[`${Number(item.timegroup)}시`] = Number(item.allcount);
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
                "1일": 0,
                "2일": 0,
                "3일": 0,
                "4일": 0,
                "5일": 0,
                "6일": 0,
                "7일": 0,
                "8일": 0,
                "9일": 0,
                "10일": 0,
                "11일": 0,
                "12일": 0,
                "13일": 0,
                "14일": 0,
                "15일": 0,
                "16일": 0,
                "17일": 0,
                "18일": 0,
                "19일": 0,
                "20일": 0,
                "21일": 0,
                "22일": 0,
                "23일": 0,
                "24일": 0,
                "25일": 0,
                "26일": 0,
                "27일": 0,
                "28일": 0,
                "29일": 0,
                "30일": 0,
                "31일": 0,
            };
            let labelArr = [];
            let countArr = [];
            datas.map((item) => {
                initialArr[`${Number(item.daygroup)}일`] = Number(item.allcount);
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
                "1월": 0,
                "2월": 0,
                "3월": 0,
                "4월": 0,
                "5월": 0,
                "6월": 0,
                "7월": 0,
                "8월": 0,
                "9월": 0,
                "10월": 0,
                "11월": 0,
                "12월": 0,
            };
            datas.map((item) => {
                initialArr[`${Number(item.monthgroup)}월`] = Number(item.allcount);
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
                labelArr.push(`${item.yeargroup}년`);
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