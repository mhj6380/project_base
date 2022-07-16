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
exports.DeleteAllMessageDTO = exports.DeleteMessageDTO = exports.ViewAllMessageDTO = exports.ViewMessageDTO = exports.UpdateMessageDTO = exports.CreateMessageDTO = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const class_validator_1 = require("class-validator");
class CreateMessageDTO {
}
__decorate([
    class_validator_1.IsNumber(),
    __metadata("design:type", Number)
], CreateMessageDTO.prototype, "fromUser", void 0);
__decorate([
    class_validator_1.IsNumber(),
    __metadata("design:type", Number)
], CreateMessageDTO.prototype, "toUser", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreateMessageDTO.prototype, "content", void 0);
exports.CreateMessageDTO = CreateMessageDTO;
class UpdateMessageDTO extends mapped_types_1.PartialType(CreateMessageDTO) {
}
__decorate([
    class_validator_1.IsNumber(),
    __metadata("design:type", Number)
], UpdateMessageDTO.prototype, "id", void 0);
exports.UpdateMessageDTO = UpdateMessageDTO;
class ViewMessageDTO {
}
__decorate([
    class_validator_1.IsNumber(),
    __metadata("design:type", Number)
], ViewMessageDTO.prototype, "userId", void 0);
__decorate([
    class_validator_1.IsNumber(),
    __metadata("design:type", Number)
], ViewMessageDTO.prototype, "messageId", void 0);
exports.ViewMessageDTO = ViewMessageDTO;
class ViewAllMessageDTO {
}
__decorate([
    class_validator_1.IsNumber(),
    __metadata("design:type", Number)
], ViewAllMessageDTO.prototype, "userId", void 0);
exports.ViewAllMessageDTO = ViewAllMessageDTO;
class DeleteMessageDTO {
}
__decorate([
    class_validator_1.IsNumber(),
    __metadata("design:type", Number)
], DeleteMessageDTO.prototype, "userId", void 0);
__decorate([
    class_validator_1.IsNumber(),
    __metadata("design:type", Number)
], DeleteMessageDTO.prototype, "messageId", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], DeleteMessageDTO.prototype, "action", void 0);
exports.DeleteMessageDTO = DeleteMessageDTO;
class DeleteAllMessageDTO {
}
__decorate([
    class_validator_1.IsNumber(),
    __metadata("design:type", Number)
], DeleteAllMessageDTO.prototype, "userId", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], DeleteAllMessageDTO.prototype, "action", void 0);
exports.DeleteAllMessageDTO = DeleteAllMessageDTO;
//# sourceMappingURL=message.dto.js.map