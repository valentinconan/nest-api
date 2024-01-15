import { Module } from '@nestjs/common';
import { UserController } from './controller/user.controller';
import { UserService } from './service/user.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {User} from "./entity/user/user.entity";
import {EnvironmentService} from "../utils/service/environment/environment.service";

@Module({
  imports:[TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  providers: [UserService, EnvironmentService]
})
export class UserModule {}
