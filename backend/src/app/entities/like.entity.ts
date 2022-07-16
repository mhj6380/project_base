import { randomString } from "src/globalFuntion";
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BeforeInsert,
  UpdateDateColumn,
} from "typeorm";

@Entity()
export class LikeSoundMix {
  @BeforeInsert()
  private setCreateDate(): void {
    this.createdAt = new Date();
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  userId: string;

  @Column()
  parentId: number;

  @Column()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

@Entity("likes")
export class Like {
  @BeforeInsert()
  private setCreateDate(): void {
    this.createdAt = new Date();
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  userId: string;

  @Column({ length: 255 })
  topic: string;

  @Column()
  parentId: number;

  @Column()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

@Entity()
export class LikeUser {
  @BeforeInsert()
  private setCreateDate(): void {
    this.createdAt = new Date();
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  fromUser: string;

  @Column({ length: 255 })
  toUser: string;

  @Column()
  createdAt: Date;
}
