import {
  IsString,
  IsInt,
  IsDate,
  IsBoolean,
  IsOptional,
  IsNumber,
} from "class-validator";

export class CreateBoardContentDTO {
  @IsString()
  readonly contentKey: string;

  @IsString()
  readonly boardKey: string;

  @IsString()
  readonly title: string;

  @IsString()
  @IsOptional()
  readonly subTitle: string;

  @IsString()
  @IsOptional()
  readonly webUrl: string;

  @IsString()
  readonly content: string;

  @IsNumber()
  @IsOptional()
  readonly author: number;

  @IsString()
  @IsOptional()
  readonly thumbnail?: string;

  @IsString()
  @IsOptional()
  readonly tags?: string;

  @IsString()
  readonly contentType?: string;

  @IsBoolean()
  readonly blockPremium?: boolean;

  @IsBoolean()
  readonly isPremium?: boolean;

  @IsInt()
  readonly visibleLevel?: number;

  @IsString()
  @IsOptional()
  readonly reservedAt?: string;

  @IsString()
  readonly wrapperKey: string;

  @IsString()
  @IsOptional()
  readonly templateKey: string;
  @IsString()
  @IsOptional()
  readonly imageList: string;
  @IsString()
  @IsOptional()
  readonly youtubeUrl: string;
  @IsNumber()
  readonly publicType: number;

  // @IsString()
  // readonly widgetList: string;

  // @IsString()
  // readonly createAt: string;
}

interface test {
  name: string;
  value?: number;
}

const hakgu: test = {
  name: "hakgu",
};
