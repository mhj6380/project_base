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
exports.GroupApprove = void 0;
const typeorm_1 = require("typeorm");
const auth_entity_1 = require("./auth.entity");
let GroupApprove = class GroupApprove {
    setCreateDate() {
        this.createdAt = new Date();
    }
};
__decorate([
    typeorm_1.BeforeInsert(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], GroupApprove.prototype, "setCreateDate", null);
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], GroupApprove.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], GroupApprove.prototype, "userId", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], GroupApprove.prototype, "categoryType", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], GroupApprove.prototype, "categoryUid", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], GroupApprove.prototype, "status", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], GroupApprove.prototype, "approveAt", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], GroupApprove.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.OneToOne((type) => auth_entity_1.User),
    typeorm_1.JoinColumn({ name: "userId", referencedColumnName: "id" }),
    __metadata("design:type", auth_entity_1.User)
], GroupApprove.prototype, "userInfo", void 0);
GroupApprove = __decorate([
    typeorm_1.Entity("group_approve")
], GroupApprove);
exports.GroupApprove = GroupApprove;
//# sourceMappingURL=group.approve.entity.js.map