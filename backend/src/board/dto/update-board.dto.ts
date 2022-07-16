import { IsString, IsInt, IsBoolean, IsNumber } from "class-validator";
import { PartialType } from "@nestjs/mapped-types";
import { CreateBoardContentDTO } from "./create-board.dto";

export class UpdateBoardContentDTO extends PartialType(CreateBoardContentDTO) {
  @IsString()
  readonly contentKey: string;
}
