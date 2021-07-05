import {
  Controller,
  Body,
  Get,
  Param,
  Put,
  ParseUUIDPipe,
} from '@nestjs/common';
import { StudentService } from 'src/student/student.service';
import {
  FindStudentResponseDto,
  StudentResponseDto,
} from '../student/dto/student.dto';
@Controller('/teachers/:teacherId/students')
export class StudentTeacherController {
  constructor(private readonly studentService: StudentService) {}
  @Get()
  GetTeachersStudent(
    @Param('teacherId', new ParseUUIDPipe()) teacherId: string,
  ): FindStudentResponseDto[] {
    return this.studentService.getStudentByTeacherId(teacherId);
  }
  @Put('/:studentId')
  UpdateTeachersStudent(
    @Param('studentId', new ParseUUIDPipe()) studentId: string,
    @Param('teacherId', new ParseUUIDPipe()) teacherId: string,
    @Body() body,
  ): StudentResponseDto {
    return this.studentService.updateStudentTeacher(teacherId, studentId);
  }
}
