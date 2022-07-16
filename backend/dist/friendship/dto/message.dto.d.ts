export declare class CreateMessageDTO {
    readonly fromUser: number;
    readonly toUser: number;
    readonly content: string;
}
declare const UpdateMessageDTO_base: import("@nestjs/mapped-types").MappedType<Partial<CreateMessageDTO>>;
export declare class UpdateMessageDTO extends UpdateMessageDTO_base {
    id: number;
}
export declare class ViewMessageDTO {
    readonly userId: number;
    readonly messageId: number;
}
export declare class ViewAllMessageDTO {
    readonly userId: number;
}
export declare class DeleteMessageDTO {
    readonly userId: number;
    readonly messageId: number;
    readonly action: string;
}
export declare class DeleteAllMessageDTO {
    readonly userId: number;
    readonly action: string;
}
export {};
