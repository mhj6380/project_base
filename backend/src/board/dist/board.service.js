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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.BoardService = void 0;
var common_1 = require("@nestjs/common");
var typeorm_1 = require("@nestjs/typeorm");
var board_entity_1 = require("./entities/board.entity");
var template_entity_1 = require("./entities/template.entity");
var widget_entity_1 = require("src/widget/entities/widget.entity");
var dayjs = require("dayjs");
var BoardService = /** @class */ (function () {
    function BoardService(pageWidgetRepository, boardRepository, boardContentRepository, commentRepository, likeRepository, scrapRepository, contentTemplateRepository) {
        this.pageWidgetRepository = pageWidgetRepository;
        this.boardRepository = boardRepository;
        this.boardContentRepository = boardContentRepository;
        this.commentRepository = commentRepository;
        this.likeRepository = likeRepository;
        this.scrapRepository = scrapRepository;
        this.contentTemplateRepository = contentTemplateRepository;
    }
    BoardService.prototype.getOneBoardContent = function (contentKey) {
        return __awaiter(this, void 0, void 0, function () {
            var content, comments;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.boardContentRepository
                            .createQueryBuilder("content")
                            .leftJoinAndSelect("content.authorInfo", "authorInfo")
                            .select([
                            "content.boardKey",
                            "content.contentKey",
                            "content.wrapperKey",
                            "content.templateKey",
                            "content.title",
                            "content.subTitle",
                            "content.thumbnail",
                            "content.tags",
                            "content.visibleLevel",
                            "content.likeCount",
                            "content.scrapCount",
                            "content.shareCount",
                            "content.viewCount",
                            "content.commentCount",
                            "content.createdAt",
                            "content.reservedAt",
                            "content.content",
                            "content.widgetInfo",
                            "content.isPremium",
                            "content.blockPremium",
                            "authorInfo.userId",
                            "authorInfo.profile",
                            "authorInfo.nickname",
                            "authorInfo.username",
                            "authorInfo.level",
                        ])
                            .where("content.contentKey = :contentKey", { contentKey: contentKey })
                            .getOne()];
                    case 1:
                        content = _a.sent();
                        return [4 /*yield*/, this.commentRepository
                                .createQueryBuilder("boardComment")
                                .leftJoinAndSelect("boardComment.authorInfo", "authorInfo")
                                .select([
                                "boardComment.commentKey",
                                "boardComment.content",
                                "boardComment.likeCount",
                                "boardComment.createdAt",
                                "boardComment.isChildren",
                                "boardComment.childCount",
                                "boardComment.imageUrl",
                                "boardComment.mp3Url",
                                "boardComment.youtubeUrl",
                                "boardComment.webUrl",
                                "authorInfo.userId",
                                "authorInfo.profile",
                                "authorInfo.nickname",
                                "authorInfo.username",
                                "authorInfo.level",
                            ])
                                .where("boardComment.contentKey = :contentKey", { contentKey: contentKey })
                                .andWhere("boardComment.isChildren = :isChildren", { isChildren: false })
                                .getMany()];
                    case 2:
                        comments = _a.sent();
                        if (!isJson(content.content))
                            throw new common_1.BadRequestException("content\uAC00 JSON\uD615\uD0DC\uAC00 \uC544\uB2D9\uB2C8\uB2E4. | contentKey: " + content.contentKey);
                        if (!isJson(content.widgetInfo))
                            throw new common_1.BadRequestException("widgetInfo\uAC00 JSON\uD615\uD0DC\uAC00 \uC544\uB2D9\uB2C8\uB2E4. | contentKey: " + content.contentKey);
                        content.content = JSON.parse(content.content);
                        content.widgetInfo = JSON.parse(content.widgetInfo);
                        content.comments = comments;
                        if (!content)
                            throw new common_1.NotFoundException("Not Found Content contentKey: " + contentKey);
                        return [2 /*return*/, content];
                }
            });
        });
    };
    BoardService.prototype.getBoardInitList = function (pkgname) {
        return __awaiter(this, void 0, void 0, function () {
            var boards, targetBoards, functionWithPromise, anAsyncFunction, getData;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        boards = [];
                        return [4 /*yield*/, this.boardRepository.find({ appKey: pkgname })];
                    case 1:
                        targetBoards = _a.sent();
                        functionWithPromise = function (item) {
                            //a function that returns a promise
                            return Promise.resolve("ok");
                        };
                        anAsyncFunction = function (item) { return __awaiter(_this, void 0, void 0, function () {
                            var _a, _b;
                            return __generator(this, function (_c) {
                                switch (_c.label) {
                                    case 0:
                                        _b = (_a = boards).push;
                                        return [4 /*yield*/, this.getBoardList(item.boardKey, 1, 10, pkgname, 1, "DESC", true)];
                                    case 1:
                                        _b.apply(_a, [_c.sent()]);
                                        return [2 /*return*/, functionWithPromise(item)];
                                }
                            });
                        }); };
                        getData = function () { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                return [2 /*return*/, Promise.all(targetBoards.map(function (item) { return anAsyncFunction(item); }))];
                            });
                        }); };
                        return [4 /*yield*/, getData()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, boards];
                }
            });
        });
    };
    BoardService.prototype.getBoardGroup = function (topic, pkgname) {
        return __awaiter(this, void 0, Promise, function () {
            var templates;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(topic === "all")) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.boardRepository
                                .createQueryBuilder()
                                .where("appKey=:pkgname", { pkgname: pkgname })
                                .orderBy("createdAt", "DESC")
                                .getMany()];
                    case 1:
                        templates = _a.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.boardRepository
                            .createQueryBuilder()
                            .where("topic = :topic", { topic: topic })
                            .andWhere("appKey=:pkgname", { pkgname: pkgname })
                            .orderBy("createdAt", "DESC")
                            .getMany()];
                    case 3:
                        templates = _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/, templates];
                }
            });
        });
    };
    BoardService.prototype.getComments = function (contentKey) {
        return __awaiter(this, void 0, Promise, function () {
            var comments;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.commentRepository
                            .createQueryBuilder("boardComment")
                            .leftJoinAndSelect("boardComment.authorInfo", "authorInfo")
                            .select([
                            "boardComment.commentKey",
                            "boardComment.content",
                            "boardComment.likeCount",
                            "boardComment.createdAt",
                            "boardComment.isChildren",
                            "boardComment.childCount",
                            "boardComment.imageUrl",
                            "boardComment.mp3Url",
                            "boardComment.youtubeUrl",
                            "boardComment.webUrl",
                            "authorInfo.userId",
                            "authorInfo.profile",
                            "authorInfo.nickname",
                            "authorInfo.username",
                            "authorInfo.level",
                        ])
                            .where("boardComment.contentKey = :contentKey", {
                            contentKey: contentKey
                        })
                            .andWhere("boardComment.isChildren = :isChildren", { isChildren: false })
                            .getMany()];
                    case 1:
                        comments = _a.sent();
                        return [2 /*return*/, comments];
                }
            });
        });
    };
    BoardService.prototype.getCommentChildrens = function (parentCommentKey) {
        return __awaiter(this, void 0, Promise, function () {
            var comments;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.commentRepository
                            .createQueryBuilder("boardComment")
                            .leftJoinAndSelect("boardComment.authorInfo", "authorInfo")
                            .select([
                            "boardComment.commentKey",
                            "boardComment.content",
                            "boardComment.likeCount",
                            "boardComment.createdAt",
                            "boardComment.isChildren",
                            "boardComment.childCount",
                            "boardComment.imageUrl",
                            "boardComment.mp3Url",
                            "boardComment.youtubeUrl",
                            "boardComment.webUrl",
                            "authorInfo.userId",
                            "authorInfo.profile",
                            "authorInfo.nickname",
                            "authorInfo.username",
                            "authorInfo.level",
                        ])
                            .where("boardComment.parentCommentKey = :parentCommentKey", {
                            parentCommentKey: parentCommentKey
                        })
                            .andWhere("boardComment.isChildren = :isChildren", { isChildren: true })
                            .getMany()];
                    case 1:
                        comments = _a.sent();
                        return [2 /*return*/, comments];
                }
            });
        });
    };
    BoardService.prototype.getTemplateDetail = function (id) {
        return __awaiter(this, void 0, Promise, function () {
            var templates;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.contentTemplateRepository.findOne({ id: id })];
                    case 1:
                        templates = _a.sent();
                        return [2 /*return*/, templates];
                }
            });
        });
    };
    BoardService.prototype.getTemplateList = function () {
        return __awaiter(this, void 0, Promise, function () {
            var templates;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.contentTemplateRepository.find()];
                    case 1:
                        templates = _a.sent();
                        return [2 /*return*/, templates];
                }
            });
        });
    };
    BoardService.prototype.createTemplate = function (body) {
        return __awaiter(this, void 0, Promise, function () {
            var template;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        template = new template_entity_1.ContentTemplate();
                        template.title = body.title;
                        template.json = body.json;
                        return [4 /*yield*/, this.contentTemplateRepository.save(template)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, template];
                }
            });
        });
    };
    BoardService.prototype.createBoard = function (boardData, pkgname) {
        return __awaiter(this, void 0, Promise, function () {
            var board;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        board = new board_entity_1.Board();
                        board.appKey = pkgname;
                        board.title = boardData.title;
                        board.boardType = boardData.boardType;
                        board.topic = boardData.topic;
                        board.defaultTemplateKey = boardData.defaultTemplateKey;
                        board.defaultWrapperKey = boardData.defaultWrapperKey;
                        board.morePageWrapperKey = boardData.morePageWrapperKey;
                        board.commentTemplateKey = boardData.commentTemplateKey;
                        board.commentWrapperKey = boardData.commentWrapperKey;
                        board.permLvWrite = boardData.permLvWrite;
                        board.permLvWriteComment = boardData.permLvWriteComment;
                        board.permLvViewContentList = boardData.permLvViewContentList;
                        board.permLvViewContent = boardData.permLvViewContent;
                        board.permLvViewComment = boardData.permLvViewComment;
                        return [4 /*yield*/, this.boardRepository.save(board)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, board];
                }
            });
        });
    };
    BoardService.prototype.createBoardContent = function (body, pkgname) {
        return __awaiter(this, void 0, Promise, function () {
            var widgetList, editMode, currentContent, functionWithPromise, anAsyncFunction, getData, boardContent;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        widgetList = body.widgetList;
                        if (!isJson(widgetList)) {
                            throw new common_1.BadRequestException("widgetList가 JSON String 형태가 아닙니다.");
                        }
                        return [4 /*yield*/, this.boardContentRepository.findOne({
                                contentKey: body.contentKey
                            })];
                    case 1:
                        currentContent = _a.sent();
                        if (currentContent) {
                            editMode = true;
                        }
                        functionWithPromise = function (item) {
                            return Promise.resolve(item);
                        };
                        anAsyncFunction = function (item) { return __awaiter(_this, void 0, void 0, function () {
                            var pageWidget;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        pageWidget = new widget_entity_1.PageWidget();
                                        pageWidget.appKey = pkgname;
                                        pageWidget.widgetType = item.widgetType;
                                        pageWidget.widgetKey = item.widgetKey;
                                        pageWidget.widgetInfo = JSON.stringify(item);
                                        return [4 /*yield*/, this.pageWidgetRepository.save(pageWidget)];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/, functionWithPromise(item)];
                                }
                            });
                        }); };
                        getData = function () { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                return [2 /*return*/, Promise.all(JSON.parse(widgetList).map(function (item) { return anAsyncFunction(item); }))];
                            });
                        }); };
                        return [4 /*yield*/, getData()];
                    case 2:
                        _a.sent();
                        boardContent = new board_entity_1.BoardContent();
                        boardContent.appKey = pkgname;
                        boardContent.boardKey = body.boardKey;
                        boardContent.contentKey = body.contentKey;
                        boardContent.wrapperKey = body.wrapperKey;
                        boardContent.templateKey = body.templateKey;
                        boardContent.title = body.title;
                        boardContent.subTitle = body.subTitle;
                        boardContent.content = body.content;
                        boardContent.author = body.author;
                        boardContent.tags = body.tags;
                        boardContent.isPremium = body.isPremium;
                        boardContent.blockPremium = body.blockPremium;
                        boardContent.visibleLevel = body.visibleLevel;
                        boardContent.thumbnail = body.thumbnail;
                        boardContent.contentType = body.contentType;
                        boardContent.widgetInfo = widgetList;
                        boardContent.reservedAt = body.reservedAt
                            ? new Date(body.reservedAt)
                            : new Date();
                        if (!!editMode) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.boardRepository.increment({ boardKey: body.boardKey }, "contentCount", 1)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [4 /*yield*/, this.boardContentRepository.save(boardContent)];
                    case 5:
                        _a.sent();
                        return [2 /*return*/, {
                                statusCode: 200,
                                message: "등록이 완료되었습니다."
                            }];
                }
            });
        });
    };
    BoardService.prototype.updateBoard = function (updateData) {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.boardRepository.update({ boardKey: updateData.boardKey }, updateData)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    BoardService.prototype.updateBoardContent = function (updateData) {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.boardContentRepository.update({ id: updateData.id }, updateData)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    BoardService.prototype.getOneBoard = function (boardKey) {
        return __awaiter(this, void 0, Promise, function () {
            var boards;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.boardRepository
                            .createQueryBuilder("board")
                            .where("board.boardKey = :boardKey", { boardKey: boardKey })
                            .getOne()];
                    case 1:
                        boards = _a.sent();
                        if (!boards)
                            throw new common_1.NotFoundException("Not Found Board ID:" + boardKey);
                        return [2 /*return*/, boards];
                }
            });
        });
    };
    // async getOneBoardContent(boardKey: string): Promise<BoardContent> {
    //   // const boardWithComments = await this.boardContentRepository
    //   //   .createQueryBuilder('board')
    //   //   .leftJoinAndSelect('board.authorInfo', 'authorInfo')
    //   //   .leftJoinAndSelect(
    //   //     'board.comments',
    //   //     'comments',
    //   //     'comments.isChildren = :isChildren',
    //   //     { isChildren: 0 },
    //   //   )
    //   //   .where('board.id = :id', { id })
    //   //   .getOne();
    //   const boards = await this.boardContentRepository
    //     .createQueryBuilder("board")
    //     .leftJoinAndSelect("board.authorInfo", "authorInfo")
    //     .where("board.boardKey = :boardKey", { boardKey })
    //     .getOne();
    //   const comments = await this.commentRepository
    //     .createQueryBuilder("boardComment")
    //     .leftJoinAndSelect("boardComment.authorInfo", "authorInfo")
    //     .where("boardComment.boardKey = :boardKey", { boardKey })
    //     .where("boardComment.isChildren = :isChildren", { isChildren: 0 })
    //     .getMany();
    //   console.log(boards);
    //   // boards.comments = comments;
    //   if (!boards) throw new NotFoundException(`Not Found Board ID:${boardKey}`);
    //   return boards;
    // }
    BoardService.prototype.deleteBoard = function (boardKey) {
        return __awaiter(this, void 0, Promise, function () {
            var board, pageValidate, widgetValidate;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.boardRepository
                            .createQueryBuilder()
                            .where("boardKey = :boardKey", { boardKey: boardKey })
                            .getOne()];
                    case 1:
                        board = _a.sent();
                        if (!board)
                            throw new common_1.BadRequestException("\uC874\uC7AC\uD558\uC9C0 \uC54A\uB294 \uAC8C\uC2DC\uD310\uC785\uB2C8\uB2E4. boardKey: " + boardKey);
                        return [4 /*yield*/, this.boardContentRepository.query("SELECT pageKey FROM app_page WHERE pageInfo LIKE '%" + boardKey + "%'")];
                    case 2:
                        pageValidate = _a.sent();
                        return [4 /*yield*/, this.boardContentRepository.query("SELECT widgetKey FROM app_page_widget WHERE widgetInfo LIKE '%" + boardKey + "%'")];
                    case 3:
                        widgetValidate = _a.sent();
                        if (!(pageValidate.length > 0 || widgetValidate.length > 0)) return [3 /*break*/, 4];
                        return [2 /*return*/, {
                                isDelete: false,
                                message: "다른 위젯 또는 페이지에서 사용중인 게시판은 삭제하실 수 없습니다.",
                                inUseWidgets: widgetValidate,
                                inUsePages: pageValidate
                            }];
                    case 4: return [4 /*yield*/, this.boardRepository["delete"]({ boardKey: boardKey })];
                    case 5:
                        _a.sent();
                        return [2 /*return*/, {
                                isDelete: true,
                                message: "게시판이 삭제되었습니다.",
                                inUseWidgets: [],
                                inUsePages: []
                            }];
                }
            });
        });
    };
    BoardService.prototype.deleteBoardContent = function (contentKey) {
        return __awaiter(this, void 0, Promise, function () {
            var content, pageValidate, widgetValidate;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.boardContentRepository.findOne({ contentKey: contentKey })];
                    case 1:
                        content = _a.sent();
                        if (!content)
                            throw new common_1.BadRequestException("\uC874\uC7AC\uD558\uC9C0 \uC54A\uB294 \uCF58\uD150\uCE20\uC785\uB2C8\uB2E4. contentKey: " + contentKey);
                        return [4 /*yield*/, this.boardContentRepository.query("SELECT pageKey FROM app_page WHERE pageInfo LIKE '%" + contentKey + "%'")];
                    case 2:
                        pageValidate = _a.sent();
                        return [4 /*yield*/, this.boardContentRepository.query("SELECT widgetKey FROM app_page_widget WHERE widgetInfo LIKE '%" + contentKey + "%'")];
                    case 3:
                        widgetValidate = _a.sent();
                        if (!(pageValidate.length > 0 || widgetValidate.length > 0)) return [3 /*break*/, 4];
                        return [2 /*return*/, {
                                isDelete: false,
                                message: "다른 위젯 또는 페이지에서 사용중인 콘텐츠는 삭제하실 수 없습니다.",
                                inUseWidgets: widgetValidate,
                                inUsePages: pageValidate
                            }];
                    case 4: return [4 /*yield*/, this.boardContentRepository["delete"]({ contentKey: contentKey })];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, this.boardRepository.decrement({ boardKey: content.boardKey }, "contentCount", 1)];
                    case 6:
                        _a.sent();
                        return [2 /*return*/, {
                                isDelete: true,
                                message: "콘텐츠가 삭제되었습니다.",
                                inUseWidgets: [],
                                inUsePages: []
                            }];
                }
            });
        });
    };
    //댓글 생성
    BoardService.prototype.createComment = function (commentData, pkgname) {
        return __awaiter(this, void 0, Promise, function () {
            var comment, parent, commentModel;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        comment = new board_entity_1.Comment();
                        if (!commentData.parentCommentKey) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.commentRepository.findOne({
                                commentKey: commentData.parentCommentKey
                            })];
                    case 1:
                        parent = _a.sent();
                        //대댓글 수 ++
                        return [4 /*yield*/, this.commentRepository.increment({ commentKey: commentData.parentCommentKey }, "childCount", 1)];
                    case 2:
                        //대댓글 수 ++
                        _a.sent();
                        // 대댓글인 경우
                        comment.appKey = pkgname;
                        comment.content = commentData.content;
                        comment.author = commentData.author;
                        // comment.topic = commentData.topic;
                        comment.contentKey = commentData.contentKey;
                        comment.boardKey = commentData.boardKey;
                        comment.imageUrl = commentData.imageUrl;
                        comment.mp3Url = commentData.mp3Url;
                        comment.youtubeUrl = commentData.youtubeUrl;
                        comment.webUrl = commentData.webUrl;
                        console.log(parent);
                        comment.parent = parent;
                        comment.isChildren = true;
                        return [4 /*yield*/, this.commentRepository.save(comment)];
                    case 3:
                        _a.sent();
                        //게시물 댓글 수 ++
                        return [4 /*yield*/, this.boardContentRepository.increment({ contentKey: commentData.contentKey }, "commentCount", 1)];
                    case 4:
                        //게시물 댓글 수 ++
                        _a.sent();
                        return [3 /*break*/, 8];
                    case 5:
                        // 일반 댓글인 경우
                        comment.content = commentData.content;
                        comment.author = commentData.author;
                        // comment.topic = commentData.topic;
                        comment.contentKey = commentData.contentKey;
                        comment.boardKey = commentData.boardKey;
                        comment.isChildren = false;
                        comment.imageUrl = commentData.imageUrl;
                        comment.mp3Url = commentData.mp3Url;
                        comment.youtubeUrl = commentData.youtubeUrl;
                        comment.webUrl = commentData.webUrl;
                        return [4 /*yield*/, this.commentRepository.save(comment)];
                    case 6:
                        _a.sent();
                        //게시물 댓글 수 ++
                        return [4 /*yield*/, this.boardContentRepository.increment({ contentKey: commentData.contentKey }, "commentCount", 1)];
                    case 7:
                        //게시물 댓글 수 ++
                        _a.sent();
                        _a.label = 8;
                    case 8:
                        console.log(comment);
                        return [4 /*yield*/, this.commentRepository
                                .createQueryBuilder("boardComment")
                                .leftJoinAndSelect("boardComment.authorInfo", "authorInfo")
                                .select([
                                "boardComment.commentKey",
                                "boardComment.content",
                                "boardComment.likeCount",
                                "boardComment.createdAt",
                                "boardComment.isChildren",
                                "boardComment.childCount",
                                "boardComment.imageUrl",
                                "boardComment.mp3Url",
                                "boardComment.youtubeUrl",
                                "boardComment.webUrl",
                                "authorInfo.userId",
                                "authorInfo.profile",
                                "authorInfo.nickname",
                                "authorInfo.username",
                                "authorInfo.level",
                            ])
                                .where("boardComment.id = :id", {
                                id: comment.commentKey
                            })
                                .getOne()];
                    case 9:
                        commentModel = _a.sent();
                        return [2 /*return*/, {
                                statusCode: 200,
                                message: "댓글이 등록되었습니다.",
                                item: commentModel
                            }];
                }
            });
        });
    };
    // 댓글 수정
    BoardService.prototype.updateComment = function (updateData) {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.commentRepository.update({ commentKey: updateData.commentKey }, updateData)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, {
                                statusCode: 200,
                                message: "댓글이 수정되었습니다."
                            }];
                }
            });
        });
    };
    // 댓글 삭제
    BoardService.prototype.deleteComment = function (commentKey) {
        return __awaiter(this, void 0, Promise, function () {
            var comment;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.commentRepository.findOne({ commentKey: commentKey })];
                    case 1:
                        comment = _a.sent();
                        return [4 /*yield*/, this.commentRepository["delete"]({ commentKey: commentKey })];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.commentRepository.decrement({ commentKey: comment.parentCommentKey }, "childCount", 1)];
                    case 3:
                        _a.sent();
                        //게시물 댓글 수 --
                        return [4 /*yield*/, this.boardContentRepository.decrement({ contentKey: comment.contentKey }, "commentCount", 1)];
                    case 4:
                        //게시물 댓글 수 --
                        _a.sent();
                        return [2 /*return*/, {
                                statusCode: 200,
                                message: "댓글이 삭제되었습니다."
                            }];
                }
            });
        });
    };
    BoardService.prototype.getBoardList = function (boardKey, page, limit, pkgname, sort, orderBy, showReserve, searchText) {
        return __awaiter(this, void 0, Promise, function () {
            var today, querySort, skippedItems, board, boardItemsQueryBuilder, boardItems;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        today = dayjs().format("YYYY-MM-DD HH:mm:ss");
                        switch (sort) {
                            case 1:
                                querySort = "reservedAt";
                                break;
                            case 2:
                                querySort = "likeCount";
                                break;
                            case 3:
                                querySort = "viewCount";
                                break;
                            case 4:
                                querySort = "commentCount";
                                break;
                            case 5:
                                querySort = "RAND()";
                                break;
                            default:
                                querySort = "reservedAt";
                                break;
                        }
                        skippedItems = (page - 1) * limit;
                        return [4 /*yield*/, this.boardRepository.findOne({ boardKey: boardKey })];
                    case 1:
                        board = _a.sent();
                        return [4 /*yield*/, this.boardContentRepository
                                .createQueryBuilder("boardContent")
                                .leftJoinAndSelect("boardContent.authorInfo", "authorInfo")
                                .select([
                                // "boardContent.id",
                                "boardContent.contentKey",
                                "boardContent.wrapperKey",
                                "boardContent.templateKey",
                                "boardContent.title",
                                "boardContent.subTitle",
                                "boardContent.theme",
                                "boardContent.tags",
                                "boardContent.likeCount",
                                "boardContent.scrapCount",
                                "boardContent.shareCount",
                                "boardContent.viewCount",
                                "boardContent.commentCount",
                                "boardContent.thumbnail",
                                "boardContent.createdAt",
                                "boardContent.reservedAt",
                                "boardContent.visibleLevel",
                                "boardContent.blockPremium",
                                "boardContent.isPremium",
                                "boardContent.contentType",
                                "authorInfo.userId",
                                "authorInfo.profile",
                                "authorInfo.nickname",
                                "authorInfo.username",
                                "authorInfo.level",
                            ])
                                .where(showReserve
                                ? "boardContent.boardKey=:boardKey"
                                : "boardContent.boardKey=:boardKey AND boardContent.reservedAt < \"" + today + "\"", { boardKey: boardKey })];
                    case 2:
                        boardItemsQueryBuilder = _a.sent();
                        if (searchText) {
                            boardItemsQueryBuilder.andWhere("title LIKE '%" + searchText + "%'", {});
                        }
                        return [4 /*yield*/, boardItemsQueryBuilder
                                .orderBy(sort === 5 ? querySort : "boardContent." + querySort, orderBy)
                                .offset(skippedItems)
                                .limit(limit)
                                .getMany()];
                    case 3:
                        boardItems = _a.sent();
                        return [2 /*return*/, {
                                totalCount: board.contentCount,
                                boardKey: boardKey,
                                page: page,
                                limit: limit,
                                board: board,
                                boardItems: boardItems
                            }];
                }
            });
        });
    };
    //조회 수 증가
    BoardService.prototype.incrementViewCount = function (id) {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.boardContentRepository.increment({ id: id }, "viewCount", 1)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    BoardService.prototype.actionLike = function (likeData) {
        return __awaiter(this, void 0, Promise, function () {
            var userId, contentKey, current, like;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        userId = likeData.userId, contentKey = likeData.contentKey;
                        return [4 /*yield*/, this.likeRepository.findOne({ userId: userId, contentKey: contentKey })];
                    case 1:
                        current = _a.sent();
                        if (!current) return [3 /*break*/, 4];
                        // 이미 있을경우 제거 & 카운트 --
                        return [4 /*yield*/, this.likeRepository.remove(current)];
                    case 2:
                        // 이미 있을경우 제거 & 카운트 --
                        _a.sent();
                        return [4 /*yield*/, this.boardContentRepository.decrement({ contentKey: contentKey }, "likeCount", 1)];
                    case 3:
                        _a.sent();
                        return [2 /*return*/, false];
                    case 4:
                        like = new board_entity_1.Like();
                        like.userId = userId;
                        like.contentKey = contentKey;
                        return [4 /*yield*/, this.likeRepository.save(like)];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, this.boardContentRepository.increment({ contentKey: contentKey }, "likeCount", 1)];
                    case 6:
                        _a.sent();
                        return [2 /*return*/, true];
                }
            });
        });
    };
    BoardService.prototype.likeComment = function (likeData) {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    BoardService.prototype.actionScrap = function (scrapData) {
        return __awaiter(this, void 0, Promise, function () {
            var userId, contentKey, current, scrap;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        userId = scrapData.userId, contentKey = scrapData.contentKey;
                        return [4 /*yield*/, this.scrapRepository.findOne({ userId: userId, contentKey: contentKey })];
                    case 1:
                        current = _a.sent();
                        if (!current) return [3 /*break*/, 4];
                        // 이미 있을경우 제거 & 카운트 --
                        return [4 /*yield*/, this.scrapRepository.remove(current)];
                    case 2:
                        // 이미 있을경우 제거 & 카운트 --
                        _a.sent();
                        return [4 /*yield*/, this.boardContentRepository.decrement({ contentKey: contentKey }, "scrapCount", 1)];
                    case 3:
                        _a.sent();
                        return [2 /*return*/, false];
                    case 4:
                        scrap = new board_entity_1.Scrap();
                        scrap.userId = scrapData.userId;
                        scrap.contentKey = scrapData.contentKey;
                        return [4 /*yield*/, this.scrapRepository.save(scrap)];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, this.boardContentRepository.increment({ contentKey: scrapData.contentKey }, "scrapCount", 1)];
                    case 6:
                        _a.sent();
                        return [2 /*return*/, true];
                }
            });
        });
    };
    //공유 수 증가
    BoardService.prototype.incrementShareCount = function (id) {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.boardContentRepository.increment({ id: id }, "shareCount", 1)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    //댓글 생성
    BoardService.prototype.test = function () {
        return __awaiter(this, void 0, Promise, function () {
            var parentComm, test, test2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.commentRepository.findOne({ id: 3 })];
                    case 1:
                        parentComm = _a.sent();
                        test = new board_entity_1.Comment();
                        test.content = "TEST";
                        test.author = "TEST";
                        test.topic = "TESST";
                        // test.parent = parentComm;
                        return [4 /*yield*/, this.commentRepository.save(test)];
                    case 2:
                        // test.parent = parentComm;
                        _a.sent();
                        test2 = new board_entity_1.Comment();
                        test2.content = "test2";
                        test2.author = "test2";
                        test2.topic = "TESST";
                        // test2.parent = test;
                        return [4 /*yield*/, this.commentRepository.save(test2)];
                    case 3:
                        // test2.parent = test;
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    BoardService = __decorate([
        common_1.Injectable(),
        __param(0, typeorm_1.InjectRepository(widget_entity_1.PageWidget)),
        __param(1, typeorm_1.InjectRepository(board_entity_1.Board)),
        __param(2, typeorm_1.InjectRepository(board_entity_1.BoardContent)),
        __param(3, typeorm_1.InjectRepository(board_entity_1.Comment)),
        __param(4, typeorm_1.InjectRepository(board_entity_1.Like)),
        __param(5, typeorm_1.InjectRepository(board_entity_1.Scrap)),
        __param(6, typeorm_1.InjectRepository(template_entity_1.ContentTemplate))
    ], BoardService);
    return BoardService;
}());
exports.BoardService = BoardService;
function isJson(str) {
    try {
        JSON.parse(str);
    }
    catch (e) {
        return false;
    }
    return true;
}
