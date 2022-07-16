import { PartialType } from "@nestjs/mapped-types";
import { IsBoolean, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateGuestbookDTO {
  @IsNumber()
  @IsOptional()
  readonly fromUser: number;

  @IsNumber()
  @IsOptional()
  readonly toUser: number;

  @IsString()
  readonly content: string;
  @IsBoolean()
  @IsOptional()
  readonly isPrivate: boolean;
}

export class UpdateGuestbookDTO extends PartialType(CreateGuestbookDTO) {
  @IsNumber()
  id: number;
}

export class CreateGuestbookCommentDTO {
  @IsNumber()
  readonly guestbookId: number;
  @IsNumber()
  readonly userId: number;

  @IsNumber()
  @IsOptional()
  readonly parentId: number;

  @IsString()
  readonly content: string;

  @IsBoolean()
  @IsOptional()
  readonly isChildren: boolean;

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
}

export class UpdateGuestbookCommentDTO extends PartialType(
  CreateGuestbookCommentDTO
) {
  @IsNumber()
  id: number;
}
