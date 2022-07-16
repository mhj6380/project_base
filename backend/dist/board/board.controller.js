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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoardController = void 0;
const common_1 = require("@nestjs/common");
const board_service_1 = require("./board.service");
const create_board_dto_1 = require("./dto/create-board.dto");
const update_board_dto_1 = require("./dto/update-board.dto");
const comment_dto_1 = require("./dto/comment.dto");
const like_dto_1 = require("./dto/like.dto");
const scrap_dto_1 = require("./dto/scrap.dto");
const response_interface_1 = require("../interface/response.interface");
const board_dto_1 = require("./dto/board.dto");
let BoardController = class BoardController {
    constructor(boardService) {
        this.boardService = boardService;
    }
    getFeedList(page, limit) {
        return this.boardService.getFeedList(page, limit);
    }
    getPersnalFeedList(userId, page, limit) {
        return this.boardService.getPersnalFeedList(userId, page, limit);
    }
    getBoardInitList(req) {
        const pkgname = req.headers.pkgname;
        return this.boardService.getBoardInitList(pkgname);
    }
    createBoardContent(boardData, req) {
        return this.boardService.createBoardContent(boardData);
    }
    getOneBoardContent(contentKey) {
        return this.boardService.getOneBoardContent(contentKey);
    }
    getBoardGroup(topic, page, limit, req) {
        return this.boardService.getBoardGroup(topic, page, limit);
    }
    createBoard(body, req) {
        return this.boardService.createBoard(body);
    }
    updateBoard(boardData) {
        return this.boardService.updateBoard(boardData);
    }
    updateBoardContent(boardData) {
        return this.boardService.updateBoardContent(boardData);
    }
    createComment(boardData, req) {
        const pkgname = req.headers.pkgname;
        return this.boardService.createComment(boardData, pkgname);
    }
    updateComment(body) {
        return this.boardService.updateComment(body);
    }
    deleteComment(commentKey) {
        return this.boardService.deleteComment(commentKey);
    }
    getComments(contentKey) {
        return this.boardService.getComments(contentKey);
    }
    getCommentChildrens(commentKey) {
        return this.boardService.getCommentChildrens(commentKey);
    }
    getBoardList(boardKey, page, limit, sort, orderBy, showReserve, req) {
        const pkgname = req.headers.pkgname;
        return this.boardService.getBoardList(boardKey, page, limit, pkgname, sort, orderBy, showReserve);
    }
    getBoardContentSearchList(searchText, boardKey, page, limit, sort, orderBy, showReserve, req) {
        const pkgname = req.headers.pkgname;
        return this.boardService.getBoardList(boardKey, page, limit, pkgname, sort, orderBy, showReserve, searchText);
    }
    incrementViewCount(bo_id) {
        return this.boardService.incrementViewCount(bo_id);
    }
    actionLike(likeData) {
        return this.boardService.actionLike(likeData);
    }
    likeComment(likeData) {
        return this.boardService.likeComment(likeData);
    }
    actionScrap(scrapData) {
        return this.boardService.actionScrap(scrapData);
    }
    incrementShareCount(bo_id) {
        return this.boardService.incrementShareCount(bo_id);
    }
    getOne(boardKey) {
        return this.boardService.getOneBoard(boardKey);
    }
    deleteBoard(boardKey) {
        return this.boardService.deleteBoard(boardKey);
    }
    deleteBoardContent(contentKey) {
        return this.boardService.deleteBoardContent(contentKey);
    }
};
__decorate([
    common_1.Get("/feed/:page/:limit"),
    __param(0, common_1.Param("page")), __param(1, common_1.Param("limit")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], BoardController.prototype, "getFeedList", null);
__decorate([
    common_1.Get("/feed-personal/:userId/:page/:limit"),
    __param(0, common_1.Param("userId")),
    __param(1, common_1.Param("page")),
    __param(2, common_1.Param("limit")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Number]),
    __metadata("design:returntype", void 0)
], BoardController.prototype, "getPersnalFeedList", null);
__decorate([
    common_1.Get("/init"),
    __param(0, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], BoardController.prototype, "getBoardInitList", null);
__decorate([
    common_1.Post("/content"),
    __param(0, common_1.Body()),
    __param(1, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_board_dto_1.CreateBoardContentDTO, Object]),
    __metadata("design:returntype", Promise)
], BoardController.prototype, "createBoardContent", null);
__decorate([
    common_1.Get("/content/:contentKey"),
    __param(0, common_1.Param("contentKey")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BoardController.prototype, "getOneBoardContent", null);
__decorate([
    common_1.Get("/list/:topic/:page/:limit"),
    __param(0, common_1.Param("topic")),
    __param(1, common_1.Param("page")),
    __param(2, common_1.Param("limit")),
    __param(3, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number, Number, Object]),
    __metadata("design:returntype", Promise)
], BoardController.prototype, "getBoardGroup", null);
__decorate([
    common_1.Post("/"),
    __param(0, common_1.Body()),
    __param(1, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [board_dto_1.CreateBoardDTO, Object]),
    __metadata("design:returntype", Promise)
], BoardController.prototype, "createBoard", null);
__decorate([
    common_1.Put("/"),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], BoardController.prototype, "updateBoard", null);
__decorate([
    common_1.Put("/content"),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_board_dto_1.UpdateBoardContentDTO]),
    __metadata("design:returntype", void 0)
], BoardController.prototype, "updateBoardContent", null);
__decorate([
    common_1.Post("/comment"),
    __param(0, common_1.Body()), __param(1, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [comment_dto_1.CreateCommentDTO, Object]),
    __metadata("design:returntype", void 0)
], BoardController.prototype, "createComment", null);
__decorate([
    common_1.Put("/comment"),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [comment_dto_1.UpdateCommentDTO]),
    __metadata("design:returntype", void 0)
], BoardController.prototype, "updateComment", null);
__decorate([
    common_1.Delete("/comment/:commentKey"),
    __param(0, common_1.Param("commentKey")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BoardController.prototype, "deleteComment", null);
__decorate([
    common_1.Get("/comment/:contentKey"),
    __param(0, common_1.Param("contentKey")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BoardController.prototype, "getComments", null);
__decorate([
    common_1.Get("/comment-childrens/:commentKey"),
    __param(0, common_1.Param("commentKey")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BoardController.prototype, "getCommentChildrens", null);
__decorate([
    common_1.Get("/:boardKey/:page/:limit/:sort/:orderBy/:showReserve"),
    __param(0, common_1.Param("boardKey")),
    __param(1, common_1.Param("page")),
    __param(2, common_1.Param("limit")),
    __param(3, common_1.Param("sort")),
    __param(4, common_1.Param("orderBy")),
    __param(5, common_1.Param("showReserve")),
    __param(6, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number, Number, Number, String, Boolean, Object]),
    __metadata("design:returntype", Promise)
], BoardController.prototype, "getBoardList", null);
__decorate([
    common_1.Get("/search/:searchText/:boardKey/:page/:limit/:sort/:orderBy/:showReserve"),
    __param(0, common_1.Param("searchText")),
    __param(1, common_1.Param("boardKey")),
    __param(2, common_1.Param("page")),
    __param(3, common_1.Param("limit")),
    __param(4, common_1.Param("sort")),
    __param(5, common_1.Param("orderBy")),
    __param(6, common_1.Param("showReserve")),
    __param(7, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Number, Number, Number, String, Boolean, Object]),
    __metadata("design:returntype", Promise)
], BoardController.prototype, "getBoardContentSearchList", null);
__decorate([
    common_1.Patch("/view-increment/:bo_id"),
    __param(0, common_1.Param("bo_id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], BoardController.prototype, "incrementViewCount", null);
__decorate([
    common_1.Post("/like"),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [like_dto_1.CreateLikeDTO]),
    __metadata("design:returntype", Promise)
], BoardController.prototype, "actionLike", null);
__decorate([
    common_1.Post("/comment/like"),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [like_dto_1.CreateCommentLikeDTO]),
    __metadata("design:returntype", Promise)
], BoardController.prototype, "likeComment", null);
__decorate([
    common_1.Post("/scrap"),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [scrap_dto_1.CreateScrapDTO]),
    __metadata("design:returntype", Promise)
], BoardController.prototype, "actionScrap", null);
__decorate([
    common_1.Patch("/share-increment/:bo_id"),
    __param(0, common_1.Param("bo_id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], BoardController.prototype, "incrementShareCount", null);
__decorate([
    common_1.Get("/:boardKey"),
    __param(0, common_1.Param("boardKey")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BoardController.prototype, "getOne", null);
__decorate([
    common_1.Delete("/:boardKey"),
    __param(0, common_1.Param("boardKey")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BoardController.prototype, "deleteBoard", null);
__decorate([
    common_1.Delete("/content/:contentKey"),
    __param(0, common_1.Param("contentKey")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BoardController.prototype, "deleteBoardContent", null);
BoardController = __decorate([
    common_1.Controller("board"),
    __metadata("design:paramtypes", [board_service_1.BoardService])
], BoardController);
exports.BoardController = BoardController;
//# sourceMappingURL=board.controller.js.map