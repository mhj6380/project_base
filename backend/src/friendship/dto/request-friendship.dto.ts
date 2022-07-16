import { IsNumber, IsString } from "class-validator";

export class RequestFriendshipDTO {
  @IsNumber()
  readonly fromUser: number;

  @IsNumber()
  readonly toUser: number;
}
