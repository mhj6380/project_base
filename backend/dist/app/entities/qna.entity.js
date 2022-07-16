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
exports.Qna = void 0;
const globalFuntion_1 = require("../../globalFuntion");
const typeorm_1 = require("typeorm");
let Qna = class Qna {
    setCreateDate() {
        this.createdAt = new Date();
    }
};
__decorate([
    typeorm_1.BeforeInsert(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Qna.prototype, "setCreateDate", null);
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Qna.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ length: 255 }),
    __metadata("design:type", String)
], Qna.prototype, "title", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Qna.prototype, "content", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Qna.prototype, "viewCount", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Qna.prototype, "topic", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], Qna.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.UpdateDateColumn(),
    __metadata("design:type", Date)
], Qna.prototype, "updatedAt", void 0);
Qna = __decorate([
    typeorm_1.Entity()
], Qna);
exports.Qna = Qna;
//# sourceMappingURL=qna.entity.js.map