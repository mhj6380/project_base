import { User } from "../../auth/entities/auth.entity";
export declare class Board {
    private setCreateDate;
    id: number;
    appKey: string;
    boardKey: string;
    boardType: string;
    topic: string;
    title: string;
    defaultTemplateKey: string;
    defaultWrapperKey: string;
    morePageWrapperKey: string;
    commentTemplateKey: string;
    commentWrapperKey: string;
    permLvWrite: number;
    permLvWriteComment: number;
    permLvViewContentList: number;
    permLvViewContent: number;
    permLvViewComment: number;
    contentCount: number;
    createdAt: Date;
    updatedAt: Date;
}
export declare class BoardContent {
    private setCreateDate;
    id: number;
    appKey: string;
    boardKey: string;
    contentKey: string;
    wrapperKey: string;
    templateKey: string;
    topic: string;
    title: string;
    subTitle: string;
    content: string;
    author: number;
    thumbnail?: string;
    tags: string;
    blockPremium: boolean;
    isPremium: boolean;
    visibleLevel: number;
    likeCount: number;
    scrapCount: number;
    shareCount: number;
    viewCount: number;
    commentCount: number;
    publicType: number;
    contentType: string;
    widgetInfo: string;
    youtubeUrl: string;
    webUrl: string;
    imageList: string;
    createdAt: Date;
    reservedAt: Date;
    updatedAt: Date;
    comments: Comment[];
    authorInfo: User;
}
export declare class Comment {
    private setCreateDate;
    id: number;
    appKey: string;
    boardKey: string;
    contentKey: string;
    commentKey: string;
    content: string;
    author: number;
    topic: string;
    likeCount: number;
    createdAt: Date;
    updatedAt: Date;
    isChildren: boolean;
    childCount: number;
    parentCommentKey: string;
    imageUrl: string;
    mp3Url: string;
    youtubeUrl: string;
    webUrl: string;
    board: BoardContent;
    authorInfo: User;
    children: Comment[];
    parent: Comment;
}
export declare class Like {
    private setCreateDate;
    id: number;
    userId: number;
    contentKey: string;
    createdAt: Date;
}
export declare class CommentLike {
    private setCreateDate;
    id: number;
    userId: number;
    commentKey: string;
    createdAt: Date;
}
export declare class Scrap {
    private setCreateDate;
    id: number;
    userId: number;
    contentKey: string;
    createdAt: Date;
}
