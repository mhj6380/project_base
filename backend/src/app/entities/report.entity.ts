import { randomString } from "src/globalFuntion";
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BeforeInsert,
  UpdateDateColumn,
} from "typeorm";

@Entity("report")
export class Report {
  @BeforeInsert()
  private setCreateDate(): void {
    this.createdAt = new Date();
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  fromUser: string;

  @Column({ length: 255 })
  targetId: string;

  @Column({ length: 255 })
  topic: string;

  @Column()
  content: number;

  @Column()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
