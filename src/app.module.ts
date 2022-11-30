import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriverConfig, ApolloDriver } from '@nestjs/apollo';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LessonModule } from './lesson/lesson.module';
import { LessonEntity } from './lesson/lesson.entity';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb://localhost/LessonEntity',
      synchronize: true,
      useUnifiedTopology: true,
      entities: [LessonEntity],
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      autoSchemaFile: true,
      driver: ApolloDriver,
    }),
    LessonModule,
  ],
})
export class AppModule {}
