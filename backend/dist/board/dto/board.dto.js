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
exports.UpdateBoardDTO = exports.CreateBoardDTO = void 0;
const class_validator_1 = require("class-validator");
const mapped_types_1 = require("@nestjs/mapped-types");
class CreateBoardDTO {
}
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreateBoardDTO.prototype, "title", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreateBoardDTO.prototype, "defaultTemplateKey", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreateBoardDTO.prototype, "defaultWrapperKey", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreateBoardDTO.prototype, "morePageWrapperKey", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreateBoardDTO.prototype, "commentTemplateKey", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreateBoardDTO.prototype, "commentWrapperKey", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreateBoardDTO.prototype, "boardType", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], CreateBoardDTO.prototype, "topic", void 0);
__decorate([
    class_validator_1.IsInt(),
    __metadata("design:type", Number)
], CreateBoardDTO.prototype, "permLvWrite", void 0);
__decorate([
    class_validator_1.IsInt(),
    __metadata("design:type", Number)
], CreateBoardDTO.prototype, "permLvWriteComment", void 0);
__decorate([
    class_validator_1.IsInt(),
    __metadata("design:type", Number)
], CreateBoardDTO.prototype, "permLvViewContentList", void 0);
__decorate([
    class_validator_1.IsInt(),
    __metadata("design:type", Number)
], CreateBoardDTO.prototype, "permLvViewContent", void 0);
__decorate([
    class_validator_1.IsInt(),
    __metadata("design:type", Number)
], CreateBoardDTO.prototype, "permLvViewComment", void 0);
exports.CreateBoardDTO = CreateBoardDTO;
class UpdateBoardDTO extends mapped_types_1.PartialType(CreateBoardDTO) {
}
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], UpdateBoardDTO.prototype, "boardKey", void 0);
exports.UpdateBoardDTO = UpdateBoardDTO;
//# sourceMappingURL=board.dto.js.map