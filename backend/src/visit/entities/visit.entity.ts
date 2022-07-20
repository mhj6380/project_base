import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BeforeInsert,
  UpdateDateColumn,
} from "typeorm";

@Entity()
export class Visit {
  @BeforeInsert()
  private setCreateDate(): void {
    this.vsTime = new Date();
    this.vsDate = new Date();
    this.vsDatetime = new Date();
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  vsDate: Date;

  @Column()
  vsTime: Date;

  @Column()
  vsDatetime: Date;

  @Column({ length: 255 })
  vsAgent: string;

  @Column({ length: 255 })
  vsIp: string;

  @Column({ length: 255 })
  uuid: string;

  @Column({ length: 255 })
  language: string;
}
