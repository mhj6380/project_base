import { User } from "src/auth/entities/auth.entity";
export declare class FriendshipRequest {
    private setCreateDate;
    id: number;
    fromUser: number;
    toUser: number;
    status: number;
    createdAt: Date;
    fromUserInfo: User;
    toUserInfo: User;
}
export declare class Friendship {
    private setCreateDate;
    id: number;
    userId: number;
    firendUserId: number;
    createdAt: Date;
    friendInfo: User;
}
