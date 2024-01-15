import {CanActivate, ExecutionContext, Injectable, UnauthorizedException} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as process from "process";
import { Request } from 'express';
import {EnvironmentService} from "../../utils/service/environment/environment.service";

@Injectable()
export class JwtGuard implements CanActivate {

  constructor(private jwtService: JwtService,
              private environmentService: EnvironmentService) {
  }
  async canActivate(context: ExecutionContext):Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = this.extractTokenFromHeader(request);
    if (!token) {
      throw new UnauthorizedException();
    }
    try {
      const payload = await this.jwtService.verifyAsync(
          token,
          {
            secret: this.environmentService.getOrDefault('JWT_SECRET','test')
          }
      );
      // 💡 We're assigning the payload to the request object here
      // so that we can access it in our route handlers
      request['user'] = payload;
    } catch (e){
      throw new UnauthorizedException(e);
    }
    return true;
  }
  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}
