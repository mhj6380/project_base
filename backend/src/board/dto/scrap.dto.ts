import { IsString, IsInt, IsNumber } from "class-validator";

export class CreateScrapDTO {
  @IsNumber()
  readonly userId: number;

  @IsString()
  readonly contentKey: string;
}
