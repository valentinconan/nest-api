import { Module } from '@nestjs/common';
import { UserController } from './controller/user.controller';
import { UserService } from './service/user.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {User} from "./entity/user/user.entity";
import {JwtModule} from "@nestjs/jwt";

@Module({
  imports:[TypeOrmModule.forFeature([User]),
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '60s' },
  }),],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
