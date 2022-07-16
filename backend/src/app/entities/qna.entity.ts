import { randomString } from "src/globalFuntion";
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BeforeInsert,
  UpdateDateColumn,
} from "typeorm";

@Entity()
export class Qna {
  @BeforeInsert()
  private setCreateDate(): void {
    this.createdAt = new Date();
  }

  // @BeforeInsert()
  // private createUniqueKey(): void {
  //   this.qnaKey = randomString();
  // }
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  title: string;

  @Column()
  content: string;

  @Column()
  viewCount: number;

  @Column()
  topic: string;

  @Column()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
