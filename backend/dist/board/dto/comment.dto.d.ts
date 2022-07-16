export declare class CreateCommentDTO {
    readonly content: string;
    readonly author: number;
    readonly imageUrl: string;
    readonly mp3Url: string;
    readonly youtubeUrl: string;
    readonly webUrl: string;
    readonly boardKey: string;
    readonly contentKey: string;
    readonly parentCommentKey: string;
}
declare const UpdateCommentDTO_base: import("@nestjs/mapped-types").MappedType<Partial<CreateCommentDTO>>;
export declare class UpdateCommentDTO extends UpdateCommentDTO_base {
    readonly commentKey: string;
}
export {};
