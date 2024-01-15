import { JwtGuard } from './jwt.guard';
import {Test, TestingModule} from "@nestjs/testing";
import {JwtService} from "@nestjs/jwt";
import {ExecutionContext} from "@nestjs/common";
import {EnvironmentService} from "../../utils/service/environment/environment.service";

describe('JwtGuard', () => {
  let guard: JwtGuard;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JwtGuard, JwtService, EnvironmentService]
    }).compile();

    guard = module.get<JwtGuard>(JwtGuard);
  });

  it('should be defined', () => {
    expect(guard).toBeDefined();
  });

  it('should authorize the request', async() => {

    const context = {
      switchToHttp: () => ({
        getRequest: () => ({
          headers: {
            authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.5mhBHqs5_DTLdINd9p5m7ZJ6XD0Xc55kIaCRY5r6HRA',
          },
        }),
      }),
    } as ExecutionContext;

    const result = await guard.canActivate(context);
    expect(result).toBe(true);

  });
});
