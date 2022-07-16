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
exports.CreateBoardContentDTO = void 0;
const class_validator_1 = require("class-validator");
class CreateBoardContentDTO {
}
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreateBoardContentDTO.prototype, "contentKey", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreateBoardContentDTO.prototype, "boardKey", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreateBoardContentDTO.prototype, "title", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], CreateBoardContentDTO.prototype, "subTitle", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], CreateBoardContentDTO.prototype, "webUrl", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreateBoardContentDTO.prototype, "content", void 0);
__decorate([
    class_validator_1.IsNumber(),
    class_validator_1.IsOptional(),
    __metadata("design:type", Number)
], CreateBoardContentDTO.prototype, "author", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], CreateBoardContentDTO.prototype, "thumbnail", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], CreateBoardContentDTO.prototype, "tags", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreateBoardContentDTO.prototype, "contentType", void 0);
__decorate([
    class_validator_1.IsBoolean(),
    __metadata("design:type", Boolean)
], CreateBoardContentDTO.prototype, "blockPremium", void 0);
__decorate([
    class_validator_1.IsBoolean(),
    __metadata("design:type", Boolean)
], CreateBoardContentDTO.prototype, "isPremium", void 0);
__decorate([
    class_validator_1.IsInt(),
    __metadata("design:type", Number)
], CreateBoardContentDTO.prototype, "visibleLevel", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], CreateBoardContentDTO.prototype, "reservedAt", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreateBoardContentDTO.prototype, "wrapperKey", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], CreateBoardContentDTO.prototype, "templateKey", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], CreateBoardContentDTO.prototype, "imageList", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], CreateBoardContentDTO.prototype, "youtubeUrl", void 0);
__decorate([
    class_validator_1.IsNumber(),
    __metadata("design:type", Number)
], CreateBoardContentDTO.prototype, "publicType", void 0);
exports.CreateBoardContentDTO = CreateBoardContentDTO;
const hakgu = {
    name: "hakgu",
};
//# sourceMappingURL=create-board.dto.js.map