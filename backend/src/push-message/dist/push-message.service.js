"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.PushMessageService = void 0;
var common_1 = require("@nestjs/common");
var notification_entity_1 = require("./entities/notification.entity");
var onesignal_api_client_core_1 = require("onesignal-api-client-core");
var typeorm_1 = require("@nestjs/typeorm");
var dayjs = require("dayjs");
var PushMessageService = /** @class */ (function () {
    function PushMessageService(pushMessageRepository, oneSignalService) {
        this.pushMessageRepository = pushMessageRepository;
        this.oneSignalService = oneSignalService;
    }
    PushMessageService.prototype.sendMessage = function (body) {
        return __awaiter(this, void 0, void 0, function () {
            var onesignal, input, notiBuilder, send_after;
            return __generator(this, function (_a) {
                onesignal = new notification_entity_1.PushMessage();
                onesignal.title = body.title;
                onesignal.content = body.content;
                onesignal.targetPath = body.targetPath;
                onesignal.targetOption = body.targetOption;
                // 메세지 히스토리를 DB에 기록
                this.pushMessageRepository.save(onesignal);
                if (body.isPersonal) {
                    // 개인전송
                    notiBuilder = new onesignal_api_client_core_1.NotificationByFilterBuilder().setFilters([
                        {
                            field: "tag",
                            key: "userId",
                            relation: "=",
                            value: body.userId
                        },
                        {
                            field: "tag",
                            key: body.type,
                            relation: "=",
                            value: true
                        },
                    ]);
                }
                else {
                    // 전체발송
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
                    send_after = dayjs(body.sendAfter).format();
                    input = notiBuilder
                        // .setFilters()
                        .notification()
                        .setHeadings({ en: body.title })
                        .setSubtitle({ en: body.title })
                        .setContents({ en: body.content })
                        .setAppearance({
                        small_icon: "mipmap/launcher_icon"
                    })
                        .setAttachments({
                        data: {
                            targetPath: body.targetPath,
                            targetOption: body.targetOption
                        }
                    })
                        .setDelivery({ send_after: send_after })
                        .build();
                }
                else {
                    input = notiBuilder
                        .notification()
                        .setHeadings({ en: body.title })
                        .setSubtitle({ en: body.title })
                        .setContents({ en: body.content })
                        .setAppearance({
                        small_icon: "mipmap/launcher_icon"
                    })
                        .setAttachments({
                        data: {
                            targetPath: body.targetPath,
                            targetOption: body.targetOption
                        }
                    })
                        .build();
                }
                // Onesignal에 메세지 전송 요청
                this.oneSignalService.createNotification(input);
                return [2 /*return*/, {
                        statusCode: 200,
                        message: "PUSH 메세지 전송 완료!"
                    }];
            });
        });
    };
    PushMessageService = __decorate([
        common_1.Injectable(),
        __param(0, typeorm_1.InjectRepository(notification_entity_1.PushMessage))
    ], PushMessageService);
    return PushMessageService;
}());
exports.PushMessageService = PushMessageService;
