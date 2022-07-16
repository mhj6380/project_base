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
exports.RequestJoinGroupDTO = exports.ActionGroupApproveDTO = void 0;
const class_validator_1 = require("class-validator");
class ActionGroupApproveDTO {
}
__decorate([
    class_validator_1.IsNumber(),
    __metadata("design:type", Number)
], ActionGroupApproveDTO.prototype, "userId", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], ActionGroupApproveDTO.prototype, "categoryUid", void 0);
__decorate([
    class_validator_1.IsNumber(),
    __metadata("design:type", Number)
], ActionGroupApproveDTO.prototype, "status", void 0);
exports.ActionGroupApproveDTO = ActionGroupApproveDTO;
class RequestJoinGroupDTO {
}
__decorate([
    class_validator_1.IsNumber(),
    __metadata("design:type", Number)
], RequestJoinGroupDTO.prototype, "userId", void 0);
__decorate([
    class_validator_1.IsNumber(),
    class_validator_1.IsOptional(),
    __metadata("design:type", Number)
], RequestJoinGroupDTO.prototype, "categoryType", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], RequestJoinGroupDTO.prototype, "categoryUid", void 0);
exports.RequestJoinGroupDTO = RequestJoinGroupDTO;
//# sourceMappingURL=action-group-approve.dto.js.map