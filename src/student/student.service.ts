import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StudentEntity } from './student.entity';
import { Repository } from 'typeorm';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(StudentEntity)
    private studentRepository: Repository<StudentEntity>,
  ) {}

  createStudent(firstName, lastName) {
    const student = this.studentRepository.create({
      firstName,
      lastName,
    });
    return this.studentRepository.save(student);
  }
  getAllStudent() {
    return this.studentRepository.find();
  }

  getStudentById(id) {
    return this.studentRepository.findOne(id);
  }
}
