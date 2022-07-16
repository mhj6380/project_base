import {
  IsBoolean,
  IsInt,
  IsNumber,
  IsOptional,
  IsString,
} from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDTO {
  @IsString()
  @IsOptional()
  readonly userId: string;

  @IsString()
  @IsOptional()
  readonly uid: string;

  @IsString()
  @IsOptional()
  readonly udid: string;

  @IsString()
  @IsOptional()
  readonly password?: string;

  @IsString()
  @IsOptional()
  readonly username?: string;
  @IsString()
  @IsOptional()
  readonly nickname?: string;

  @IsString()
  @IsOptional()
  readonly device?: string;

  @IsString()
  @IsOptional()
  readonly about?: string;

  @IsString()
  @IsOptional()
  readonly profile?: string;

  @IsString()
  @IsOptional()
  readonly gender?: string;

  @IsString()
  @IsOptional()
  readonly email?: string;

  @IsNumber()
  @IsOptional()
  readonly level?: number;

  @IsString()
  @IsOptional()
  readonly phone?: string;

  @IsString()
  @IsOptional()
  readonly birthday?: string;

  @IsBoolean()
  @IsOptional()
  readonly agreeMarketing?: boolean;

  @IsString()
  @IsOptional()
  readonly zipCode?: string;
  @IsString()
  @IsOptional()
  readonly address?: string;
  @IsString()
  @IsOptional()
  readonly detailedAddress?: string;
  @IsString()
  @IsOptional()
  readonly sns?: string;

  @IsBoolean()
  @IsOptional()
  readonly push1?: boolean;
  @IsBoolean()
  @IsOptional()
  readonly push2?: boolean;
  @IsBoolean()
  @IsOptional()
  readonly push3?: boolean;
  @IsBoolean()
  @IsOptional()
  readonly push4?: boolean;
  @IsBoolean()
  @IsOptional()
  readonly push5?: boolean;

  @IsString()
  @IsOptional()
  readonly registerPath?: string;

  @IsString()
  @IsOptional()
  readonly country?: string;

  @IsString()
  @IsOptional()
  readonly lastAccessAt?: string;

  @IsString()
  @IsOptional()
  readonly language?: string;

  @IsString()
  @IsOptional()
  readonly inviteCode?: string;

  @IsBoolean()
  @IsOptional()
  readonly isBlock?: boolean;

  @IsBoolean()
  @IsOptional()
  readonly isAnonymous?: boolean;

  @IsString()
  @IsOptional()
  readonly deviceType?: string;

  @IsString()
  @IsOptional()
  readonly deviceLanguage?: string;

  @IsString()
  @IsOptional()
  registedAt?: Date;

  @IsString()
  @IsOptional()
  readonly temp1?: string;
  @IsString()
  @IsOptional()
  readonly temp2?: string;
  @IsString()
  @IsOptional()
  readonly temp3?: string;
  @IsString()
  @IsOptional()
  readonly temp4?: string;
  @IsBoolean()
  @IsOptional()
  readonly temp5?: boolean;
  @IsBoolean()
  @IsOptional()
  readonly temp6?: boolean;
  @IsInt()
  @IsOptional()
  readonly temp7?: number;
  @IsInt()
  @IsOptional()
  readonly temp8?: number;
}
