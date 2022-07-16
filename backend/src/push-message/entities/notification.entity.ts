import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BeforeInsert,
  UpdateDateColumn,
} from "typeorm";

@Entity()
export class PushMessage {
  @BeforeInsert()
  private setCreateDate(): void {
    this.createdAt = new Date();
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  title: string;

  @Column({ length: 255 })
  content: string;

  @Column({ length: 255 })
  targetPath: string;

  @Column({ length: 255 })
  targetOption: string;

  @Column()
  createdAt: Date;

  @Column()
  reserveAt: Date;
}

// @Entity()
// export class Push {
//   @BeforeInsert()
//   private setCreateDate(): void {
//     this.createdAt = new Date();
//   }

//   @BeforeInsert()
//   private setUpdatedAt(): void {
//     this.updatedAt = new Date();
//   }
//   @PrimaryGeneratedColumn()
//   id: number;

//   @Column({ length: 255 })
//   title: string;

//   @Column({ length: 255 })
//   content: string;

//   @Column({ length: 255 })
//   targetPath: string;

//   @Column({ length: 255 })
//   targetOption: string;

//   @Column()
//   createdAt: Date;

//   @UpdateDateColumn()
//   updatedAt: Date;
// }
