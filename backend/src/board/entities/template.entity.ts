import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
  JoinColumn,
  BeforeInsert,
  CreateDateColumn,
  UpdateDateColumn,
  BeforeUpdate,
  OneToOne,
  Tree,
  TreeChildren,
  TreeParent,
} from "typeorm";
import { User } from "../../auth/entities/auth.entity";

@Entity()
export class ContentTemplate {
  @BeforeInsert()
  private setCreateDate(): void {
    this.createdAt = new Date();
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  json: string;

  @Column()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
