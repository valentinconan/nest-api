import {IsInt, IsString} from "class-validator";

export class UserDto {

    @IsInt()
    id: number

    @IsString()
    name: string
}
