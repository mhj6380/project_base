"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RankingModule = void 0;
const common_1 = require("@nestjs/common");
const ranking_service_1 = require("./ranking.service");
const ranking_controller_1 = require("./ranking.controller");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const auth_entity_1 = require("../auth/entities/auth.entity");
let RankingModule = class RankingModule {
};
RankingModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([auth_entity_1.User]), config_1.ConfigModule],
        providers: [ranking_service_1.RankingService],
        controllers: [ranking_controller_1.RankingController],
    })
], RankingModule);
exports.RankingModule = RankingModule;
//# sourceMappingURL=ranking.module.js.map