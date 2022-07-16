import { IsString, IsInt, IsBoolean, IsOptional } from "class-validator";
import { PartialType } from "@nestjs/mapped-types";

export class CreateBoardDTO {
  @IsString()
  readonly title: string;
  @IsString()
  readonly defaultTemplateKey: string;
  @IsString()
  readonly defaultWrapperKey: string;
  @IsString()
  readonly morePageWrapperKey: string;
  @IsString()
  readonly commentTemplateKey: string;
  @IsString()
  readonly commentWrapperKey: string;
  @IsString()
  readonly boardType: string;
  @IsString()
  @IsOptional()
  readonly topic: string;
  @IsInt()
  readonly permLvWrite: number;
  @IsInt()
  readonly permLvWriteComment: number;
  @IsInt()
  readonly permLvViewContentList: number;
  @IsInt()
  readonly permLvViewContent: number;
  @IsInt()
  readonly permLvViewComment: number;
}

export class UpdateBoardDTO extends PartialType(CreateBoardDTO) {
  @IsString()
  readonly boardKey: string;
}
