import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import {JwtGuard} from "../../guard/jwt/jwt.guard";
import {User} from "../entity/user/user.entity";
import {UserService} from "../service/user.service";

import { getRepositoryToken } from '@nestjs/typeorm';
describe('UserController', () => {
  let controller: UserController;

  beforeEach(async () => {

    const mockGuard = { canActivate: jest.fn(() => true) };

    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers:[UserService,
        {
          provide: getRepositoryToken(User),
          useValue: {},
        }]
    }).overrideGuard(JwtGuard)
        .useValue(mockGuard)
        .compile();

    controller = module.get<UserController>(UserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
