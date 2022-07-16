import { randomString } from "src/globalFuntion";
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BeforeInsert,
  UpdateDateColumn,
} from "typeorm";

@Entity("test_one")
export class TestOne {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  title: string;

  @Column()
  content: string;
}

@Entity("test_two")
export class TestTwo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  title: string;

  @Column()
  content: string;
}
