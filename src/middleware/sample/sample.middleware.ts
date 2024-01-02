import {Injectable, NestMiddleware, UnauthorizedException} from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class SampleMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    if(req?.headers?.authorization){
      next();
    }else{
      throw new UnauthorizedException('Authorization header is missing')
    }
  }
}
