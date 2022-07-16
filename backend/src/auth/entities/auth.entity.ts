import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  Index,
  BeforeInsert,
  BeforeUpdate,
} from "typeorm";
import * as bcrypt from "bcryptjs";
import { randomStringUpper } from "../../globalFuntion";

@Entity()
export class User {
  @BeforeInsert()
  private setCreateDate(): void {
    this.createdAt = new Date();
  }

  @BeforeInsert()
  private setRegistedAt(): void {
    this.registedAt = new Date();
  }

  @BeforeInsert()
  private setInviteCode(): void {
    this.inviteCode = randomStringUpper();
  }

  @BeforeInsert()
  private setRandomNickname(): void {
    const randomNumber = Math.floor(
      Math.random() * (100000 - 1000000) + 100000
    );
    this.nickname = `APP${randomNumber}`;
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255, unique: true, default: "" })
  userId: string;

  @Column({ length: 255, unique: true, default: "" })
  uid: string;

  @Column({ length: 255, default: "" })
  udid: string;

  // select: false
  @Column({ length: 256, nullable: false, default: "" })
  password: string;

  @Column({ length: 100, default: "" })
  nickname: string;

  @Column({ length: 100, default: "" })
  username: string;

  @Column({ length: 100, default: "" })
  device: string;

  @Column({ default: "" })
  profile: string;

  @Column({ default: "" })
  about: string;

  @Column({ default: "" })
  email: string;

  @Column({ default: "" })
  phone: string;

  @Column({ default: "" })
  gender: string;

  @Column({ default: "" })
  birthday: string;

  @Column({ default: "" })
  deviceLanguage: string;

  @Column({ default: "" })
  deviceType: string;

  @Column({ default: "" })
  country: string;

  @Column({ default: "" })
  language: string;

  @Column({ default: 0 })
  point: number;

  @Column({ default: 0 })
  accumulatedPoints: number;

  @Column({ default: false })
  agreeMarketing: boolean;

  @Column({ default: 0 })
  likeCount: number;

  @Column({ default: 0 })
  followerCount: number;

  @Column({ default: 1 })
  level: number;

  @Column({ default: "" })
  registerPath: string;

  @Column({ default: "" })
  inviteCode: string;

  @Column({ default: "" })
  sns: string;

  @Column({ default: false })
  isBlock: boolean;

  @Column({ default: false })
  isAnonymous: boolean;

  @Column({ default: "" })
  grade: string;
  @Column({ default: "" })
  zipCode: string;
  @Column({ default: "" })
  address: string;
  @Column({ default: "" })
  detailedAddress: string;

  @Column({ default: new Date() })
  registedAt: Date;

  @Column()
  createdAt: Date;

  @Column()
  lastAccessAt: Date;

  @Column({ default: true })
  push1: boolean;
  @Column({ default: true })
  push2: boolean;
  @Column({ default: true })
  push3: boolean;
  @Column({ default: true })
  push4: boolean;
  @Column({ default: true })
  push5: boolean;
  @Column({ default: "" })
  temp1: string;
  @Column({ default: "" })
  temp2: string;
  @Column({ default: "" })
  temp3: string;
  @Column({ default: "" })
  temp4: string;
  @Column({ default: false })
  temp5: boolean;
  @Column({ default: false })
  temp6: boolean;
  @Column({ default: 0 })
  temp7: number;
  @Column({ default: 0 })
  temp8: number;
  @Column()
  premiumExprierdAt: Date;

  @BeforeInsert()
  hashPassword() {
    this.password = bcrypt.hashSync(this.password || "empty", 10);
  }
}
