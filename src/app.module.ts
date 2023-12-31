import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './controller/app.controller';
import { AppService } from './service/app.service';
import { UserModule } from './user/user.module';
import { HealthModule } from './health/health.module';
import config from "../ormconfig";

@Module({
  imports: [
      TypeOrmModule.forRoot(config),
    UserModule,
    HealthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
