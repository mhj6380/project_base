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
exports.PushMessageService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const notification_entity_1 = require("./entities/notification.entity");
const onesignal_api_client_core_1 = require("onesignal-api-client-core");
const typeorm_2 = require("@nestjs/typeorm");
const onesignal_api_client_nest_1 = require("onesignal-api-client-nest");
const dayjs = require("dayjs");
let PushMessageService = class PushMessageService {
    constructor(pushMessageRepository, oneSignalService) {
        this.pushMessageRepository = pushMessageRepository;
        this.oneSignalService = oneSignalService;
    }
    sendMessage(body) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const onesignal = new notification_entity_1.PushMessage();
                onesignal.title = body.title;
                onesignal.content = body.content;
                onesignal.targetPath = body.targetPath;
                onesignal.targetOption = body.targetOption;
                this.pushMessageRepository.save(onesignal);
                let input;
                let notiBuilder;
                if (body.isPersonal) {
                    notiBuilder = new onesignal_api_client_core_1.NotificationByFilterBuilder().setFilters([
                        {
                            field: "tag",
                            key: "userId",
                            relation: "=",
                            value: body.userId,
                        },
                        {
                            field: "tag",
                            key: body.type,
                            relation: "=",
                            value: true,
                        },
                    ]);
                }
                else {
                    notiBuilder = new onesignal_api_client_core_1.NotificationBySegmentBuilder().setIncludedSegments([
                        "Active Users",
                        "Inactive Users",
                    ]);
                }
                if (body.sendAfter) {
                    if (Number(dayjs(body.sendAfter).format("YYYYMMDDHHmmss")) <
                        Number(dayjs().format("YYYYMMDDHHmmss"))) {
                        throw new common_1.BadRequestException("예약시간은 현재시간보다 과거일 수 없습니다.");
                    }
                    const send_after = dayjs(body.sendAfter).format();
                    input = notiBuilder
                        .notification()
                        .setHeadings({ en: body.title })
                        .setSubtitle({ en: body.title })
                        .setContents({ en: body.content })
                        .setAppearance({
                        small_icon: "mipmap/launcher_icon",
                    })
                        .setAttachments({
                        data: {
                            targetPath: body.targetPath,
                            targetOption: body.targetOption,
                        },
                    })
                        .setDelivery({ send_after })
                        .build();
                }
                else {
                    console.log("노티 왜안되지?");
                    input = notiBuilder
                        .notification()
                        .setHeadings({ en: body.title })
                        .setSubtitle({ en: body.title })
                        .setContents({ en: body.content })
                        .setAppearance({
                        small_icon: "mipmap/launcher_icon",
                    })
                        .setAttachments({
                        data: {
                            targetPath: body.targetPath,
                            targetOption: body.targetOption,
                        },
                    })
                        .build();
                }
                this.oneSignalService.createNotification(input);
                return {
                    statusCode: 200,
                    message: "PUSH 메세지 전송 완료!",
                };
            }
            catch (e) {
                console.log(e);
            }
        });
    }
};
PushMessageService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_2.InjectRepository(notification_entity_1.PushMessage)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        onesignal_api_client_nest_1.OneSignalService])
], PushMessageService);
exports.PushMessageService = PushMessageService;
//# sourceMappingURL=push-message.service.js.map