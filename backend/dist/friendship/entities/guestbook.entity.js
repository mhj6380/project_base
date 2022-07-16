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
exports.GuestbookComment = exports.Guestbook = void 0;
const auth_entity_1 = require("../../auth/entities/auth.entity");
const typeorm_1 = require("typeorm");
let Guestbook = class Guestbook {
    setCreateDate() {
        this.createdAt = new Date();
    }
};
__decorate([
    typeorm_1.BeforeInsert(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Guestbook.prototype, "setCreateDate", null);
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Guestbook.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Guestbook.prototype, "fromUser", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Guestbook.prototype, "toUser", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Guestbook.prototype, "content", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Boolean)
], Guestbook.prototype, "isPrivate", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], Guestbook.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.OneToOne((type) => auth_entity_1.User),
    typeorm_1.JoinColumn({ name: "fromUser", referencedColumnName: "id" }),
    __metadata("design:type", auth_entity_1.User)
], Guestbook.prototype, "fromUserInfo", void 0);
__decorate([
    typeorm_1.OneToOne((type) => auth_entity_1.User),
    typeorm_1.JoinColumn({ name: "toUser", referencedColumnName: "id" }),
    __metadata("design:type", auth_entity_1.User)
], Guestbook.prototype, "toUserInfo", void 0);
Guestbook = __decorate([
    typeorm_1.Entity("guestbook")
], Guestbook);
exports.Guestbook = Guestbook;
let GuestbookComment = class GuestbookComment {
    setCreateDate() {
        this.createdAt = new Date();
    }
};
__decorate([
    typeorm_1.BeforeInsert(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], GuestbookComment.prototype, "setCreateDate", null);
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], GuestbookComment.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], GuestbookComment.prototype, "guestbookId", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], GuestbookComment.prototype, "parentId", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], GuestbookComment.prototype, "userId", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Boolean)
], GuestbookComment.prototype, "isChildren", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], GuestbookComment.prototype, "content", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], GuestbookComment.prototype, "imageUrl", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], GuestbookComment.prototype, "mp3Url", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], GuestbookComment.prototype, "youtubeUrl", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], GuestbookComment.prototype, "webUrl", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], GuestbookComment.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.OneToOne((type) => auth_entity_1.User),
    typeorm_1.JoinColumn({ name: "userId", referencedColumnName: "id" }),
    __metadata("design:type", auth_entity_1.User)
], GuestbookComment.prototype, "userInfo", void 0);
GuestbookComment = __decorate([
    typeorm_1.Entity("guestbook_comment")
], GuestbookComment);
exports.GuestbookComment = GuestbookComment;
//# sourceMappingURL=guestbook.entity.js.map