"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsModule = void 0;
const common_1 = require("@nestjs/common");
const cs_service_1 = require("./cs.service");
const cs_controller_1 = require("./cs.controller");
const typeorm_1 = require("@nestjs/typeorm");
const config_1 = require("@nestjs/config");
const cs_entity_1 = require("./entities/cs.entity");
let CsModule = class CsModule {
};
CsModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([cs_entity_1.Cs]), config_1.ConfigModule],
        providers: [cs_service_1.CsService],
        controllers: [cs_controller_1.CsController],
    })
], CsModule);
exports.CsModule = CsModule;
//# sourceMappingURL=cs.module.js.map