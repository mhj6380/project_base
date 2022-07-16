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
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const class_validator_1 = require("class-validator");
const typeorm_2 = require("typeorm");
const splash_entity_1 = require("./entities/splash.entity");
const test_data_entity_1 = require("./entities/test.data.entity");
const Clayful = require("clayful");
let AppService = class AppService {
    constructor(splashRepository, testDataRepository) {
        this.splashRepository = splashRepository;
        this.testDataRepository = testDataRepository;
    }
    devTool() {
        return __awaiter(this, void 0, void 0, function* () {
            Clayful.config({
                client: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6ImE5YmE3NWRiNTlhMmFkOGFiN2EzYjBmYWUwMTNkNjk3YmM1NDBmYTYwZmZhYmQ2NjQxZDNkNTMxMGRhNmYzYjAiLCJyb2xlIjoiY2xpZW50IiwiaWF0IjoxNjUwOTgzNDczLCJzdG9yZSI6IjJHUEY4M1EyUTU2VC5KVjJBUlU4UTdXQlQiLCJzdWIiOiJGNTY0ODVTVloyRDgifQ.I3AWeLr2dy4Q_y85HKSFyAS-N3_l3qbylxFZmK0k29w",
            });
            const Product = Clayful.Product;
            const payload = {};
            const options = {
                query: {
                    page: 1,
                },
            };
            Product.list(options)
                .then((result) => {
                const headers = result.headers;
                const data = result;
                console.log(data);
            })
                .catch((err) => {
                console.log(err);
            });
        });
    }
    policy() {
        return __awaiter(this, void 0, void 0, function* () {
            const policyData = yield this.splashRepository
                .createQueryBuilder("splash")
                .select(["splash.policy", "splash.terms"])
                .getOne();
            return policyData;
        });
    }
    testDataUpdate(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const { data1, data2, data3, data4, data5, data6, data7, data8, data9, data10, data11, data12, data13, data14, data15, } = body;
            const updateBody = {};
            if (data1)
                if (!isJson(data1)) {
                    throw new common_1.BadRequestException("data1 = JSON String 형태만 가능합니다");
                }
                else {
                    updateBody.data1 = data1;
                }
            if (data2)
                if (!isJson(data2)) {
                    throw new common_1.BadRequestException("data2 = JSON String 형태만 가능합니다");
                }
                else {
                    updateBody.data2 = data2;
                }
            if (data3)
                if (!isJson(data3)) {
                    throw new common_1.BadRequestException("data3 = JSON String 형태만 가능합니다");
                }
                else {
                    updateBody.data3 = data3;
                }
            if (data4)
                if (!isJson(data4)) {
                    throw new common_1.BadRequestException("data4 = JSON String 형태만 가능합니다");
                }
                else {
                    updateBody.data4 = data4;
                }
            if (data5)
                if (!isJson(data5)) {
                    throw new common_1.BadRequestException("data5 = JSON String 형태만 가능합니다");
                }
                else {
                    updateBody.data5 = data5;
                }
            if (data6)
                if (!isJson(data6)) {
                    throw new common_1.BadRequestException("data6 = JSON String 형태만 가능합니다");
                }
                else {
                    updateBody.data6 = data6;
                }
            if (data7)
                if (!isJson(data7)) {
                    throw new common_1.BadRequestException("data7 = JSON String 형태만 가능합니다");
                }
                else {
                    updateBody.data7 = data7;
                }
            if (data8)
                if (!isJson(data8)) {
                    throw new common_1.BadRequestException("data8 = JSON String 형태만 가능합니다");
                }
                else {
                    updateBody.data8 = data8;
                }
            if (data9)
                if (!isJson(data9)) {
                    throw new common_1.BadRequestException("data9 = JSON String 형태만 가능합니다");
                }
                else {
                    updateBody.data9 = data9;
                }
            if (data10)
                if (!isJson(data10)) {
                    throw new common_1.BadRequestException("data10 = JSON String 형태만 가능합니다");
                }
                else {
                    updateBody.data10 = data10;
                }
            if (data11)
                if (!isJson(data11)) {
                    throw new common_1.BadRequestException("data11 = JSON String 형태만 가능합니다");
                }
                else {
                    updateBody.data11 = data11;
                }
            if (data12)
                if (!isJson(data12)) {
                    throw new common_1.BadRequestException("data12 = JSON String 형태만 가능합니다");
                }
                else {
                    updateBody.data12 = data12;
                }
            if (data13)
                if (!isJson(data13)) {
                    throw new common_1.BadRequestException("data13 = JSON String 형태만 가능합니다");
                }
                else {
                    updateBody.data13 = data13;
                }
            if (data14)
                if (!isJson(data14)) {
                    throw new common_1.BadRequestException("data14 = JSON String 형태만 가능합니다");
                }
                else {
                    updateBody.data14 = data14;
                }
            if (data15)
                if (!isJson(data15)) {
                    throw new common_1.BadRequestException("data15 = JSON String 형태만 가능합니다");
                }
                else {
                    updateBody.data15 = data15;
                }
            yield this.testDataRepository.update({}, updateBody);
            return { statusCode: 200, message: "업데이트 완료 " };
        });
    }
    getTestData(field) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.testDataRepository.findOne();
            if (result[field]) {
                if (class_validator_1.isJSON(result[field])) {
                    return JSON.parse(result[field]);
                }
                else {
                    return result[field];
                }
            }
            else {
                throw new common_1.BadRequestException(`존재하지 않는 필드 : ${field}`);
            }
        });
    }
};
AppService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(splash_entity_1.Splash)),
    __param(1, typeorm_1.InjectRepository(test_data_entity_1.TestData)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], AppService);
exports.AppService = AppService;
function isJson(str) {
    try {
        JSON.parse(str);
    }
    catch (e) {
        return false;
    }
    return true;
}
//# sourceMappingURL=app.service.js.map