import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { LessonType } from './lessonType';
import { LessonService } from './lesson.service';
import { LessonEntity } from './lesson.entity';
@Resolver((of) => LessonType)
export class LessonResolver {
  constructor(private lessonService: LessonService) {}
  @Query((returns) => LessonType)
  lesson() {
    return {
      id: '123',
      name: 'Awais',
      startDate: 'afsafaf',
      endDate: 'afafaf',
    };
  }
  @Mutation((returns) => LessonType)
  createLesson(
    @Args('name') name: string,
    @Args('startDate') startDate: string,
    @Args('endDate') endDate: string,
  ) {
    return this.lessonService.createLesson(name, endDate, startDate);
  }
}
