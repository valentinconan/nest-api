import {Body, Controller, Get, Post} from '@nestjs/common';
import {UserDto} from "../dto/user.dto/user.dto";
import {UserService} from "../service/user.service";

@Controller('user')
export class UserController {

    constructor(private userService: UserService) {
    }
    @Post()
    createUser(@Body() user: UserDto): Promise<UserDto> {
        return this.userService.create(user)
    }

    @Get('/all')
    findAll(): Promise<UserDto[]> {
        return this.userService.findAll()
    }
}
