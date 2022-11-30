import { Entity } from 'typeorm';
@Entity()
export class LessonEntity {
  id: string;

  name: string;

  startDate: string;

  endDate: string;
}
