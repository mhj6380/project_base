import { PartialType } from "@nestjs/mapped-types";
import {
  IsString,
  IsInt,
  IsDate,
  IsBoolean,
  IsOptional,
  IsNumber,
} from "class-validator";
import { Board } from "../entities/board.entity";

export class CreateCommentDTO {
  @IsString()
  readonly content: string;

  @IsNumber()
  readonly author: number;

  // @IsString()
  // readonly topic: string;

  @IsString()
  @IsOptional()
  readonly imageUrl: string;
  @IsString()
  @IsOptional()
  readonly mp3Url: string;
  @IsString()
  @IsOptional()
  readonly youtubeUrl: string;
  @IsString()
  @IsOptional()
  readonly webUrl: string;

  @IsString()
  readonly boardKey: string;

  @IsString()
  readonly contentKey: string;

  @IsString()
  @IsOptional()
  readonly parentCommentKey: string;
}

export class UpdateCommentDTO extends PartialType(CreateCommentDTO) {
  @IsString()
  readonly commentKey: string;
}
