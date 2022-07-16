import { IsNumber, IsString } from "class-validator";

export class ActionFriendshipDTO {
  @IsNumber()
  readonly requestId: number;

  @IsNumber()
  readonly status: number;
}
