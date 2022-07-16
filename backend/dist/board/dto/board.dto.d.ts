export declare class CreateBoardDTO {
    readonly title: string;
    readonly defaultTemplateKey: string;
    readonly defaultWrapperKey: string;
    readonly morePageWrapperKey: string;
    readonly commentTemplateKey: string;
    readonly commentWrapperKey: string;
    readonly boardType: string;
    readonly topic: string;
    readonly permLvWrite: number;
    readonly permLvWriteComment: number;
    readonly permLvViewContentList: number;
    readonly permLvViewContent: number;
    readonly permLvViewComment: number;
}
declare const UpdateBoardDTO_base: import("@nestjs/mapped-types").MappedType<Partial<CreateBoardDTO>>;
export declare class UpdateBoardDTO extends UpdateBoardDTO_base {
    readonly boardKey: string;
}
export {};
