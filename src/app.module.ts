import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './controller/app.controller';
import { AppService } from './service/app.service';
import {HealthController} from "./controller/health.controller";
import {HealthService} from "./service/health.service";
import { UserModule } from './user/user.module';
import {User} from "./user/entity/user/user.entity";
import config from "../ormconfig";

@Module({
  imports: [
      TypeOrmModule.forRoot(config),
    UserModule
  ],
  controllers: [AppController, HealthController],
  providers: [AppService, HealthService],
})
export class AppModule {}
