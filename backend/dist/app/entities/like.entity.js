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
exports.LikeUser = exports.Like = exports.LikeSoundMix = void 0;
const globalFuntion_1 = require("../../globalFuntion");
const typeorm_1 = require("typeorm");
let LikeSoundMix = class LikeSoundMix {
    setCreateDate() {
        this.createdAt = new Date();
    }
};
__decorate([
    typeorm_1.BeforeInsert(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], LikeSoundMix.prototype, "setCreateDate", null);
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], LikeSoundMix.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ length: 255 }),
    __metadata("design:type", String)
], LikeSoundMix.prototype, "userId", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], LikeSoundMix.prototype, "parentId", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], LikeSoundMix.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.UpdateDateColumn(),
    __metadata("design:type", Date)
], LikeSoundMix.prototype, "updatedAt", void 0);
LikeSoundMix = __decorate([
    typeorm_1.Entity()
], LikeSoundMix);
exports.LikeSoundMix = LikeSoundMix;
let Like = class Like {
    setCreateDate() {
        this.createdAt = new Date();
    }
};
__decorate([
    typeorm_1.BeforeInsert(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Like.prototype, "setCreateDate", null);
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Like.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ length: 255 }),
    __metadata("design:type", String)
], Like.prototype, "userId", void 0);
__decorate([
    typeorm_1.Column({ length: 255 }),
    __metadata("design:type", String)
], Like.prototype, "topic", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Like.prototype, "parentId", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], Like.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.UpdateDateColumn(),
    __metadata("design:type", Date)
], Like.prototype, "updatedAt", void 0);
Like = __decorate([
    typeorm_1.Entity("likes")
], Like);
exports.Like = Like;
let LikeUser = class LikeUser {
    setCreateDate() {
        this.createdAt = new Date();
    }
};
__decorate([
    typeorm_1.BeforeInsert(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], LikeUser.prototype, "setCreateDate", null);
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], LikeUser.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ length: 255 }),
    __metadata("design:type", String)
], LikeUser.prototype, "fromUser", void 0);
__decorate([
    typeorm_1.Column({ length: 255 }),
    __metadata("design:type", String)
], LikeUser.prototype, "toUser", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], LikeUser.prototype, "createdAt", void 0);
LikeUser = __decorate([
    typeorm_1.Entity()
], LikeUser);
exports.LikeUser = LikeUser;
//# sourceMappingURL=like.entity.js.map