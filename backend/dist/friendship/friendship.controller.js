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
exports.FriendshipController = void 0;
const common_1 = require("@nestjs/common");
const action_friendship_dto_1 = require("./dto/action-friendship.dto");
const guestbook_dto_1 = require("./dto/guestbook.dto");
const message_dto_1 = require("./dto/message.dto");
const request_friendship_dto_1 = require("./dto/request-friendship.dto");
const friendship_service_1 = require("./friendship.service");
let FriendshipController = class FriendshipController {
    constructor(friendshipService) {
        this.friendshipService = friendshipService;
    }
    validateFriendship(myUserId, otherUserId) {
        return this.friendshipService.validateFriendship(myUserId, otherUserId);
    }
    requestFriendship(body) {
        return this.friendshipService.requestFriendship(body);
    }
    actionFriendship(body) {
        return this.friendshipService.actionFriendship(body);
    }
    getFriendList(userId) {
        return this.friendshipService.getFriendList(userId);
    }
    getSendFriendRequestList(userId) {
        return this.friendshipService.getSendFriendRequestList(userId);
    }
    getReceiveFriendRequestList(userId) {
        return this.friendshipService.getReceiveFriendRequestList(userId);
    }
    getGuestbookList(userId) {
        return this.friendshipService.getGuestbookList(userId);
    }
    createGuestbook(body) {
        return this.friendshipService.createGuestbook(body);
    }
    updateGuestbook(body) {
        return this.friendshipService.updateGuestbook(body);
    }
    deleteGuestbook(id) {
        return this.friendshipService.deleteGuestbook(id);
    }
    getGuestbookCommentList(guestbookId) {
        return this.friendshipService.getGuestbookCommentList(guestbookId);
    }
    getGuestbookCommentChildList(parentCommentId) {
        return this.friendshipService.getGuestbookCommentChildList(parentCommentId);
    }
    createGuestbookComment(body) {
        return this.friendshipService.createGuestbookComment(body);
    }
    updateGuestbookComment(body) {
        return this.friendshipService.updateGuestbookComment(body);
    }
    deleteGuestbookComment(id) {
        return this.friendshipService.deleteGuestbookComment(id);
    }
    getMessageList(userId, type) {
        return this.friendshipService.getMessageList(userId, type);
    }
    createMessage(body) {
        return this.friendshipService.createMessage(body);
    }
    viewMessage(body) {
        return this.friendshipService.viewMessage(body);
    }
    viewAllMessage(body) {
        return this.friendshipService.viewAllMessage(body);
    }
    deleteMessage(body) {
        return this.friendshipService.deleteMessage(body);
    }
    deleteAllMessage(body) {
        return this.friendshipService.deleteAllMessage(body);
    }
};
__decorate([
    common_1.Get("/validate/:myUserId/:otherUserId"),
    __param(0, common_1.Param("myUserId")),
    __param(1, common_1.Param("otherUserId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], FriendshipController.prototype, "validateFriendship", null);
__decorate([
    common_1.Post("/request"),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [request_friendship_dto_1.RequestFriendshipDTO]),
    __metadata("design:returntype", void 0)
], FriendshipController.prototype, "requestFriendship", null);
__decorate([
    common_1.Put("/action"),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [action_friendship_dto_1.ActionFriendshipDTO]),
    __metadata("design:returntype", void 0)
], FriendshipController.prototype, "actionFriendship", null);
__decorate([
    common_1.Get("/friend-list/:userId"),
    __param(0, common_1.Param("userId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], FriendshipController.prototype, "getFriendList", null);
__decorate([
    common_1.Get("/send-request-list/:userId"),
    __param(0, common_1.Param("userId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], FriendshipController.prototype, "getSendFriendRequestList", null);
__decorate([
    common_1.Get("/receive-request-list/:userId"),
    __param(0, common_1.Param("userId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], FriendshipController.prototype, "getReceiveFriendRequestList", null);
__decorate([
    common_1.Get("/guestbook/:userId"),
    __param(0, common_1.Param("userId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], FriendshipController.prototype, "getGuestbookList", null);
__decorate([
    common_1.Post("/guestbook"),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [guestbook_dto_1.CreateGuestbookDTO]),
    __metadata("design:returntype", void 0)
], FriendshipController.prototype, "createGuestbook", null);
__decorate([
    common_1.Put("/guestbook"),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [guestbook_dto_1.UpdateGuestbookDTO]),
    __metadata("design:returntype", void 0)
], FriendshipController.prototype, "updateGuestbook", null);
__decorate([
    common_1.Delete("/guestbook/:id"),
    __param(0, common_1.Param("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], FriendshipController.prototype, "deleteGuestbook", null);
__decorate([
    common_1.Get("/guestbook/comment/:guestbookId"),
    __param(0, common_1.Param("guestbookId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], FriendshipController.prototype, "getGuestbookCommentList", null);
__decorate([
    common_1.Get("/guestbook/comment-child/:parentCommentId"),
    __param(0, common_1.Param("parentCommentId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], FriendshipController.prototype, "getGuestbookCommentChildList", null);
__decorate([
    common_1.Post("/guestbook/comment"),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [guestbook_dto_1.CreateGuestbookCommentDTO]),
    __metadata("design:returntype", void 0)
], FriendshipController.prototype, "createGuestbookComment", null);
__decorate([
    common_1.Put("/guestbook/comment"),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [guestbook_dto_1.UpdateGuestbookCommentDTO]),
    __metadata("design:returntype", void 0)
], FriendshipController.prototype, "updateGuestbookComment", null);
__decorate([
    common_1.Delete("/guestbook/comment/:id"),
    __param(0, common_1.Param("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], FriendshipController.prototype, "deleteGuestbookComment", null);
__decorate([
    common_1.Get("/message/:userId/:type"),
    __param(0, common_1.Param("userId")), __param(1, common_1.Param("type")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], FriendshipController.prototype, "getMessageList", null);
__decorate([
    common_1.Post("/message"),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [message_dto_1.CreateMessageDTO]),
    __metadata("design:returntype", void 0)
], FriendshipController.prototype, "createMessage", null);
__decorate([
    common_1.Put("/message/view"),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [message_dto_1.ViewMessageDTO]),
    __metadata("design:returntype", void 0)
], FriendshipController.prototype, "viewMessage", null);
__decorate([
    common_1.Put("/message/view-all"),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [message_dto_1.ViewAllMessageDTO]),
    __metadata("design:returntype", void 0)
], FriendshipController.prototype, "viewAllMessage", null);
__decorate([
    common_1.Delete("/message/delete"),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [message_dto_1.DeleteMessageDTO]),
    __metadata("design:returntype", void 0)
], FriendshipController.prototype, "deleteMessage", null);
__decorate([
    common_1.Delete("/message/delete-all"),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [message_dto_1.DeleteAllMessageDTO]),
    __metadata("design:returntype", void 0)
], FriendshipController.prototype, "deleteAllMessage", null);
FriendshipController = __decorate([
    common_1.Controller("friendship"),
    __metadata("design:paramtypes", [friendship_service_1.FriendshipService])
], FriendshipController);
exports.FriendshipController = FriendshipController;
//# sourceMappingURL=friendship.controller.js.map