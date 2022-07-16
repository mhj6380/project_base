import { CreateBoardContentDTO } from "./create-board.dto";
declare const UpdateBoardContentDTO_base: import("@nestjs/mapped-types").MappedType<Partial<CreateBoardContentDTO>>;
export declare class UpdateBoardContentDTO extends UpdateBoardContentDTO_base {
    readonly contentKey: string;
}
export {};
