"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QnaModule = void 0;
const common_1 = require("@nestjs/common");
const qna_service_1 = require("./qna.service");
const qna_controller_1 = require("./qna.controller");
const qna_entity_1 = require("./entities/qna.entity");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
let QnaModule = class QnaModule {
};
QnaModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([qna_entity_1.Qna]), config_1.ConfigModule],
        providers: [qna_service_1.QnaService],
        controllers: [qna_controller_1.QnaController],
    })
], QnaModule);
exports.QnaModule = QnaModule;
//# sourceMappingURL=qna.module.js.map