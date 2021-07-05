import {
  Controller,
  Get,
  Param,
  Post,
  Put,
  Body,
  ParseUUIDPipe,
} from '@nestjs/common';
import {
  CreateTeacherDto,
  FindTeacherResponseDto,
  TeacherResponseDto,
} from './dto/teacher.dto';
import { TeacherService } from './teacher.service';
@Controller('teachers')
export class TeacherController {
  constructor(private readonly TeacherService: TeacherService) {}
  @Get()
  getTeachers(): FindTeacherResponseDto[] {
    return this.TeacherService.getTeacher();
  }
  @Get('/:teacherId')
  getTeacherById(
    @Param('teacherId', new ParseUUIDPipe()) teacherId: string,
  ): FindTeacherResponseDto {
    return this.TeacherService.getTeacherById(teacherId);
  }
  @Post()
  createTeacher(@Body() body: CreateTeacherDto): CreateTeacherDto {
    return this.TeacherService.createTeacher(body);
  }
}
