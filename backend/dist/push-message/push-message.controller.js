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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PushMessageController = void 0;
const common_1 = require("@nestjs/common");
const push_message_dto_1 = require("./dto/push-message.dto");
const push_message_service_1 = require("./push-message.service");
let PushMessageController = class PushMessageController {
    constructor(pushMessageService) {
        this.pushMessageService = pushMessageService;
    }
    sendMessage(body) {
        return this.pushMessageService.sendMessage(body);
    }
};
__decorate([
    common_1.Post("/message"),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [push_message_dto_1.SendPushMessageDTO]),
    __metadata("design:returntype", Promise)
], PushMessageController.prototype, "sendMessage", null);
PushMessageController = __decorate([
    common_1.Controller("push-message"),
    __metadata("design:paramtypes", [push_message_service_1.PushMessageService])
], PushMessageController);
exports.PushMessageController = PushMessageController;
//# sourceMappingURL=push-message.controller.js.map