import { HttpException, Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { students } from '../../db';
@Injectable()
export class ValidateStudentMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const studentId = req.params.studentId;
    const StudentExits = students.some((student) => student.id === studentId);
    if (!StudentExits) {
      throw new HttpException('Student not found', 400);
    }
    next();
  }
}
