import { randomString } from "../../globalFuntion";
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BeforeInsert,
  UpdateDateColumn,
} from "typeorm";

@Entity()
export class Topic {
  @BeforeInsert()
  private setCreateDate(): void {
    this.createdAt = new Date();
  }

  @BeforeInsert()
  private createUniqueKey(): void {
    this.topicKey = randomString();
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  topicKey: string;

  @Column({ length: 255 })
  title: string;

  @Column({ length: 255, select: false })
  type: string;

  @Column({ select: false })
  createdAt: Date;

  @UpdateDateColumn({ select: false })
  updatedAt: Date;
}
