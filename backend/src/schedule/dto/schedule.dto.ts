import {
  IsString,
  IsInt,
  IsBoolean,
  IsOptional,
  IsNumber,
} from "class-validator";
import { PartialType } from "@nestjs/mapped-types";

export class CreateScheduleDTO {
  @IsString()
  readonly title: string;
  @IsString()
  readonly content: string;
  @IsString()
  readonly startAt: string;
  @IsString()
  readonly endAt: string;
  @IsInt()
  readonly userId: number;
  @IsString()
  readonly categoryUid: string;
  @IsBoolean()
  readonly useRange: boolean;
}

export class UpdateScheduleDTO extends PartialType(CreateScheduleDTO) {
  @IsNumber()
  readonly id: number;
}
