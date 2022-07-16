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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendPushMessageDTO = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class SendPushMessageDTO {
}
__decorate([
    class_validator_1.IsString(),
    swagger_1.ApiProperty({ type: String, description: "PUSH 제목" }),
    __metadata("design:type", String)
], SendPushMessageDTO.prototype, "title", void 0);
__decorate([
    class_validator_1.IsString(),
    swagger_1.ApiProperty({ type: String, description: "PUSH 내용" }),
    __metadata("design:type", String)
], SendPushMessageDTO.prototype, "content", void 0);
__decorate([
    class_validator_1.IsString(),
    swagger_1.ApiProperty({ type: String, description: " " }),
    __metadata("design:type", String)
], SendPushMessageDTO.prototype, "targetPath", void 0);
__decorate([
    class_validator_1.IsString(),
    swagger_1.ApiProperty({ type: String, description: " " }),
    __metadata("design:type", String)
], SendPushMessageDTO.prototype, "targetOption", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsOptional(),
    swagger_1.ApiProperty({ type: String, description: "예약시간" }),
    __metadata("design:type", String)
], SendPushMessageDTO.prototype, "sendAfter", void 0);
__decorate([
    class_validator_1.IsBoolean(),
    class_validator_1.IsOptional(),
    swagger_1.ApiProperty({ type: Boolean }),
    __metadata("design:type", Boolean)
], SendPushMessageDTO.prototype, "isPersonal", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsOptional(),
    swagger_1.ApiProperty({ type: String }),
    __metadata("design:type", Number)
], SendPushMessageDTO.prototype, "userId", void 0);
__decorate([
    class_validator_1.IsString(),
    swagger_1.ApiProperty({ type: String, description: "예약시간" }),
    __metadata("design:type", String)
], SendPushMessageDTO.prototype, "type", void 0);
exports.SendPushMessageDTO = SendPushMessageDTO;
//# sourceMappingURL=push-message.dto.js.map