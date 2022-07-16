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
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const auth_module_1 = require("./auth/auth.module");
const app_controller_1 = require("./app/app.controller");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const config_1 = require("@nestjs/config");
const app_gateway_1 = require("./app.gateway");
const app_service_1 = require("./app/app.service");
const splash_entity_1 = require("./app/entities/splash.entity");
const s3_module_1 = require("./s3/s3.module");
const cs_module_1 = require("./cs/cs.module");
const notice_module_1 = require("./notice/notice.module");
const qna_entity_1 = require("./app/entities/qna.entity");
const language_string_entity_1 = require("./app/entities/language-string.entity");
const auth_entity_1 = require("./auth/entities/auth.entity");
const like_entity_1 = require("./app/entities/like.entity");
const qna_module_1 = require("./qna/qna.module");
const premium_entity_1 = require("./app/entities/premium.entity");
const onesignal_api_client_nest_1 = require("onesignal-api-client-nest");
const scrab_entity_1 = require("./app/entities/scrab.entity");
const push_message_module_1 = require("./push-message/push-message.module");
const notification_entity_1 = require("./push-message/entities/notification.entity");
const push_message_service_1 = require("./push-message/push-message.service");
const fake_entity_1 = require("./app/entities/fake.entity");
const test_data_entity_1 = require("./app/entities/test.data.entity");
const topic_entity_1 = require("./topic/entities/topic.entity");
const board_entity_1 = require("./board/entities/board.entity");
const topic_module_1 = require("./topic/topic.module");
const board_module_1 = require("./board/board.module");
const friendship_module_1 = require("./friendship/friendship.module");
const schedule_module_1 = require("./schedule/schedule.module");
let AppModule = class AppModule {
    constructor(connection) {
        this.connection = connection;
    }
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: ".env",
            }),
            typeorm_1.TypeOrmModule.forRootAsync({
                imports: [config_1.ConfigModule],
                inject: [config_1.ConfigService],
                useFactory: (configService) => __awaiter(void 0, void 0, void 0, function* () {
                    return {
                        type: "mysql",
                        host: configService.get("DB_HOST"),
                        port: configService.get("DB_PORT"),
                        username: configService.get("DB_USERNAME"),
                        password: configService.get("DB_PASSWORD"),
                        database: configService.get("DB_DATABASE"),
                        entities: [__dirname + "/**/*.entity{.ts,.js}"],
                        keepConnectionAlive: true,
                        charset: "utf8mb4_unicode_ci",
                        timezone: "Asia/Seoul",
                    };
                }),
            }),
            auth_module_1.AuthModule,
            typeorm_1.TypeOrmModule.forFeature([
                splash_entity_1.Splash,
                qna_entity_1.Qna,
                splash_entity_1.BottomNav,
                language_string_entity_1.LanguageString,
                language_string_entity_1.LanguageString2,
                auth_entity_1.User,
                like_entity_1.LikeUser,
                premium_entity_1.Premium,
                scrab_entity_1.Scrab,
                notification_entity_1.PushMessage,
                splash_entity_1.Intro,
                fake_entity_1.FakeComment,
                test_data_entity_1.TestData,
                topic_entity_1.Topic,
                board_entity_1.Board,
            ]),
            s3_module_1.S3Module,
            cs_module_1.CsModule,
            notice_module_1.NoticeModule,
            qna_module_1.QnaModule,
            push_message_module_1.PushMessageModule,
            topic_module_1.TopicModule,
            board_module_1.BoardModule,
            schedule_module_1.ScheduleModule,
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
            friendship_module_1.FriendshipModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [
            app_gateway_1.AppGateway,
            app_service_1.AppService,
            push_message_service_1.PushMessageService,
        ],
    }),
    __metadata("design:paramtypes", [typeorm_2.Connection])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map