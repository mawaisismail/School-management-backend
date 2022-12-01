import { Column, Entity, ObjectIdColumn } from 'typeorm';

@Entity()
export class StudentEntity {
  @ObjectIdColumn()
  id: string;
  @Column()
  firstName: string;
  @Column()
  lastName: string;
}
