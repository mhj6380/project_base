import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BeforeInsert,
  UpdateDateColumn,
} from "typeorm";

@Entity()
export class Cs {
  @BeforeInsert()
  private setCreateDate(): void {
    this.createdAt = new Date();
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  userId: string;

  @Column()
  question: string;

  @Column()
  answer: string;

  @Column()
  status: boolean;

  @Column()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
