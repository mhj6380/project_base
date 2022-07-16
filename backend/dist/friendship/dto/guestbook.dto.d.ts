export declare class CreateGuestbookDTO {
    readonly fromUser: number;
    readonly toUser: number;
    readonly content: string;
    readonly isPrivate: boolean;
}
declare const UpdateGuestbookDTO_base: import("@nestjs/mapped-types").MappedType<Partial<CreateGuestbookDTO>>;
export declare class UpdateGuestbookDTO extends UpdateGuestbookDTO_base {
    id: number;
}
export declare class CreateGuestbookCommentDTO {
    readonly guestbookId: number;
    readonly userId: number;
    readonly parentId: number;
    readonly content: string;
    readonly isChildren: boolean;
    readonly imageUrl: string;
    readonly mp3Url: string;
    readonly youtubeUrl: string;
    readonly webUrl: string;
}
declare const UpdateGuestbookCommentDTO_base: import("@nestjs/mapped-types").MappedType<Partial<CreateGuestbookCommentDTO>>;
export declare class UpdateGuestbookCommentDTO extends UpdateGuestbookCommentDTO_base {
    id: number;
}
export {};
