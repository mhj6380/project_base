import { randomString } from "src/globalFuntion";
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BeforeInsert,
  UpdateDateColumn,
} from "typeorm";

@Entity()
export class Scrab {
  @BeforeInsert()
  private setCreateDate(): void {
    this.createdAt = new Date();
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  userId: string;

  @Column()
  topic: string;

  @Column()
  targetId: string;

  @Column()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
