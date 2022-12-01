import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { StudentType } from './student.type';
import { StudentService } from './student.service';

@Resolver(() => StudentType)
export class StudentResolver {
  constructor(private studentService: StudentService) {}
  @Query(() => [StudentType])
  getStudents() {
    return this.studentService.getAllStudent();
  }
  @Mutation(() => StudentType)
  createStudent(
    @Args('firstName') firstName: string,
    @Args('lastName') lastName: string,
  ) {
    return this.studentService.createStudent(firstName, lastName);
  }
  @Query(() => StudentType)
  getStudentById(@Args('id') id: string) {
    return this.studentService.getStudentById(id);
  }
}
