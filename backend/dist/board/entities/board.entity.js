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
exports.Scrap = exports.CommentLike = exports.Like = exports.Comment = exports.BoardContent = exports.Board = void 0;
const typeorm_1 = require("typeorm");
const auth_entity_1 = require("../../auth/entities/auth.entity");
const uuid = require("uuid");
let Board = class Board {
    setCreateDate() {
        this.createdAt = new Date();
        this.boardKey = uuid.v4();
    }
};
__decorate([
    typeorm_1.BeforeInsert(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Board.prototype, "setCreateDate", null);
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Board.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Board.prototype, "appKey", void 0);
__decorate([
    typeorm_1.Column({ length: 200 }),
    __metadata("design:type", String)
], Board.prototype, "boardKey", void 0);
__decorate([
    typeorm_1.Column({ length: 100 }),
    __metadata("design:type", String)
], Board.prototype, "boardType", void 0);
__decorate([
    typeorm_1.Column({ length: 100 }),
    __metadata("design:type", String)
], Board.prototype, "topic", void 0);
__decorate([
    typeorm_1.Column({ length: 255 }),
    __metadata("design:type", String)
], Board.prototype, "title", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Board.prototype, "defaultTemplateKey", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Board.prototype, "defaultWrapperKey", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Board.prototype, "morePageWrapperKey", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Board.prototype, "commentTemplateKey", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Board.prototype, "commentWrapperKey", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Board.prototype, "permLvWrite", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Board.prototype, "permLvWriteComment", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Board.prototype, "permLvViewContentList", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Board.prototype, "permLvViewContent", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Board.prototype, "permLvViewComment", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Board.prototype, "contentCount", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], Board.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.UpdateDateColumn(),
    __metadata("design:type", Date)
], Board.prototype, "updatedAt", void 0);
Board = __decorate([
    typeorm_1.Entity("board")
], Board);
exports.Board = Board;
let BoardContent = class BoardContent {
    setCreateDate() {
        this.createdAt = new Date();
    }
};
__decorate([
    typeorm_1.BeforeInsert(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BoardContent.prototype, "setCreateDate", null);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], BoardContent.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ length: 255 }),
    __metadata("design:type", String)
], BoardContent.prototype, "boardKey", void 0);
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", String)
], BoardContent.prototype, "contentKey", void 0);
__decorate([
    typeorm_1.Column({ length: 255 }),
    __metadata("design:type", String)
], BoardContent.prototype, "topic", void 0);
__decorate([
    typeorm_1.Column({ length: 200 }),
    __metadata("design:type", String)
], BoardContent.prototype, "title", void 0);
__decorate([
    typeorm_1.Column({ length: 200 }),
    __metadata("design:type", String)
], BoardContent.prototype, "subTitle", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], BoardContent.prototype, "content", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], BoardContent.prototype, "author", void 0);
__decorate([
    typeorm_1.Column({ length: 200 }),
    __metadata("design:type", String)
], BoardContent.prototype, "thumbnail", void 0);
__decorate([
    typeorm_1.Column({ length: 100, nullable: false }),
    __metadata("design:type", String)
], BoardContent.prototype, "tags", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Boolean)
], BoardContent.prototype, "blockPremium", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Boolean)
], BoardContent.prototype, "isPremium", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], BoardContent.prototype, "visibleLevel", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], BoardContent.prototype, "likeCount", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], BoardContent.prototype, "scrapCount", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], BoardContent.prototype, "shareCount", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], BoardContent.prototype, "viewCount", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], BoardContent.prototype, "commentCount", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], BoardContent.prototype, "publicType", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], BoardContent.prototype, "contentType", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], BoardContent.prototype, "widgetInfo", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], BoardContent.prototype, "youtubeUrl", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], BoardContent.prototype, "webUrl", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], BoardContent.prototype, "imageList", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], BoardContent.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], BoardContent.prototype, "reservedAt", void 0);
__decorate([
    typeorm_1.UpdateDateColumn(),
    __metadata("design:type", Date)
], BoardContent.prototype, "updatedAt", void 0);
__decorate([
    typeorm_1.JoinColumn({ name: "comments" }),
    typeorm_1.OneToMany((type) => Comment, (comment) => comment.board),
    __metadata("design:type", Array)
], BoardContent.prototype, "comments", void 0);
__decorate([
    typeorm_1.OneToOne((type) => auth_entity_1.User),
    typeorm_1.JoinColumn({ name: "author", referencedColumnName: "id" }),
    __metadata("design:type", auth_entity_1.User)
], BoardContent.prototype, "authorInfo", void 0);
BoardContent = __decorate([
    typeorm_1.Entity("board_content")
], BoardContent);
exports.BoardContent = BoardContent;
let Comment = class Comment {
    setCreateDate() {
        this.createdAt = new Date();
        this.commentKey = uuid.v4();
    }
};
__decorate([
    typeorm_1.BeforeInsert(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Comment.prototype, "setCreateDate", null);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Comment.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Comment.prototype, "appKey", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Comment.prototype, "boardKey", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Comment.prototype, "contentKey", void 0);
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", String)
], Comment.prototype, "commentKey", void 0);
__decorate([
    typeorm_1.Column({ length: 1000 }),
    __metadata("design:type", String)
], Comment.prototype, "content", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Comment.prototype, "author", void 0);
__decorate([
    typeorm_1.Column({ length: 200 }),
    __metadata("design:type", String)
], Comment.prototype, "topic", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Comment.prototype, "likeCount", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], Comment.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.UpdateDateColumn(),
    __metadata("design:type", Date)
], Comment.prototype, "updatedAt", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Boolean)
], Comment.prototype, "isChildren", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Comment.prototype, "childCount", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Comment.prototype, "parentCommentKey", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Comment.prototype, "imageUrl", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Comment.prototype, "mp3Url", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Comment.prototype, "youtubeUrl", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Comment.prototype, "webUrl", void 0);
__decorate([
    typeorm_1.ManyToOne((type) => BoardContent, (boardContent) => boardContent.comments),
    typeorm_1.JoinColumn({ name: "boardKey" }),
    __metadata("design:type", BoardContent)
], Comment.prototype, "board", void 0);
__decorate([
    typeorm_1.OneToOne((type) => auth_entity_1.User),
    typeorm_1.JoinColumn({ name: "author", referencedColumnName: "id" }),
    __metadata("design:type", auth_entity_1.User)
], Comment.prototype, "authorInfo", void 0);
__decorate([
    typeorm_1.TreeChildren(),
    __metadata("design:type", Array)
], Comment.prototype, "children", void 0);
__decorate([
    typeorm_1.TreeParent(),
    __metadata("design:type", Comment)
], Comment.prototype, "parent", void 0);
Comment = __decorate([
    typeorm_1.Entity("board_content_comment"),
    typeorm_1.Tree("materialized-path")
], Comment);
exports.Comment = Comment;
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
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Like.prototype, "userId", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Like.prototype, "contentKey", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], Like.prototype, "createdAt", void 0);
Like = __decorate([
    typeorm_1.Entity("boardLike")
], Like);
exports.Like = Like;
let CommentLike = class CommentLike {
    setCreateDate() {
        this.createdAt = new Date();
    }
};
__decorate([
    typeorm_1.BeforeInsert(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CommentLike.prototype, "setCreateDate", null);
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], CommentLike.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], CommentLike.prototype, "userId", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], CommentLike.prototype, "commentKey", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], CommentLike.prototype, "createdAt", void 0);
CommentLike = __decorate([
    typeorm_1.Entity("comment_like")
], CommentLike);
exports.CommentLike = CommentLike;
let Scrap = class Scrap {
    setCreateDate() {
        this.createdAt = new Date();
    }
};
__decorate([
    typeorm_1.BeforeInsert(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Scrap.prototype, "setCreateDate", null);
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Scrap.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Scrap.prototype, "userId", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Scrap.prototype, "contentKey", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], Scrap.prototype, "createdAt", void 0);
Scrap = __decorate([
    typeorm_1.Entity("boardScrap")
], Scrap);
exports.Scrap = Scrap;
//# sourceMappingURL=board.entity.js.map