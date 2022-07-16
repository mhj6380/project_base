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
exports.UpdateGuestbookCommentDTO = exports.CreateGuestbookCommentDTO = exports.UpdateGuestbookDTO = exports.CreateGuestbookDTO = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const class_validator_1 = require("class-validator");
class CreateGuestbookDTO {
}
__decorate([
    class_validator_1.IsNumber(),
    class_validator_1.IsOptional(),
    __metadata("design:type", Number)
], CreateGuestbookDTO.prototype, "fromUser", void 0);
__decorate([
    class_validator_1.IsNumber(),
    class_validator_1.IsOptional(),
    __metadata("design:type", Number)
], CreateGuestbookDTO.prototype, "toUser", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreateGuestbookDTO.prototype, "content", void 0);
__decorate([
    class_validator_1.IsBoolean(),
    class_validator_1.IsOptional(),
    __metadata("design:type", Boolean)
], CreateGuestbookDTO.prototype, "isPrivate", void 0);
exports.CreateGuestbookDTO = CreateGuestbookDTO;
class UpdateGuestbookDTO extends mapped_types_1.PartialType(CreateGuestbookDTO) {
}
__decorate([
    class_validator_1.IsNumber(),
    __metadata("design:type", Number)
], UpdateGuestbookDTO.prototype, "id", void 0);
exports.UpdateGuestbookDTO = UpdateGuestbookDTO;
class CreateGuestbookCommentDTO {
}
__decorate([
    class_validator_1.IsNumber(),
    __metadata("design:type", Number)
], CreateGuestbookCommentDTO.prototype, "guestbookId", void 0);
__decorate([
    class_validator_1.IsNumber(),
    __metadata("design:type", Number)
], CreateGuestbookCommentDTO.prototype, "userId", void 0);
__decorate([
    class_validator_1.IsNumber(),
    class_validator_1.IsOptional(),
    __metadata("design:type", Number)
], CreateGuestbookCommentDTO.prototype, "parentId", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreateGuestbookCommentDTO.prototype, "content", void 0);
__decorate([
    class_validator_1.IsBoolean(),
    class_validator_1.IsOptional(),
    __metadata("design:type", Boolean)
], CreateGuestbookCommentDTO.prototype, "isChildren", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], CreateGuestbookCommentDTO.prototype, "imageUrl", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], CreateGuestbookCommentDTO.prototype, "mp3Url", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], CreateGuestbookCommentDTO.prototype, "youtubeUrl", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], CreateGuestbookCommentDTO.prototype, "webUrl", void 0);
exports.CreateGuestbookCommentDTO = CreateGuestbookCommentDTO;
class UpdateGuestbookCommentDTO extends mapped_types_1.PartialType(CreateGuestbookCommentDTO) {
}
__decorate([
    class_validator_1.IsNumber(),
    __metadata("design:type", Number)
], UpdateGuestbookCommentDTO.prototype, "id", void 0);
exports.UpdateGuestbookCommentDTO = UpdateGuestbookCommentDTO;
//# sourceMappingURL=guestbook.dto.js.map