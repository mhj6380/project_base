import { IsNumber, IsString } from "class-validator";
import { PartialType } from "@nestjs/mapped-types";

export class CreateTopicDTO {
  @IsString()
  readonly title: string;

  @IsString()
  readonly type: string;
}

export class UpdateTopicDTO extends PartialType(CreateTopicDTO) {
  @IsNumber()
  readonly id: number;
}
