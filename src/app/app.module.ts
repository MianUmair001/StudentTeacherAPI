import { Module } from '@nestjs/common';
import { StudentController } from '../student/student.controller';
import { TeacherController } from '../teacher/teacher.controller';
import { StudentTeacherController } from '../teacher/studentTeacher.controller';
import { StudentService } from '../student/student.service';
import { TeacherService } from 'src/teacher/teacher.service';
import { TeacherModule } from 'src/teacher/teacher.module';
import { StudentModule } from 'src/student/student.module';
@Module({
  imports: [TeacherModule, StudentModule],
})
export class AppModule {}
