import { Repository } from "typeorm";
import { ActionFriendshipDTO } from "./dto/action-friendship.dto";
import { CreateGuestbookCommentDTO, CreateGuestbookDTO, UpdateGuestbookCommentDTO, UpdateGuestbookDTO } from "./dto/guestbook.dto";
import { CreateMessageDTO, DeleteAllMessageDTO, DeleteMessageDTO, ViewAllMessageDTO, ViewMessageDTO } from "./dto/message.dto";
import { RequestFriendshipDTO } from "./dto/request-friendship.dto";
import { Friendship, FriendshipRequest } from "./entities/friendship.entity";
import { Guestbook, GuestbookComment } from "./entities/guestbook.entity";
import { Message } from "./entities/message.entity";
export declare class FriendshipService {
    private readonly friendshipRequestRepository;
    private readonly friendshipRepository;
    private readonly guestbookRepository;
    private readonly guestbookCommentRepository;
    private readonly messageRepository;
    constructor(friendshipRequestRepository: Repository<FriendshipRequest>, friendshipRepository: Repository<Friendship>, guestbookRepository: Repository<Guestbook>, guestbookCommentRepository: Repository<GuestbookComment>, messageRepository: Repository<Message>);
    validateFriendship(myUserId: number, otherUserId: number): Promise<boolean>;
    requestFriendship(body: RequestFriendshipDTO): Promise<{
        statusCode: number;
        message: string;
    }>;
    getFriendList(userId: number): Promise<Friendship[]>;
    getSendFriendRequestList(userId: number): Promise<FriendshipRequest[]>;
    getReceiveFriendRequestList(userId: number): Promise<FriendshipRequest[]>;
    actionFriendship(body: ActionFriendshipDTO): Promise<{
        statusCode: number;
        message: string;
    }>;
    getGuestbookList(userId: number): Promise<Guestbook[]>;
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
    getGuestbookCommentList(guestbookId: number): Promise<GuestbookComment[]>;
    getGuestbookCommentChildList(parentId: number): Promise<GuestbookComment[]>;
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
    viewMessage(body: ViewMessageDTO): Promise<{
        statusCode: number;
        message: string;
    }>;
    viewAllMessage(body: ViewAllMessageDTO): Promise<{
        statusCode: number;
        message: string;
    }>;
    createMessage(body: CreateMessageDTO): Promise<{
        statusCode: number;
        message: string;
    }>;
    deleteMessage(body: DeleteMessageDTO): Promise<{
        statusCode: number;
        message: string;
    }>;
    deleteAllMessage(body: DeleteAllMessageDTO): Promise<void>;
}
