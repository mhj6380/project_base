import { IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateLikeUserDTO {
  @IsString()
  @ApiProperty({ type: String, description: "유저 ID" })
  readonly fromUser: string;
  @IsString()
  @ApiProperty({ type: String, description: "유저 ID" })
  readonly toUser: string;
}
