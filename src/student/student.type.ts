import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class StudentType {
  @Field()
  firstName: string;
  @Field()
  lastName: string;
}
