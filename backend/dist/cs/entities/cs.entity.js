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
exports.Cs = void 0;
const typeorm_1 = require("typeorm");
let Cs = class Cs {
    setCreateDate() {
        this.createdAt = new Date();
    }
};
__decorate([
    typeorm_1.BeforeInsert(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Cs.prototype, "setCreateDate", null);
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Cs.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ length: 255 }),
    __metadata("design:type", String)
], Cs.prototype, "userId", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Cs.prototype, "question", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Cs.prototype, "answer", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Boolean)
], Cs.prototype, "status", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], Cs.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.UpdateDateColumn(),
    __metadata("design:type", Date)
], Cs.prototype, "updatedAt", void 0);
Cs = __decorate([
    typeorm_1.Entity()
], Cs);
exports.Cs = Cs;
//# sourceMappingURL=cs.entity.js.map