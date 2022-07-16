"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
exports.BoardController = void 0;
var common_1 = require("@nestjs/common");
var roles_guard_1 = require("src/app/guard/roles.guard");
var BoardController = /** @class */ (function () {
    function BoardController(boardService) {
        this.boardService = boardService;
    }
    BoardController.prototype.getBoardInitList = function (req) {
        var pkgname = req.headers.pkgname;
        return this.boardService.getBoardInitList(pkgname);
    };
    BoardController.prototype.getOneBoardContent = function (contentKey) {
        // const pkgname: any = req.headers.pkgname;
        return this.boardService.getOneBoardContent(contentKey);
    };
    BoardController.prototype.getBoardGroup = function (topic, req) {
        var pkgname = req.headers.pkgname;
        return this.boardService.getBoardGroup(topic, pkgname);
    };
    BoardController.prototype.getTemplateDetail = function (id) {
        return this.boardService.getTemplateDetail(id);
    };
    BoardController.prototype.getTemplateList = function () {
        return this.boardService.getTemplateList();
    };
    BoardController.prototype.createTemplate = function (body) {
        return this.boardService.createTemplate(body);
    };
    BoardController.prototype.createBoard = function (body, req) {
        var pkgname = req.headers.pkgname;
        return this.boardService.createBoard(body, pkgname);
    };
    BoardController.prototype.createBoardContent = function (boardData, req) {
        console.log("CONTENT등록 BODY--");
        console.log(boardData);
        var pkgname = req.headers.pkgname;
        return this.boardService.createBoardContent(boardData, pkgname);
    };
    BoardController.prototype.updateBoard = function (boardData) {
        return this.boardService.updateBoard(boardData);
    };
    BoardController.prototype.updateBoardContent = function (boardData) {
        return this.boardService.updateBoardContent(boardData);
    };
    BoardController.prototype.createComment = function (boardData, req) {
        var pkgname = req.headers.pkgname;
        return this.boardService.createComment(boardData, pkgname);
    };
    BoardController.prototype.updateComment = function (body) {
        return this.boardService.updateComment(body);
    };
    BoardController.prototype.deleteComment = function (commentKey) {
        return this.boardService.deleteComment(commentKey);
    };
    BoardController.prototype.getComments = function (contentKey) {
        return this.boardService.getComments(contentKey);
    };
    BoardController.prototype.getCommentChildrens = function (commentKey) {
        return this.boardService.getCommentChildrens(commentKey);
    };
    BoardController.prototype.getBoardList = function (boardKey, page, limit, sort, orderBy, showReserve, req) {
        var pkgname = req.headers.pkgname;
        return this.boardService.getBoardList(boardKey, page, limit, pkgname, sort, orderBy, showReserve);
    };
    BoardController.prototype.getBoardContentSearchList = function (searchText, boardKey, page, limit, sort, orderBy, showReserve, req) {
        var pkgname = req.headers.pkgname;
        return this.boardService.getBoardList(boardKey, page, limit, pkgname, sort, orderBy, showReserve, searchText);
    };
    BoardController.prototype.incrementViewCount = function (bo_id) {
        return this.boardService.incrementViewCount(bo_id);
    };
    BoardController.prototype.actionLike = function (likeData) {
        return this.boardService.actionLike(likeData);
    };
    BoardController.prototype.likeComment = function (likeData) {
        return this.boardService.likeComment(likeData);
    };
    BoardController.prototype.actionScrap = function (scrapData) {
        return this.boardService.actionScrap(scrapData);
    };
    BoardController.prototype.incrementShareCount = function (bo_id) {
        return this.boardService.incrementShareCount(bo_id);
    };
    BoardController.prototype.getOne = function (boardKey) {
        return this.boardService.getOneBoard(boardKey);
    };
    BoardController.prototype.deleteBoard = function (boardKey) {
        return this.boardService.deleteBoard(boardKey);
    };
    BoardController.prototype.deleteBoardContent = function (contentKey) {
        return this.boardService.deleteBoardContent(contentKey);
    };
    __decorate([
        common_1.Get("/init"),
        __param(0, common_1.Req())
    ], BoardController.prototype, "getBoardInitList");
    __decorate([
        common_1.Get("/content/:contentKey"),
        __param(0, common_1.Param("contentKey"))
    ], BoardController.prototype, "getOneBoardContent");
    __decorate([
        common_1.Get("/list/:topic"),
        __param(0, common_1.Param("topic")),
        __param(1, common_1.Req())
    ], BoardController.prototype, "getBoardGroup");
    __decorate([
        common_1.Get("/template/:id"),
        __param(0, common_1.Param("id"))
    ], BoardController.prototype, "getTemplateDetail");
    __decorate([
        common_1.Get("/template"),
        common_1.UseGuards(roles_guard_1.RolesGuard)
    ], BoardController.prototype, "getTemplateList");
    __decorate([
        common_1.Post("/template"),
        common_1.UseGuards(roles_guard_1.RolesGuard),
        __param(0, common_1.Body())
    ], BoardController.prototype, "createTemplate");
    __decorate([
        common_1.Post("/") // Board  등록
        ,
        common_1.UseGuards(roles_guard_1.RolesGuard),
        __param(0, common_1.Body()),
        __param(1, common_1.Req())
    ], BoardController.prototype, "createBoard");
    __decorate([
        common_1.Post("/content") // Board 게시물 등록
        ,
        common_1.UseGuards(roles_guard_1.RolesGuard),
        __param(0, common_1.Body()),
        __param(1, common_1.Req())
    ], BoardController.prototype, "createBoardContent");
    __decorate([
        common_1.Put("/"),
        __param(0, common_1.Body())
    ], BoardController.prototype, "updateBoard");
    __decorate([
        common_1.Put("/content"),
        __param(0, common_1.Body())
    ], BoardController.prototype, "updateBoardContent");
    __decorate([
        common_1.Post("/comment"),
        common_1.UseGuards(roles_guard_1.RolesGuard),
        __param(0, common_1.Body()), __param(1, common_1.Req())
    ], BoardController.prototype, "createComment");
    __decorate([
        common_1.Put("/comment"),
        __param(0, common_1.Body())
    ], BoardController.prototype, "updateComment");
    __decorate([
        common_1.Delete("/comment/:commentKey"),
        __param(0, common_1.Param("commentKey"))
    ], BoardController.prototype, "deleteComment");
    __decorate([
        common_1.Get("/comment/:contentKey"),
        __param(0, common_1.Param("contentKey"))
    ], BoardController.prototype, "getComments");
    __decorate([
        common_1.Get("/comment-childrens/:commentKey"),
        __param(0, common_1.Param("commentKey"))
    ], BoardController.prototype, "getCommentChildrens");
    __decorate([
        common_1.Get("/:boardKey/:page/:limit/:sort/:orderBy/:showReserve"),
        common_1.UseGuards(roles_guard_1.RolesGuard),
        __param(0, common_1.Param("boardKey")),
        __param(1, common_1.Param("page")),
        __param(2, common_1.Param("limit")),
        __param(3, common_1.Param("sort")),
        __param(4, common_1.Param("orderBy")),
        __param(5, common_1.Param("showReserve")),
        __param(6, common_1.Req())
    ], BoardController.prototype, "getBoardList");
    __decorate([
        common_1.Get("/search/:searchText/:boardKey/:page/:limit/:sort/:orderBy/:showReserve"),
        common_1.UseGuards(roles_guard_1.RolesGuard),
        __param(0, common_1.Param("searchText")),
        __param(1, common_1.Param("boardKey")),
        __param(2, common_1.Param("page")),
        __param(3, common_1.Param("limit")),
        __param(4, common_1.Param("sort")),
        __param(5, common_1.Param("orderBy")),
        __param(6, common_1.Param("showReserve")),
        __param(7, common_1.Req())
    ], BoardController.prototype, "getBoardContentSearchList");
    __decorate([
        common_1.Patch("/view-increment/:bo_id"),
        __param(0, common_1.Param("bo_id"))
    ], BoardController.prototype, "incrementViewCount");
    __decorate([
        common_1.Post("/like"),
        __param(0, common_1.Body())
    ], BoardController.prototype, "actionLike");
    __decorate([
        common_1.Post("/comment/like/:commentKey"),
        __param(0, common_1.Body())
    ], BoardController.prototype, "likeComment");
    __decorate([
        common_1.Post("/scrap"),
        __param(0, common_1.Body())
    ], BoardController.prototype, "actionScrap");
    __decorate([
        common_1.Patch("/share-increment/:bo_id"),
        __param(0, common_1.Param("bo_id"))
    ], BoardController.prototype, "incrementShareCount");
    __decorate([
        common_1.Get("/:boardKey"),
        __param(0, common_1.Param("boardKey"))
    ], BoardController.prototype, "getOne");
    __decorate([
        common_1.Delete("/:boardKey"),
        __param(0, common_1.Param("boardKey"))
    ], BoardController.prototype, "deleteBoard");
    __decorate([
        common_1.Delete("/content/:contentKey"),
        __param(0, common_1.Param("contentKey"))
    ], BoardController.prototype, "deleteBoardContent");
    BoardController = __decorate([
        common_1.Controller("board")
    ], BoardController);
    return BoardController;
}());
exports.BoardController = BoardController;
