import { IsString, IsInt, IsDate, IsBoolean } from "class-validator";

export class CreateTemplateDTO {
  @IsString()
  readonly title: string;

  @IsString()
  readonly json: string;
}
