import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LessonEntity } from './lesson.entity';
import { Repository } from 'typeorm';
import { v4 as uuid } from 'uuid';

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
}
