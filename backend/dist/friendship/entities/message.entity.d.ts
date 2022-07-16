import { User } from "src/auth/entities/auth.entity";
export declare class Message {
    private setCreateDate;
    id: number;
    fromUser: number;
    toUser: number;
    content: string;
    isView: boolean;
    isFromUserDelete: boolean;
    isToUserDelete: boolean;
    createdAt: Date;
    fromUserInfo: User;
    toUserInfo: User;
}
