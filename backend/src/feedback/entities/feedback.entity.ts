import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BeforeInsert,
  UpdateDateColumn,
} from "typeorm";

@Entity("feedback")
export class Feedback {
  @BeforeInsert()
  private setCreateDate(): void {
    this.createdAt = new Date();
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: string;

  @Column()
  score: number;

  @Column()
  content: string;

  @Column()
  createdAt: Date;
}
