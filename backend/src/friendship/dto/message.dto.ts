import { PartialType } from "@nestjs/mapped-types";
import { IsBoolean, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateMessageDTO {
  @IsNumber()
  readonly fromUser: number;

  @IsNumber()
  readonly toUser: number;

  @IsString()
  readonly content: string;
}

export class UpdateMessageDTO extends PartialType(CreateMessageDTO) {
  @IsNumber()
  id: number;
}

export class ViewMessageDTO {
  @IsNumber()
  readonly userId: number;

  @IsNumber()
  readonly messageId: number;
}

export class ViewAllMessageDTO {
  @IsNumber()
  readonly userId: number;
}

export class DeleteMessageDTO {
  @IsNumber()
  readonly userId: number;

  @IsNumber()
  readonly messageId: number;
  @IsString()
  readonly action: string; // sent | received
}

export class DeleteAllMessageDTO {
  @IsNumber()
  readonly userId: number;
  @IsString()
  readonly action: string; // sent | received
}
