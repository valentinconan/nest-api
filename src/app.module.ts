import {MiddlewareConsumer, Module, NestModule} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { HealthModule } from './health/health.module';
import config from "../ormconfig";
import {SampleMiddleware} from "./middleware/sample/sample.middleware";
import { EnvironmentService } from './utils/service/environment/environment.service';

@Module({
  imports: [
      TypeOrmModule.forRoot(config),
    UserModule,
    HealthModule
  ],
  controllers: [],
  providers: [EnvironmentService],
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer): any {
    consumer
        .apply(SampleMiddleware)
        .forRoutes('user');
  }
}
