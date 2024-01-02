import {Body, Controller, Get, Post, UseGuards} from '@nestjs/common';
import {UserDto} from "../dto/user.dto/user.dto";
import {UserService} from "../service/user.service";
import {GuardsConsumer} from "@nestjs/core/guards";
import {JwtGuard} from "../../guard/jwt/jwt.guard";

@Controller('user')
export class UserController {

    constructor(private userService: UserService) {
    }
    @UseGuards(JwtGuard)
    @Post()
    createUser(@Body() user: UserDto): Promise<UserDto> {
        console.log(JSON.stringify(user))
        return this.userService.create(user)
    }

    @UseGuards(JwtGuard)
    @Get('/all')
    findAll(): Promise<UserDto[]> {
        return this.userService.findAll()
    }

    @Get('/ping')
    ping():string{
        return "pong"
    }
}
