import {Injectable, NestMiddleware, UnauthorizedException} from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class JwtMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    if(this.checkJwt(req?.headers?.authorization)){
      console.log('Access granted')
      next();
    }else{
      throw new UnauthorizedException()
    }
  }

  private checkJwt(authorization:string): boolean {
    let granted: boolean=false
    if(authorization){
      //todo check jwt here
      granted=true
    }
    return granted
  }
}
