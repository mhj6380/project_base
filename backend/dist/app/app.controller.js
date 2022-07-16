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
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const onesignal_api_client_nest_1 = require("onesignal-api-client-nest");
const app_service_1 = require("./app.service");
let AppController = class AppController {
    constructor(appService, oneSignalService) {
        this.appService = appService;
        this.oneSignalService = oneSignalService;
    }
    home() {
        return "Backend v.0.0.111";
    }
    devTool() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.appService.devTool();
            }
            catch (e) {
                console.log(e.message);
            }
        });
    }
    testDataUpdate(body) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.appService.testDataUpdate(body);
        });
    }
    getTestData(field) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.appService.getTestData(field);
        });
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "home", null);
__decorate([
    common_1.Get("/devtool"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppController.prototype, "devTool", null);
__decorate([
    common_1.Put("/update"),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "testDataUpdate", null);
__decorate([
    common_1.Get("/get/:field"),
    __param(0, common_1.Param("field")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getTestData", null);
AppController = __decorate([
    common_1.Controller(""),
    __metadata("design:paramtypes", [app_service_1.AppService,
        onesignal_api_client_nest_1.OneSignalService])
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map