"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Scrap = exports.Like = exports.Comment = exports.BoardContent = exports.Board = void 0;
var typeorm_1 = require("typeorm");
var auth_entity_1 = require("../../auth/entities/auth.entity");
var uuid = require("uuid");
var Board = /** @class */ (function () {
    function Board() {
    }
    Board.prototype.setCreateDate = function () {
        this.createdAt = new Date();
        this.boardKey = uuid.v4();
    };
    __decorate([
        typeorm_1.BeforeInsert()
    ], Board.prototype, "setCreateDate");
    __decorate([
        typeorm_1.PrimaryGeneratedColumn()
    ], Board.prototype, "id");
    __decorate([
        typeorm_1.Column()
    ], Board.prototype, "appKey");
    __decorate([
        typeorm_1.Column({ length: 200 })
    ], Board.prototype, "boardKey");
    __decorate([
        typeorm_1.Column({ length: 100 })
    ], Board.prototype, "boardType");
    __decorate([
        typeorm_1.Column({ length: 100 })
    ], Board.prototype, "topic");
    __decorate([
        typeorm_1.Column({ length: 255 })
    ], Board.prototype, "title");
    __decorate([
        typeorm_1.Column()
    ], Board.prototype, "defaultTemplateKey");
    __decorate([
        typeorm_1.Column()
    ], Board.prototype, "defaultWrapperKey");
    __decorate([
        typeorm_1.Column()
    ], Board.prototype, "morePageWrapperKey");
    __decorate([
        typeorm_1.Column()
    ], Board.prototype, "commentTemplateKey");
    __decorate([
        typeorm_1.Column()
    ], Board.prototype, "commentWrapperKey");
    __decorate([
        typeorm_1.Column()
    ], Board.prototype, "permLvWrite");
    __decorate([
        typeorm_1.Column()
    ], Board.prototype, "permLvWriteComment");
    __decorate([
        typeorm_1.Column()
    ], Board.prototype, "permLvViewContentList");
    __decorate([
        typeorm_1.Column()
    ], Board.prototype, "permLvViewContent");
    __decorate([
        typeorm_1.Column()
    ], Board.prototype, "permLvViewComment");
    __decorate([
        typeorm_1.Column()
    ], Board.prototype, "contentCount");
    __decorate([
        typeorm_1.Column()
    ], Board.prototype, "createdAt");
    __decorate([
        typeorm_1.UpdateDateColumn()
    ], Board.prototype, "updatedAt");
    Board = __decorate([
        typeorm_1.Entity("board")
    ], Board);
    return Board;
}());
exports.Board = Board;
var BoardContent = /** @class */ (function () {
    function BoardContent() {
    }
    BoardContent.prototype.setCreateDate = function () {
        this.createdAt = new Date();
    };
    __decorate([
        typeorm_1.BeforeInsert()
    ], BoardContent.prototype, "setCreateDate");
    __decorate([
        typeorm_1.Column()
    ], BoardContent.prototype, "id");
    __decorate([
        typeorm_1.Column()
    ], BoardContent.prototype, "appKey");
    __decorate([
        typeorm_1.Column({ length: 255 })
    ], BoardContent.prototype, "boardKey");
    __decorate([
        typeorm_1.PrimaryGeneratedColumn()
    ], BoardContent.prototype, "contentKey");
    __decorate([
        typeorm_1.Column({ length: 255 })
    ], BoardContent.prototype, "wrapperKey");
    __decorate([
        typeorm_1.Column({ length: 255 })
    ], BoardContent.prototype, "templateKey");
    __decorate([
        typeorm_1.Column({ length: 255 })
    ], BoardContent.prototype, "topic");
    __decorate([
        typeorm_1.Column({ length: 200 })
    ], BoardContent.prototype, "title");
    __decorate([
        typeorm_1.Column({ length: 200 })
    ], BoardContent.prototype, "subTitle");
    __decorate([
        typeorm_1.Column()
    ], BoardContent.prototype, "content");
    __decorate([
        typeorm_1.Column()
    ], BoardContent.prototype, "author");
    __decorate([
        typeorm_1.Column({ length: 200 })
    ], BoardContent.prototype, "thumbnail");
    __decorate([
        typeorm_1.Column({ length: 100, nullable: false })
    ], BoardContent.prototype, "tags");
    __decorate([
        typeorm_1.Column()
    ], BoardContent.prototype, "blockPremium");
    __decorate([
        typeorm_1.Column()
    ], BoardContent.prototype, "isPremium");
    __decorate([
        typeorm_1.Column()
    ], BoardContent.prototype, "visibleLevel");
    __decorate([
        typeorm_1.Column()
    ], BoardContent.prototype, "likeCount");
    __decorate([
        typeorm_1.Column()
    ], BoardContent.prototype, "scrapCount");
    __decorate([
        typeorm_1.Column()
    ], BoardContent.prototype, "shareCount");
    __decorate([
        typeorm_1.Column()
    ], BoardContent.prototype, "viewCount");
    __decorate([
        typeorm_1.Column()
    ], BoardContent.prototype, "commentCount");
    __decorate([
        typeorm_1.Column()
    ], BoardContent.prototype, "contentType");
    __decorate([
        typeorm_1.Column()
    ], BoardContent.prototype, "widgetInfo");
    __decorate([
        typeorm_1.Column()
    ], BoardContent.prototype, "createdAt");
    __decorate([
        typeorm_1.Column()
    ], BoardContent.prototype, "reservedAt");
    __decorate([
        typeorm_1.UpdateDateColumn()
    ], BoardContent.prototype, "updatedAt");
    __decorate([
        typeorm_1.JoinColumn({ name: "comments" }),
        typeorm_1.OneToMany(function (type) { return Comment; }, function (comment) { return comment.board; })
    ], BoardContent.prototype, "comments");
    __decorate([
        typeorm_1.OneToOne(function (type) { return auth_entity_1.User; }),
        typeorm_1.JoinColumn({ name: "author", referencedColumnName: "userId" })
    ], BoardContent.prototype, "authorInfo");
    BoardContent = __decorate([
        typeorm_1.Entity("board_content")
    ], BoardContent);
    return BoardContent;
}());
exports.BoardContent = BoardContent;
var Comment = /** @class */ (function () {
    function Comment() {
    }
    Comment.prototype.setCreateDate = function () {
        this.createdAt = new Date();
        this.commentKey = uuid.v4();
    };
    __decorate([
        typeorm_1.BeforeInsert()
    ], Comment.prototype, "setCreateDate");
    __decorate([
        typeorm_1.Column()
    ], Comment.prototype, "id");
    __decorate([
        typeorm_1.Column()
    ], Comment.prototype, "appKey");
    __decorate([
        typeorm_1.Column()
    ], Comment.prototype, "boardKey");
    __decorate([
        typeorm_1.Column()
    ], Comment.prototype, "contentKey");
    __decorate([
        typeorm_1.PrimaryGeneratedColumn()
    ], Comment.prototype, "commentKey");
    __decorate([
        typeorm_1.Column({ length: 1000 })
    ], Comment.prototype, "content");
    __decorate([
        typeorm_1.Column({ length: 200 })
    ], Comment.prototype, "author");
    __decorate([
        typeorm_1.Column({ length: 200 })
    ], Comment.prototype, "topic");
    __decorate([
        typeorm_1.Column()
    ], Comment.prototype, "likeCount");
    __decorate([
        typeorm_1.Column()
    ], Comment.prototype, "createdAt");
    __decorate([
        typeorm_1.UpdateDateColumn()
    ], Comment.prototype, "updatedAt");
    __decorate([
        typeorm_1.Column()
    ], Comment.prototype, "isChildren");
    __decorate([
        typeorm_1.Column()
    ], Comment.prototype, "childCount");
    __decorate([
        typeorm_1.Column()
    ], Comment.prototype, "parentCommentKey");
    __decorate([
        typeorm_1.Column()
    ], Comment.prototype, "imageUrl");
    __decorate([
        typeorm_1.Column()
    ], Comment.prototype, "mp3Url");
    __decorate([
        typeorm_1.Column()
    ], Comment.prototype, "youtubeUrl");
    __decorate([
        typeorm_1.Column()
    ], Comment.prototype, "webUrl");
    __decorate([
        typeorm_1.ManyToOne(function (type) { return BoardContent; }, function (boardContent) { return boardContent.comments; }),
        typeorm_1.JoinColumn({ name: "boardKey" })
    ], Comment.prototype, "board");
    __decorate([
        typeorm_1.OneToOne(function (type) { return auth_entity_1.User; }),
        typeorm_1.JoinColumn({ name: "author", referencedColumnName: "userId" })
    ], Comment.prototype, "authorInfo");
    __decorate([
        typeorm_1.TreeChildren()
    ], Comment.prototype, "children");
    __decorate([
        typeorm_1.TreeParent()
    ], Comment.prototype, "parent");
    Comment = __decorate([
        typeorm_1.Entity("board_content_comment"),
        typeorm_1.Tree("materialized-path")
    ], Comment);
    return Comment;
}());
exports.Comment = Comment;
var Like = /** @class */ (function () {
    function Like() {
    }
    Like.prototype.setCreateDate = function () {
        this.createdAt = new Date();
    };
    __decorate([
        typeorm_1.BeforeInsert()
    ], Like.prototype, "setCreateDate");
    __decorate([
        typeorm_1.PrimaryGeneratedColumn()
    ], Like.prototype, "id");
    __decorate([
        typeorm_1.Column()
    ], Like.prototype, "userId");
    __decorate([
        typeorm_1.Column()
    ], Like.prototype, "contentKey");
    __decorate([
        typeorm_1.Column()
    ], Like.prototype, "createdAt");
    Like = __decorate([
        typeorm_1.Entity("boardLike")
    ], Like);
    return Like;
}());
exports.Like = Like;
var Scrap = /** @class */ (function () {
    function Scrap() {
    }
    Scrap.prototype.setCreateDate = function () {
        this.createdAt = new Date();
    };
    __decorate([
        typeorm_1.BeforeInsert()
    ], Scrap.prototype, "setCreateDate");
    __decorate([
        typeorm_1.PrimaryGeneratedColumn()
    ], Scrap.prototype, "id");
    __decorate([
        typeorm_1.Column()
    ], Scrap.prototype, "userId");
    __decorate([
        typeorm_1.Column()
    ], Scrap.prototype, "contentKey");
    __decorate([
        typeorm_1.Column()
    ], Scrap.prototype, "createdAt");
    Scrap = __decorate([
        typeorm_1.Entity("boardScrap")
    ], Scrap);
    return Scrap;
}());
exports.Scrap = Scrap;
