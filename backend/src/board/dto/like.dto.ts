import { IsString, IsInt, IsNumber } from "class-validator";

export class CreateLikeDTO {
  @IsNumber()
  readonly userId: number;

  @IsString()
  readonly contentKey: string;
}

export class CreateCommentLikeDTO {
  @IsNumber()
  readonly userId: number;

  @IsString()
  readonly commentKey: string;
}
