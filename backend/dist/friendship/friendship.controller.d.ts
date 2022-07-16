import { ActionFriendshipDTO } from "./dto/action-friendship.dto";
import { CreateGuestbookCommentDTO, CreateGuestbookDTO, UpdateGuestbookCommentDTO, UpdateGuestbookDTO } from "./dto/guestbook.dto";
import { CreateMessageDTO, DeleteAllMessageDTO, DeleteMessageDTO, ViewAllMessageDTO, ViewMessageDTO } from "./dto/message.dto";
import { RequestFriendshipDTO } from "./dto/request-friendship.dto";
import { FriendshipService } from "./friendship.service";
export declare class FriendshipController {
    private readonly friendshipService;
    constructor(friendshipService: FriendshipService);
    validateFriendship(myUserId: number, otherUserId: number): Promise<boolean>;
    requestFriendship(body: RequestFriendshipDTO): Promise<{
        statusCode: number;
        message: string;
    }>;
    actionFriendship(body: ActionFriendshipDTO): Promise<{
        statusCode: number;
        message: string;
    }>;
    getFriendList(userId: number): Promise<import("./entities/friendship.entity").Friendship[]>;
    getSendFriendRequestList(userId: number): Promise<import("./entities/friendship.entity").FriendshipRequest[]>;
    getReceiveFriendRequestList(userId: number): Promise<import("./entities/friendship.entity").FriendshipRequest[]>;
    getGuestbookList(userId: number): Promise<import("./entities/guestbook.entity").Guestbook[]>;
    createGuestbook(body: CreateGuestbookDTO): Promise<{
        statusCode: number;
        message: string;
    }>;
    updateGuestbook(body: UpdateGuestbookDTO): Promise<{
        statusCode: number;
        message: string;
    }>;
    deleteGuestbook(id: number): Promise<{
        statusCode: number;
        message: string;
    }>;
    getGuestbookCommentList(guestbookId: number): Promise<import("./entities/guestbook.entity").GuestbookComment[]>;
    getGuestbookCommentChildList(parentCommentId: number): Promise<import("./entities/guestbook.entity").GuestbookComment[]>;
    createGuestbookComment(body: CreateGuestbookCommentDTO): Promise<{
        statusCode: number;
        message: string;
    }>;
    updateGuestbookComment(body: UpdateGuestbookCommentDTO): Promise<{
        statusCode: number;
        message: string;
    }>;
    deleteGuestbookComment(id: number): Promise<{
        statusCode: number;
        message: string;
    }>;
    getMessageList(userId: number, type: number): Promise<any>;
    createMessage(body: CreateMessageDTO): Promise<{
        statusCode: number;
        message: string;
    }>;
    viewMessage(body: ViewMessageDTO): Promise<{
        statusCode: number;
        message: string;
    }>;
    viewAllMessage(body: ViewAllMessageDTO): Promise<{
        statusCode: number;
        message: string;
    }>;
    deleteMessage(body: DeleteMessageDTO): Promise<{
        statusCode: number;
        message: string;
    }>;
    deleteAllMessage(body: DeleteAllMessageDTO): Promise<void>;
}
