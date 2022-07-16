export declare class LikeSoundMix {
    private setCreateDate;
    id: number;
    userId: string;
    parentId: number;
    createdAt: Date;
    updatedAt: Date;
}
export declare class Like {
    private setCreateDate;
    id: number;
    userId: string;
    topic: string;
    parentId: number;
    createdAt: Date;
    updatedAt: Date;
}
export declare class LikeUser {
    private setCreateDate;
    id: number;
    fromUser: string;
    toUser: string;
    createdAt: Date;
}
