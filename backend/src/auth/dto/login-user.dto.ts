import { IsString } from "class-validator";

export class LoginUserDTO {
  @IsString()
  readonly userId: string;

  @IsString()
  readonly password: string;
}
