import { Resolver, Query } from '@nestjs/graphql';
import { LessonType } from './lessonType';
@Resolver((of) => LessonType)
export class LessonResolver {
  @Query((returns) => LessonType)
  lesson() {
    return {
      id: '123',
      name: 'Awais',
      startDate: 'afsafaf',
      endDate: 'afafaf',
    };
  }
}
