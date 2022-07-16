import { User } from "src/auth/entities/auth.entity";
import {
  BeforeInsert,
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity("guestbook")
export class Guestbook {
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
  isPrivate: boolean;

  @Column()
  createdAt: Date;

  @OneToOne((type) => User)
  @JoinColumn({ name: "fromUser", referencedColumnName: "id" })
  fromUserInfo: User;

  @OneToOne((type) => User)
  @JoinColumn({ name: "toUser", referencedColumnName: "id" })
  toUserInfo: User;
}

@Entity("guestbook_comment")
export class GuestbookComment {
  @BeforeInsert()
  private setCreateDate(): void {
    this.createdAt = new Date();
  }
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  guestbookId: number;
  @Column()
  parentId: number;
  @Column()
  userId: number;
  @Column()
  isChildren: boolean;

  @Column()
  content: string;
  @Column()
  imageUrl: string;
  @Column()
  mp3Url: string;
  @Column()
  youtubeUrl: string;
  @Column()
  webUrl: string;

  @Column()
  createdAt: Date;

  @OneToOne((type) => User)
  @JoinColumn({ name: "userId", referencedColumnName: "id" })
  userInfo: User;
}
