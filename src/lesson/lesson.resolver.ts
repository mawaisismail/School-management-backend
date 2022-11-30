import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { LessonType } from './lessonType';
import { LessonService } from './lesson.service';
@Resolver(() => LessonType)
export class LessonResolver {
  constructor(private lessonService: LessonService) {}
  @Query((returns) => LessonType)
  getLessonById(@Args('id') id: string) {
    return this.lessonService.getLessonById(id);
  }
  @Mutation(() => LessonType)
  createLesson(
    @Args('name') name: string,
    @Args('startDate') startDate: string,
    @Args('endDate') endDate: string,
  ) {
    return this.lessonService.createLesson(name, endDate, startDate);
  }

  @Query(() => [LessonType])
  getLesson() {
    return this.lessonService.getLessons();
  }
}
