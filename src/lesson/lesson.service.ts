import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LessonEntity } from './lesson.entity';
import { Repository } from 'typeorm';

@Injectable()
export class LessonService {
  constructor(
    @InjectRepository(LessonEntity)
    private lessonRepository: Repository<LessonEntity>,
  ) {}
  async createLesson(name: string, endDate: string, startDate: string) {
    const lesson = this.lessonRepository.create({
      name,
      startDate,
      endDate,
    });
    return this.lessonRepository.save(lesson);
  }
  async getLessons(): Promise<LessonEntity[]> {
    return this.lessonRepository.find();
  }
  getLessonById(id) {
    return this.lessonRepository.findOne(id);
  }
}
