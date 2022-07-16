import { User } from "src/auth/entities/auth.entity";
import {
  BeforeInsert,
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity("firendship_request")
export class FriendshipRequest {
  @BeforeInsert()
  private setCreateDate(): void {
    this.createdAt = new Date();
  }
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  fromUser: number;
  @Column()
  toUser: number;
  @Column()
  status: number; //0: 미승인 | 1: 승인 | 2: 반려

  @Column()
  createdAt: Date;

  @OneToOne((type) => User)
  @JoinColumn({ name: "fromUser", referencedColumnName: "id" })
  fromUserInfo: User;

  @OneToOne((type) => User)
  @JoinColumn({ name: "toUser", referencedColumnName: "id" })
  toUserInfo: User;
}

@Entity("firendship")
export class Friendship {
  @BeforeInsert()
  private setCreateDate(): void {
    this.createdAt = new Date();
  }
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;
  @Column()
  firendUserId: number;

  @Column()
  createdAt: Date;

  @OneToOne((type) => User)
  @JoinColumn({ name: "firendUserId", referencedColumnName: "id" })
  friendInfo: User;
}
