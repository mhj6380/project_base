import { User } from "src/auth/entities/auth.entity";
import {
  BeforeInsert,
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity("message")
export class Message {
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
  content: string;
  @Column()
  isView: boolean;
  @Column()
  isFromUserDelete: boolean;
  @Column()
  isToUserDelete: boolean;

  @Column()
  createdAt: Date;

  @OneToOne((type) => User)
  @JoinColumn({ name: "fromUser", referencedColumnName: "id" })
  fromUserInfo: User;

  @OneToOne((type) => User)
  @JoinColumn({ name: "toUser", referencedColumnName: "id" })
  toUserInfo: User;
}
