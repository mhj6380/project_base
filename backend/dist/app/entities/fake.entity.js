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
exports.FakeComment = void 0;
const globalFuntion_1 = require("../../globalFuntion");
const typeorm_1 = require("typeorm");
let FakeComment = class FakeComment {
    setCreateDate() {
        this.createdAt = new Date();
    }
};
__decorate([
    typeorm_1.BeforeInsert(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FakeComment.prototype, "setCreateDate", null);
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], FakeComment.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], FakeComment.prototype, "uuid", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], FakeComment.prototype, "inserted", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], FakeComment.prototype, "content", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], FakeComment.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.UpdateDateColumn(),
    __metadata("design:type", Date)
], FakeComment.prototype, "updatedAt", void 0);
FakeComment = __decorate([
    typeorm_1.Entity("fake_comment")
], FakeComment);
exports.FakeComment = FakeComment;
//# sourceMappingURL=fake.entity.js.map