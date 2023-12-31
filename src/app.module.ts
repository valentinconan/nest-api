import {MiddlewareConsumer, Module, NestModule} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './controller/app.controller';
import { AppService } from './service/app.service';
import { UserModule } from './user/user.module';
import { HealthModule } from './health/health.module';
import config from "../ormconfig";
import {JwtMiddleware} from "./middleware/jwt/jwt.middleware";

@Module({
  imports: [
      TypeOrmModule.forRoot(config),
    UserModule,
    HealthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer): any {
    consumer
        .apply(JwtMiddleware)
        .forRoutes('user');
  }
}
