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
exports.Friendship = exports.FriendshipRequest = void 0;
const auth_entity_1 = require("../../auth/entities/auth.entity");
const typeorm_1 = require("typeorm");
let FriendshipRequest = class FriendshipRequest {
    setCreateDate() {
        this.createdAt = new Date();
    }
};
__decorate([
    typeorm_1.BeforeInsert(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FriendshipRequest.prototype, "setCreateDate", null);
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], FriendshipRequest.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], FriendshipRequest.prototype, "fromUser", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], FriendshipRequest.prototype, "toUser", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], FriendshipRequest.prototype, "status", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], FriendshipRequest.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.OneToOne((type) => auth_entity_1.User),
    typeorm_1.JoinColumn({ name: "fromUser", referencedColumnName: "id" }),
    __metadata("design:type", auth_entity_1.User)
], FriendshipRequest.prototype, "fromUserInfo", void 0);
__decorate([
    typeorm_1.OneToOne((type) => auth_entity_1.User),
    typeorm_1.JoinColumn({ name: "toUser", referencedColumnName: "id" }),
    __metadata("design:type", auth_entity_1.User)
], FriendshipRequest.prototype, "toUserInfo", void 0);
FriendshipRequest = __decorate([
    typeorm_1.Entity("firendship_request")
], FriendshipRequest);
exports.FriendshipRequest = FriendshipRequest;
let Friendship = class Friendship {
    setCreateDate() {
        this.createdAt = new Date();
    }
};
__decorate([
    typeorm_1.BeforeInsert(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Friendship.prototype, "setCreateDate", null);
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Friendship.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Friendship.prototype, "userId", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Friendship.prototype, "firendUserId", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], Friendship.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.OneToOne((type) => auth_entity_1.User),
    typeorm_1.JoinColumn({ name: "firendUserId", referencedColumnName: "id" }),
    __metadata("design:type", auth_entity_1.User)
], Friendship.prototype, "friendInfo", void 0);
Friendship = __decorate([
    typeorm_1.Entity("firendship")
], Friendship);
exports.Friendship = Friendship;
//# sourceMappingURL=friendship.entity.js.map