export declare class CreateTopicDTO {
    readonly title: string;
    readonly type: string;
}
declare const UpdateTopicDTO_base: import("@nestjs/mapped-types").MappedType<Partial<CreateTopicDTO>>;
export declare class UpdateTopicDTO extends UpdateTopicDTO_base {
    readonly id: number;
}
export {};
