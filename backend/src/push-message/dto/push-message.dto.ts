import { IsBoolean, IsOptional, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class SendPushMessageDTO {
  @IsString()
  @ApiProperty({ type: String, description: "PUSH 제목" })
  readonly title: string;
  @IsString()
  @ApiProperty({ type: String, description: "PUSH 내용" })
  readonly content: string;
  @IsString()
  @ApiProperty({ type: String, description: " " })
  readonly targetPath: string;
  @IsString()
  @ApiProperty({ type: String, description: " " })
  readonly targetOption: string;
  @IsString()
  @IsOptional()
  @ApiProperty({ type: String, description: "예약시간" })
  readonly sendAfter: string;

  @IsBoolean()
  @IsOptional()
  @ApiProperty({ type: Boolean })
  readonly isPersonal: boolean;

  @IsString()
  @IsOptional()
  @ApiProperty({ type: String })
  readonly userId: number;

  @IsString()
  @ApiProperty({ type: String, description: "예약시간" })
  readonly type: string;

  // type
  // push01 - 추천 사운드 믹스 알림
  // push02 - 추천 오리지널 사운드 알림
  // push03 - 댓글 알림
  // push04 - 좋아요 알림
  // push05 - 팬 알림
  // push06 - 업적 / 등급 업그레이드 알림
}
