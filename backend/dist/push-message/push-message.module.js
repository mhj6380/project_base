"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
exports.PushMessageModule = void 0;
const common_1 = require("@nestjs/common");
const push_message_service_1 = require("./push-message.service");
const push_message_controller_1 = require("./push-message.controller");
const typeorm_1 = require("@nestjs/typeorm");
const notification_entity_1 = require("./entities/notification.entity");
const config_1 = require("@nestjs/config");
const onesignal_api_client_nest_1 = require("onesignal-api-client-nest");
let PushMessageModule = class PushMessageModule {
};
PushMessageModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([notification_entity_1.PushMessage]),
            onesignal_api_client_nest_1.OneSignalModule.forRootAsync({
                imports: [config_1.ConfigModule],
                inject: [config_1.ConfigService],
                useFactory: (configService) => __awaiter(void 0, void 0, void 0, function* () {
                    return {
                        appId: configService.get("ONESIGNAL_APP_ID"),
                        restApiKey: configService.get("ONESIGNAL_REST_API_KEY"),
                    };
                }),
            }),
            config_1.ConfigModule,
        ],
        providers: [push_message_service_1.PushMessageService],
        controllers: [push_message_controller_1.PushMessageController],
    })
], PushMessageModule);
exports.PushMessageModule = PushMessageModule;
//# sourceMappingURL=push-message.module.js.map