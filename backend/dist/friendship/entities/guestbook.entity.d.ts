import { User } from "src/auth/entities/auth.entity";
export declare class Guestbook {
    private setCreateDate;
    id: number;
    fromUser: number;
    toUser: number;
    content: string;
    isPrivate: boolean;
    createdAt: Date;
    fromUserInfo: User;
    toUserInfo: User;
}
export declare class GuestbookComment {
    private setCreateDate;
    id: number;
    guestbookId: number;
    parentId: number;
    userId: number;
    isChildren: boolean;
    content: string;
    imageUrl: string;
    mp3Url: string;
    youtubeUrl: string;
    webUrl: string;
    createdAt: Date;
    userInfo: User;
}
