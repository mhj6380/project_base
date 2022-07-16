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

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  title: string;

  @Column()
  content: string;

  @Column({ length: 255 })
  titleEn: string;

  @Column()
  contentEn: string;

  @Column()
  topic: string;

  @Column()
  viewCount: number;

  @Column()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column()
  sortIndex: number;
}
