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
exports.Message = void 0;
const auth_entity_1 = require("../../auth/entities/auth.entity");
const typeorm_1 = require("typeorm");
let Message = class Message {
    setCreateDate() {
        this.createdAt = new Date();
    }
};
__decorate([
    typeorm_1.BeforeInsert(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Message.prototype, "setCreateDate", null);
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Message.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Message.prototype, "fromUser", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Message.prototype, "toUser", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Message.prototype, "content", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Boolean)
], Message.prototype, "isView", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Boolean)
], Message.prototype, "isFromUserDelete", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Boolean)
], Message.prototype, "isToUserDelete", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], Message.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.OneToOne((type) => auth_entity_1.User),
    typeorm_1.JoinColumn({ name: "fromUser", referencedColumnName: "id" }),
    __metadata("design:type", auth_entity_1.User)
], Message.prototype, "fromUserInfo", void 0);
__decorate([
    typeorm_1.OneToOne((type) => auth_entity_1.User),
    typeorm_1.JoinColumn({ name: "toUser", referencedColumnName: "id" }),
    __metadata("design:type", auth_entity_1.User)
], Message.prototype, "toUserInfo", void 0);
Message = __decorate([
    typeorm_1.Entity("message")
], Message);
exports.Message = Message;
//# sourceMappingURL=message.entity.js.map