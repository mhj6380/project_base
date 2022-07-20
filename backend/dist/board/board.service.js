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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoardService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const board_entity_1 = require("./entities/board.entity");
const typeorm_2 = require("typeorm");
const response_interface_1 = require("../interface/response.interface");
const dayjs = require("dayjs");
let BoardService = class BoardService {
    constructor(boardRepository, boardContentRepository, commentRepository, likeRepository, commentLikeRepository, scrapRepository) {
        this.boardRepository = boardRepository;
        this.boardContentRepository = boardContentRepository;
        this.commentRepository = commentRepository;
        this.likeRepository = likeRepository;
        this.commentLikeRepository = commentLikeRepository;
        this.scrapRepository = scrapRepository;
    }
    getFeedList(page, limit) {
        return __awaiter(this, void 0, void 0, function* () {
            const offset = (page - 1) * limit;
            const result = yield this.boardContentRepository
                .createQueryBuilder("boardContent")
                .leftJoinAndSelect("boardContent.authorInfo", "authorInfo")
                .select([
                "boardContent.id",
                "boardContent.contentKey",
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
                "boardContent.publicType",
                "boardContent.imageList",
                "boardContent.webUrl",
                "boardContent.youtubeUrl",
                "boardContent.content",
                "authorInfo.id",
                "authorInfo.profile",
                "authorInfo.nickname",
                "authorInfo.username",
                "authorInfo.level",
            ])
                .where("boardContent.contentType = :type", {
                type: "feed",
            })
                .orderBy("boardContent.id", "ASC")
                .skip(offset)
                .take(limit)
                .getMany();
            result.map((item) => (item.imageList = JSON.parse(item.imageList)));
            return result;
        });
    }
    getPersnalFeedList(userId, page, limit) {
        return __awaiter(this, void 0, void 0, function* () {
            const offset = (page - 1) * limit;
            const result = yield this.boardContentRepository
                .createQueryBuilder("boardContent")
                .leftJoinAndSelect("boardContent.authorInfo", "authorInfo")
                .select([
                "boardContent.contentKey",
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
                "boardContent.imageList",
                "boardContent.publicType",
                "boardContent.webUrl",
                "boardContent.youtubeUrl",
                "boardContent.content",
                "authorInfo.id",
                "authorInfo.profile",
                "authorInfo.nickname",
                "authorInfo.username",
                "authorInfo.level",
            ])
                .where("boardContent.contentType = :type AND author = :userId", {
                type: "feed",
                userId,
            })
                .orderBy("boardContent.createdAt", "DESC")
                .skip(offset)
                .take(limit)
                .getMany();
            result.map((item) => (item.imageList = JSON.parse(item.imageList)));
            return result;
        });
    }
    getOneBoardContent(contentKey) {
        return __awaiter(this, void 0, void 0, function* () {
            const content = yield this.boardContentRepository
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
                "content.youtubeUrl",
                "content.webUrl",
                "content.imageList",
                "authorInfo.id",
                "authorInfo.profile",
                "authorInfo.nickname",
                "authorInfo.username",
                "authorInfo.level",
            ])
                .where("content.contentKey = :contentKey", { contentKey })
                .getOne();
            const comments = yield this.commentRepository
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
                "authorInfo.id",
                "authorInfo.profile",
                "authorInfo.nickname",
                "authorInfo.username",
                "authorInfo.level",
            ])
                .where("boardComment.contentKey = :contentKey", { contentKey })
                .andWhere("boardComment.isChildren = :isChildren", { isChildren: false })
                .getMany();
            if (!isJson(content.content))
                throw new common_1.BadRequestException(`content가 JSON형태가 아닙니다. | contentKey: ${content.contentKey}`);
            content.content = JSON.parse(content.content);
            content.comments = comments;
            if (!content)
                throw new common_1.NotFoundException(`Not Found Content contentKey: ${contentKey}`);
            return content;
        });
    }
    getBoardInitList(pkgname) {
        return __awaiter(this, void 0, void 0, function* () {
            const boards = [];
            const targetBoards = yield this.boardRepository.find({ appKey: pkgname });
            const functionWithPromise = (item) => {
                return Promise.resolve("ok");
            };
            const anAsyncFunction = (item) => __awaiter(this, void 0, void 0, function* () {
                boards.push(yield this.getBoardList(item.boardKey, 1, 10, pkgname, 1, "DESC", true));
                return functionWithPromise(item);
            });
            const getData = () => __awaiter(this, void 0, void 0, function* () {
                return Promise.all(targetBoards.map((item) => anAsyncFunction(item)));
            });
            yield getData();
            return boards;
        });
    }
    getBoardGroup(topic, page, limit) {
        return __awaiter(this, void 0, void 0, function* () {
            let templates;
            const offset = (page - 1) * limit;
            if (topic === "all") {
                templates = yield this.boardRepository
                    .createQueryBuilder()
                    .skip(offset)
                    .take(limit)
                    .orderBy("createdAt", "DESC")
                    .getMany();
            }
            else {
                templates = yield this.boardRepository
                    .createQueryBuilder()
                    .where("topic = :topic", { topic })
                    .skip(offset)
                    .take(limit)
                    .orderBy("createdAt", "DESC")
                    .getMany();
            }
            return templates;
        });
    }
    getComments(contentKey) {
        return __awaiter(this, void 0, void 0, function* () {
            const comments = yield this.commentRepository
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
                "authorInfo.id",
                "authorInfo.profile",
                "authorInfo.nickname",
                "authorInfo.username",
                "authorInfo.level",
            ])
                .where("boardComment.contentKey = :contentKey", {
                contentKey,
            })
                .andWhere("boardComment.isChildren = :isChildren", { isChildren: false })
                .getMany();
            return comments;
        });
    }
    getCommentChildrens(parentCommentKey) {
        return __awaiter(this, void 0, void 0, function* () {
            const comments = yield this.commentRepository
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
                "authorInfo.id",
                "authorInfo.profile",
                "authorInfo.nickname",
                "authorInfo.username",
                "authorInfo.level",
            ])
                .where("boardComment.parentCommentKey = :parentCommentKey", {
                parentCommentKey,
            })
                .andWhere("boardComment.isChildren = :isChildren", { isChildren: true })
                .getMany();
            return comments;
        });
    }
    createBoard(boardData) {
        return __awaiter(this, void 0, void 0, function* () {
            const board = new board_entity_1.Board();
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
            yield this.boardRepository.save(board);
            return board;
        });
    }
    createBoardContent(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const boardContent = new board_entity_1.BoardContent();
            boardContent.boardKey = body.boardKey;
            boardContent.contentKey = body.contentKey;
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
            boardContent.imageList = body.imageList;
            boardContent.youtubeUrl = body.youtubeUrl;
            boardContent.webUrl = body.webUrl;
            boardContent.publicType = body.publicType;
            boardContent.reservedAt = body.reservedAt
                ? new Date(body.reservedAt)
                : new Date();
            yield this.boardContentRepository.save(boardContent);
            return {
                statusCode: 200,
                message: "등록이 완료되었습니다.",
            };
        });
    }
    updateBoard(updateData) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.boardRepository.update({ boardKey: updateData.boardKey }, updateData);
        });
    }
    updateBoardContent(updateData) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.boardContentRepository.update({ contentKey: updateData.contentKey }, updateData);
        });
    }
    getOneBoard(boardKey) {
        return __awaiter(this, void 0, void 0, function* () {
            const boards = yield this.boardRepository
                .createQueryBuilder("board")
                .where("board.boardKey = :boardKey", { boardKey })
                .getOne();
            if (!boards)
                throw new common_1.NotFoundException(`Not Found Board ID:${boardKey}`);
            return boards;
        });
    }
    deleteBoard(boardKey) {
        return __awaiter(this, void 0, void 0, function* () {
            const board = yield this.boardRepository
                .createQueryBuilder()
                .where("boardKey = :boardKey", { boardKey })
                .getOne();
            if (!board)
                throw new common_1.BadRequestException(`존재하지 않는 게시판입니다. boardKey: ${boardKey}`);
            const pageValidate = yield this.boardContentRepository.query(`SELECT pageKey FROM app_page WHERE pageInfo LIKE '%${boardKey}%'`);
            const widgetValidate = yield this.boardContentRepository.query(`SELECT widgetKey FROM app_page_widget WHERE widgetInfo LIKE '%${boardKey}%'`);
            if (pageValidate.length > 0 || widgetValidate.length > 0) {
                return {
                    isDelete: false,
                    message: "다른 위젯 또는 페이지에서 사용중인 게시판은 삭제하실 수 없습니다.",
                    inUseWidgets: widgetValidate,
                    inUsePages: pageValidate,
                };
            }
            else {
                yield this.boardRepository.delete({ boardKey });
                return {
                    isDelete: true,
                    message: "게시판이 삭제되었습니다.",
                    inUseWidgets: [],
                    inUsePages: [],
                };
            }
        });
    }
    deleteBoardContent(contentKey) {
        return __awaiter(this, void 0, void 0, function* () {
            const content = yield this.boardContentRepository.findOne({ contentKey });
            if (!content)
                throw new common_1.BadRequestException(`존재하지 않는 콘텐츠입니다. contentKey: ${contentKey}`);
            yield this.boardContentRepository.delete({ contentKey });
            yield this.boardRepository.decrement({ boardKey: content.boardKey }, "contentCount", 1);
            return {
                isDelete: true,
                message: "콘텐츠가 삭제되었습니다.",
                inUseWidgets: [],
                inUsePages: [],
            };
        });
    }
    createComment(commentData, pkgname) {
        return __awaiter(this, void 0, void 0, function* () {
            const comment = new board_entity_1.Comment();
            if (commentData.parentCommentKey) {
                const parent = yield this.commentRepository.findOne({
                    commentKey: commentData.parentCommentKey,
                });
                yield this.commentRepository.increment({ commentKey: commentData.parentCommentKey }, "childCount", 1);
                comment.appKey = pkgname;
                comment.content = commentData.content;
                comment.author = commentData.author;
                comment.contentKey = commentData.contentKey;
                comment.boardKey = commentData.boardKey;
                comment.imageUrl = commentData.imageUrl;
                comment.mp3Url = commentData.mp3Url;
                comment.youtubeUrl = commentData.youtubeUrl;
                comment.webUrl = commentData.webUrl;
                console.log(parent);
                comment.parent = parent;
                comment.isChildren = true;
                yield this.commentRepository.save(comment);
                yield this.boardContentRepository.increment({ contentKey: commentData.contentKey }, "commentCount", 1);
            }
            else {
                comment.content = commentData.content;
                comment.author = commentData.author;
                comment.contentKey = commentData.contentKey;
                comment.boardKey = commentData.boardKey;
                comment.isChildren = false;
                comment.imageUrl = commentData.imageUrl;
                comment.mp3Url = commentData.mp3Url;
                comment.youtubeUrl = commentData.youtubeUrl;
                comment.webUrl = commentData.webUrl;
                yield this.commentRepository.save(comment);
                yield this.boardContentRepository.increment({ contentKey: commentData.contentKey }, "commentCount", 1);
            }
            console.log(comment);
            const commentModel = yield this.commentRepository
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
                "authorInfo.id",
                "authorInfo.profile",
                "authorInfo.nickname",
                "authorInfo.username",
                "authorInfo.level",
            ])
                .where("boardComment.id = :id", {
                id: comment.commentKey,
            })
                .getOne();
            console.log(commentModel);
            return {
                statusCode: 200,
                message: "댓글이 등록되었습니다.",
                item: commentModel,
            };
        });
    }
    updateComment(updateData) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.commentRepository.update({ commentKey: updateData.commentKey }, updateData);
            return {
                statusCode: 200,
                message: "댓글이 수정되었습니다.",
            };
        });
    }
    deleteComment(commentKey) {
        return __awaiter(this, void 0, void 0, function* () {
            const comment = yield this.commentRepository.findOne({ commentKey });
            yield this.commentRepository.delete({ commentKey });
            yield this.commentRepository.decrement({ commentKey: comment.parentCommentKey }, "childCount", 1);
            yield this.boardContentRepository.decrement({ contentKey: comment.contentKey }, "commentCount", 1);
            return {
                statusCode: 200,
                message: "댓글이 삭제되었습니다.",
            };
        });
    }
    getBoardList(boardKey, page, limit, pkgname, sort, orderBy, showReserve, searchText) {
        return __awaiter(this, void 0, void 0, function* () {
            const today = dayjs().format("YYYY-MM-DD HH:mm:ss");
            let querySort;
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
            const skippedItems = (page - 1) * limit;
            const boardItemsQueryBuilder = yield this.boardContentRepository
                .createQueryBuilder("boardContent")
                .leftJoinAndSelect("boardContent.authorInfo", "authorInfo")
                .select([
                "boardContent.contentKey",
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
                "authorInfo.id",
                "authorInfo.profile",
                "authorInfo.nickname",
                "authorInfo.username",
                "authorInfo.level",
            ])
                .where(showReserve
                ? `boardContent.boardKey=:boardKey`
                : `boardContent.boardKey=:boardKey AND boardContent.reservedAt < "${today}"`, { boardKey });
            if (searchText) {
                boardItemsQueryBuilder.andWhere(`title LIKE '%${searchText}%'`, {});
            }
            const boardItems = yield boardItemsQueryBuilder
                .orderBy(sort === 5 ? querySort : `boardContent.${querySort}`, orderBy)
                .offset(skippedItems)
                .limit(limit)
                .getMany();
            return {
                boardKey,
                page,
                limit,
                boardItems: boardItems,
            };
        });
    }
    incrementViewCount(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.boardContentRepository.increment({ id }, "viewCount", 1);
        });
    }
    actionLike(likeData) {
        return __awaiter(this, void 0, void 0, function* () {
            const { userId, contentKey } = likeData;
            const current = yield this.likeRepository.findOne({ userId, contentKey });
            if (current) {
                yield this.likeRepository.remove(current);
                yield this.boardContentRepository.decrement({ contentKey }, "likeCount", 1);
                return {
                    status: false,
                    statusCode: 200,
                    message: "좋아요 취소",
                };
            }
            else {
                const like = new board_entity_1.Like();
                like.userId = userId;
                like.contentKey = contentKey;
                yield this.likeRepository.save(like);
                yield this.boardContentRepository.increment({ contentKey }, "likeCount", 1);
                return {
                    status: true,
                    statusCode: 200,
                    message: "좋아요 완료",
                };
            }
        });
    }
    likeComment(likeData) {
        return __awaiter(this, void 0, void 0, function* () {
            const { userId, commentKey } = likeData;
            const current = yield this.commentLikeRepository.findOne({
                userId,
                commentKey,
            });
            if (current) {
                yield this.commentLikeRepository.remove(current);
                yield this.commentRepository.decrement({ commentKey }, "likeCount", 1);
                return false;
            }
            else {
                const like = new board_entity_1.CommentLike();
                like.userId = userId;
                like.commentKey = commentKey;
                yield this.commentLikeRepository.save(like);
                yield this.commentRepository.increment({ commentKey }, "likeCount", 1);
                return true;
            }
        });
    }
    actionScrap(scrapData) {
        return __awaiter(this, void 0, void 0, function* () {
            const { userId, contentKey } = scrapData;
            const current = yield this.scrapRepository.findOne({ userId, contentKey });
            if (current) {
                yield this.scrapRepository.remove(current);
                yield this.boardContentRepository.decrement({ contentKey }, "scrapCount", 1);
                return false;
            }
            else {
                const scrap = new board_entity_1.Scrap();
                scrap.userId = scrapData.userId;
                scrap.contentKey = scrapData.contentKey;
                yield this.scrapRepository.save(scrap);
                yield this.boardContentRepository.increment({ contentKey: scrapData.contentKey }, "scrapCount", 1);
                return true;
            }
        });
    }
    incrementShareCount(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.boardContentRepository.increment({ id }, "shareCount", 1);
        });
    }
};
BoardService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(board_entity_1.Board)),
    __param(1, typeorm_1.InjectRepository(board_entity_1.BoardContent)),
    __param(2, typeorm_1.InjectRepository(board_entity_1.Comment)),
    __param(3, typeorm_1.InjectRepository(board_entity_1.Like)),
    __param(4, typeorm_1.InjectRepository(board_entity_1.CommentLike)),
    __param(5, typeorm_1.InjectRepository(board_entity_1.Scrap)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], BoardService);
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
//# sourceMappingURL=board.service.js.map