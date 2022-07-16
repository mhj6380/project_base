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
exports.FriendshipService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const friendship_entity_1 = require("./entities/friendship.entity");
const guestbook_entity_1 = require("./entities/guestbook.entity");
const message_entity_1 = require("./entities/message.entity");
let FriendshipService = class FriendshipService {
    constructor(friendshipRequestRepository, friendshipRepository, guestbookRepository, guestbookCommentRepository, messageRepository) {
        this.friendshipRequestRepository = friendshipRequestRepository;
        this.friendshipRepository = friendshipRepository;
        this.guestbookRepository = guestbookRepository;
        this.guestbookCommentRepository = guestbookCommentRepository;
        this.messageRepository = messageRepository;
    }
    validateFriendship(myUserId, otherUserId) {
        return __awaiter(this, void 0, void 0, function* () {
            const valid = yield this.friendshipRepository.findOne({
                userId: myUserId,
                firendUserId: otherUserId,
            });
            return valid ? true : false;
        });
    }
    requestFriendship(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const current = yield this.friendshipRequestRepository.findOne({
                fromUser: body.fromUser,
                toUser: body.toUser,
            });
            if (current)
                throw new common_1.BadRequestException("이미 신청한 상대입니다.");
            const friendshipRequest = new friendship_entity_1.FriendshipRequest();
            friendshipRequest.fromUser = body.fromUser;
            friendshipRequest.toUser = body.toUser;
            friendshipRequest.status = 0;
            yield this.friendshipRequestRepository.save(friendshipRequest);
            return {
                statusCode: 200,
                message: "친구 신청이 완료되었습니다.",
            };
        });
    }
    getFriendList(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.friendshipRepository
                .createQueryBuilder("friendship")
                .leftJoinAndSelect("friendship.friendInfo", "friendInfo")
                .where("friendship.userId = :userId", { userId })
                .select([
                "friendship.id",
                "friendship.createdAt",
                "friendInfo.id",
                "friendInfo.profile",
                "friendInfo.nickname",
                "friendInfo.username",
                "friendInfo.level",
            ])
                .getMany();
            return result;
        });
    }
    getSendFriendRequestList(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.friendshipRequestRepository
                .createQueryBuilder("request")
                .leftJoinAndSelect("request.toUserInfo", "toUserInfo")
                .where("request.fromUser = :userId AND status = 0", { userId })
                .select([
                "request.id",
                "request.status",
                "request.createdAt",
                "toUserInfo.id",
                "toUserInfo.profile",
                "toUserInfo.nickname",
                "toUserInfo.username",
                "toUserInfo.level",
            ])
                .getMany();
            return result;
        });
    }
    getReceiveFriendRequestList(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.friendshipRequestRepository
                .createQueryBuilder("request")
                .leftJoinAndSelect("request.fromUserInfo", "fromUserInfo")
                .where("request.toUser = :userId  AND status = 0", { userId })
                .select([
                "request.id",
                "request.status",
                "request.createdAt",
                "fromUserInfo.id",
                "fromUserInfo.profile",
                "fromUserInfo.nickname",
                "fromUserInfo.username",
                "fromUserInfo.level",
            ])
                .getMany();
            return result;
        });
    }
    actionFriendship(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const current = yield this.friendshipRequestRepository.findOne({
                id: body.requestId,
            });
            const currentStatus = current.status;
            yield this.friendshipRequestRepository.update({ id: body.requestId }, {
                status: body.status,
            });
            switch (body.status) {
                case 0:
                    if (currentStatus === 1) {
                        this.friendshipRepository.delete({
                            userId: current.fromUser,
                            firendUserId: current.toUser,
                        });
                        this.friendshipRepository.delete({
                            userId: current.toUser,
                            firendUserId: current.fromUser,
                        });
                    }
                    break;
                case 1:
                    if (currentStatus !== 1) {
                        const friendship = new friendship_entity_1.Friendship();
                        friendship.userId = current.fromUser;
                        friendship.firendUserId = current.toUser;
                        yield this.friendshipRepository.save(friendship);
                        const friendship2 = new friendship_entity_1.Friendship();
                        friendship2.userId = current.toUser;
                        friendship2.firendUserId = current.fromUser;
                        yield this.friendshipRepository.save(friendship2);
                    }
                    break;
                case 2:
                    if (currentStatus === 1) {
                        this.friendshipRepository.delete({
                            userId: current.fromUser,
                            firendUserId: current.toUser,
                        });
                        this.friendshipRepository.delete({
                            userId: current.toUser,
                            firendUserId: current.fromUser,
                        });
                    }
                    break;
            }
            return {
                statusCode: 200,
                message: "처리 완료",
            };
        });
    }
    getGuestbookList(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.guestbookRepository
                .createQueryBuilder("guestbook")
                .leftJoinAndSelect("guestbook.fromUserInfo", "fromUserInfo")
                .select([
                "guestbook",
                "fromUserInfo.id",
                "fromUserInfo.profile",
                "fromUserInfo.nickname",
                "fromUserInfo.username",
                "fromUserInfo.level",
            ])
                .where("guestbook.toUser = :userId", { userId })
                .orderBy("guestbook.createdAt", "DESC")
                .getMany();
            return result;
        });
    }
    createGuestbook(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const guestbook = new guestbook_entity_1.Guestbook();
            guestbook.toUser = body.toUser;
            guestbook.fromUser = body.fromUser;
            guestbook.content = body.content;
            guestbook.isPrivate = body.isPrivate;
            yield this.guestbookRepository.save(guestbook);
            return {
                statusCode: 201,
                message: "방명록 등록완료",
            };
        });
    }
    updateGuestbook(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const bookId = body.id;
            delete body.id;
            yield this.guestbookRepository.update({ id: bookId }, body);
            return {
                statusCode: 200,
                message: "방명록 수정 완료",
            };
        });
    }
    deleteGuestbook(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.guestbookRepository.delete({ id });
            return {
                statusCode: 200,
                message: "방명록 삭제 완료",
            };
        });
    }
    getGuestbookCommentList(guestbookId) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.guestbookCommentRepository
                .createQueryBuilder("guestbookComment")
                .leftJoinAndSelect("guestbookComment.userInfo", "userInfo")
                .select([
                "guestbookComment",
                "userInfo.id",
                "userInfo.profile",
                "userInfo.nickname",
                "userInfo.username",
                "userInfo.level",
            ])
                .where("guestbookComment.guestbookId = :guestbookId AND isChildren = false", { guestbookId })
                .orderBy("guestbookComment.createdAt", "ASC")
                .getMany();
            return result;
        });
    }
    getGuestbookCommentChildList(parentId) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.guestbookCommentRepository
                .createQueryBuilder("guestbookComment")
                .leftJoinAndSelect("guestbookComment.userInfo", "userInfo")
                .select([
                "guestbookComment",
                "userInfo.id",
                "userInfo.profile",
                "userInfo.nickname",
                "userInfo.username",
                "userInfo.level",
            ])
                .where("guestbookComment.parentId = :parentId AND isChildren = true", {
                parentId,
            })
                .orderBy("guestbookComment.createdAt", "ASC")
                .getMany();
            return result;
        });
    }
    createGuestbookComment(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const guestbookComment = new guestbook_entity_1.GuestbookComment();
            guestbookComment.guestbookId = body.guestbookId;
            guestbookComment.userId = body.userId;
            guestbookComment.parentId = body.parentId;
            guestbookComment.isChildren = body.isChildren;
            guestbookComment.imageUrl = body.imageUrl;
            guestbookComment.mp3Url = body.mp3Url;
            guestbookComment.youtubeUrl = body.youtubeUrl;
            guestbookComment.webUrl = body.webUrl;
            guestbookComment.content = body.content;
            yield this.guestbookCommentRepository.save(guestbookComment);
            return {
                statusCode: 201,
                message: "댓글 등록완료",
            };
        });
    }
    updateGuestbookComment(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const bookId = body.id;
            delete body.id;
            yield this.guestbookCommentRepository.update({ id: bookId }, body);
            return {
                statusCode: 200,
                message: "댓글 수정 완료",
            };
        });
    }
    deleteGuestbookComment(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.guestbookCommentRepository.delete({ id });
            return {
                statusCode: 200,
                message: "댓글 삭제 완료",
            };
        });
    }
    getMessageList(userId, type) {
        return __awaiter(this, void 0, void 0, function* () {
            let result;
            if (type === 1) {
                result = yield this.messageRepository
                    .createQueryBuilder("message")
                    .leftJoinAndSelect("message.toUserInfo", "toUserInfo")
                    .select([
                    "message",
                    "toUserInfo.id",
                    "toUserInfo.profile",
                    "toUserInfo.nickname",
                    "toUserInfo.username",
                    "toUserInfo.level",
                ])
                    .where("message.fromUser = :userId AND message.isFromUserDelete = false", {
                    userId,
                })
                    .orderBy("message.createdAt", "DESC")
                    .getMany();
            }
            else {
                result = yield this.messageRepository
                    .createQueryBuilder("message")
                    .leftJoinAndSelect("message.fromUserInfo", "fromUserInfo")
                    .select([
                    "message",
                    "fromUserInfo.id",
                    "fromUserInfo.profile",
                    "fromUserInfo.nickname",
                    "fromUserInfo.username",
                    "fromUserInfo.level",
                ])
                    .where("message.toUser = :userId AND message.isToUserDelete = false", {
                    userId,
                })
                    .orderBy("message.createdAt", "DESC")
                    .getMany();
            }
            return result;
        });
    }
    viewMessage(body) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.messageRepository.update({ id: body.messageId }, {
                isView: true,
            });
            return {
                statusCode: 200,
                message: "읽음처리 완료",
            };
        });
    }
    viewAllMessage(body) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.messageRepository.update({ id: body.userId }, {
                isView: true,
            });
            return {
                statusCode: 200,
                message: "읽음처리 완료",
            };
        });
    }
    createMessage(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const message = new message_entity_1.Message();
            message.fromUser = body.fromUser;
            message.toUser = body.toUser;
            message.content = body.content;
            yield this.messageRepository.save(message);
            return {
                statusCode: 201,
                message: "쪽지 전송 완료",
            };
        });
    }
    deleteMessage(body) {
        return __awaiter(this, void 0, void 0, function* () {
            if (body.action === "sent") {
                yield this.messageRepository.update({ id: body.messageId }, {
                    isFromUserDelete: true,
                });
            }
            else if (body.action === "received") {
                yield this.messageRepository.update({ id: body.messageId }, {
                    isToUserDelete: true,
                });
            }
            return {
                statusCode: 200,
                message: "댓글 삭제 완료",
            };
        });
    }
    deleteAllMessage(body) {
        return __awaiter(this, void 0, void 0, function* () {
            if (body.action === "sent") {
                yield this.messageRepository.update({ fromUser: body.userId }, {
                    isFromUserDelete: true,
                });
            }
            else if (body.action === "received") {
                yield this.messageRepository.update({ toUser: body.userId }, {
                    isToUserDelete: true,
                });
            }
        });
    }
};
FriendshipService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(friendship_entity_1.FriendshipRequest)),
    __param(1, typeorm_1.InjectRepository(friendship_entity_1.Friendship)),
    __param(2, typeorm_1.InjectRepository(guestbook_entity_1.Guestbook)),
    __param(3, typeorm_1.InjectRepository(guestbook_entity_1.GuestbookComment)),
    __param(4, typeorm_1.InjectRepository(message_entity_1.Message)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], FriendshipService);
exports.FriendshipService = FriendshipService;
//# sourceMappingURL=friendship.service.js.map