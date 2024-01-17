import { Injectable } from '@nestjs/common';
import {UserDto} from "../dto/user.dto/user.dto";
import {InjectRepository} from "@nestjs/typeorm";
import {User} from "../entity/user/user.entity";
import {Repository} from "typeorm";

@Injectable()
export class UserService {

    constructor(@InjectRepository(User) private userRepository: Repository<User>) {
    }

    create(user: UserDto): Promise<UserDto>{
        return this.userRepository.save(user);
    }

    findAll(): Promise<UserDto[]> {
        return this.userRepository.find({
            relations: {
                country: true,
            },
        })
    }
}
