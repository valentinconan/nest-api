import {MiddlewareConsumer, Module, NestModule} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { HealthModule } from './health/health.module';
import config from "../ormconfig";
import {SampleMiddleware} from "./middleware/sample/sample.middleware";
import { EnvironmentService } from './utils/service/environment/environment.service';
import {JwtModule} from "@nestjs/jwt/dist/jwt.module";
import { CountryModule } from './country/country.module';

@Module({
  imports: [
      TypeOrmModule.forRoot(config),
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '60s' },
    }),
    UserModule,
    HealthModule,
    CountryModule],
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
