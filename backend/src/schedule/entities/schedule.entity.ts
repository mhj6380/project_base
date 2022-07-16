import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BeforeInsert,
  UpdateDateColumn,
} from "typeorm";

@Entity()
export class Schedule {
  @BeforeInsert()
  private setCreateDate(): void {
    this.createdAt = new Date();
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  title: string;

  @Column()
  content: string;
  @Column()
  categoryUid: number;

  @Column()
  startAt: Date;
  @Column()
  endAt: Date;
  @Column()
  userId: number;
  @Column()
  useRange: boolean;
  @Column()
  createdAt: Date;
}
