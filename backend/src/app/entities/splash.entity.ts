import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Splash {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  introFirstRun: boolean;

  @Column()
  freeDays: number;

  @Column()
  videoProject: string;
  @Column()
  videoProjectStatement: string;

  @Column()
  splashTime: number;

  @Column()
  splashImageUrl: string;

  @Column()
  useIntroPage: boolean;

  @Column() // 최신버전 업데이트 상태 1:스토어 최신버전 필수업데이트 | 2:스토어 최신버전 선택적업데이트 | 3:없음
  appUpdateOptionAndroid: number;

  @Column()
  appUpdateOptionIos: number;

  @Column()
  requiredMinVersionAndroid: string;

  @Column()
  requiredMinVersionIos: string;

  @Column()
  companyName: string;
  @Column()
  companyTel: string;
  // @Column()
  // companyName: string;

  @Column()
  companyCellNumber: string;

  @Column()
  serviceName: string;
  @Column()
  csTel: string;
  @Column()
  csKakaoUrl: string;
  @Column()
  csKakaoUrlUsed: boolean;

  @Column()
  ownerName: string;

  @Column()
  companyAddress: string;

  @Column()
  companyNumber: string;

  @Column()
  companyEmail: string;
  @Column()
  permissionService: string;
  @Column()
  permissionGain: string;
}

@Entity("intro")
export class Intro {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  source: string;
}
