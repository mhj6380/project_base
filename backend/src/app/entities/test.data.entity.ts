import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("test")
export class TestData {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  data1: string;
  @Column()
  data2: string;
  @Column()
  data3: string;
  @Column()
  data4: string;
  @Column()
  data5: string;
  @Column()
  data6: string;
  @Column()
  data7: string;
  @Column()
  data8: string;
  @Column()
  data9: string;
  @Column()
  data10: string;
  @Column()
  data11: string;
  @Column()
  data12: string;
  @Column()
  data13: string;
  @Column()
  data14: string;
  @Column()
  data15: string;
}
