import { Module } from '@nestjs/common';
import { AppController } from './controller/app.controller';
import { AppService } from './service/app.service';
import {HealthController} from "./controller/health.controller";
import {HealthService} from "./service/health.service";

@Module({
  imports: [],
  controllers: [AppController, HealthController],
  providers: [AppService, HealthService],
})
export class AppModule {}
