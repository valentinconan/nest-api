import {MiddlewareConsumer, Module, NestModule} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { HealthModule } from './health/health.module';
import config from "../ormconfig";
import {SampleMiddleware} from "./middleware/sample/sample.middleware";

@Module({
  imports: [
      TypeOrmModule.forRoot(config),
    UserModule,
    HealthModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer): any {
    consumer
        .apply(SampleMiddleware)
        .forRoutes('user');
  }
}
