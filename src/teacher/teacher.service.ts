import { Injectable } from '@nestjs/common';
import { teachers } from 'src/db';
import { CreateTeacherDto, FindTeacherResponseDto } from './dto/teacher.dto';
import { v4 as uuid } from 'uuid';
@Injectable()
export class TeacherService {
  private teachers = teachers;
  getTeacher(): FindTeacherResponseDto[] {
    return this.teachers;
  }
  getTeacherById(teacherId: string): FindTeacherResponseDto {
    return this.teachers.find((teacher) => {
      return teacher.id === teacherId;
    });
  }
  createTeacher(payload: CreateTeacherDto): FindTeacherResponseDto {
    let newTeacher = {
      id: uuid(),
      ...payload,
    };
    this.teachers.push(newTeacher);
    return newTeacher;
  }
}
