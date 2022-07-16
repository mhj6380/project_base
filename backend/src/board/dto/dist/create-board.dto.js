"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CreateBoardContentDTO = void 0;
var class_validator_1 = require("class-validator");
var CreateBoardContentDTO = /** @class */ (function () {
    function CreateBoardContentDTO() {
    }
    __decorate([
        class_validator_1.IsString()
    ], CreateBoardContentDTO.prototype, "contentKey");
    __decorate([
        class_validator_1.IsString()
    ], CreateBoardContentDTO.prototype, "boardKey");
    __decorate([
        class_validator_1.IsString()
    ], CreateBoardContentDTO.prototype, "title");
    __decorate([
        class_validator_1.IsString(),
        class_validator_1.IsOptional()
    ], CreateBoardContentDTO.prototype, "subTitle");
    __decorate([
        class_validator_1.IsString()
    ], CreateBoardContentDTO.prototype, "content");
    __decorate([
        class_validator_1.IsString(),
        class_validator_1.IsOptional()
    ], CreateBoardContentDTO.prototype, "author");
    __decorate([
        class_validator_1.IsString(),
        class_validator_1.IsOptional()
    ], CreateBoardContentDTO.prototype, "thumbnail");
    __decorate([
        class_validator_1.IsString(),
        class_validator_1.IsOptional()
    ], CreateBoardContentDTO.prototype, "tags");
    __decorate([
        class_validator_1.IsString()
    ], CreateBoardContentDTO.prototype, "contentType");
    __decorate([
        class_validator_1.IsBoolean()
    ], CreateBoardContentDTO.prototype, "blockPremium");
    __decorate([
        class_validator_1.IsBoolean()
    ], CreateBoardContentDTO.prototype, "isPremium");
    __decorate([
        class_validator_1.IsInt()
    ], CreateBoardContentDTO.prototype, "visibleLevel");
    __decorate([
        class_validator_1.IsString(),
        class_validator_1.IsOptional()
    ], CreateBoardContentDTO.prototype, "reservedAt");
    __decorate([
        class_validator_1.IsString()
    ], CreateBoardContentDTO.prototype, "wrapperKey");
    __decorate([
        class_validator_1.IsString()
    ], CreateBoardContentDTO.prototype, "templateKey");
    __decorate([
        class_validator_1.IsString()
    ], CreateBoardContentDTO.prototype, "widgetList");
    return CreateBoardContentDTO;
}());
exports.CreateBoardContentDTO = CreateBoardContentDTO;
var hakgu = {
    name: "hakgu"
};
