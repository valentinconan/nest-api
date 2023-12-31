
import { ConnectionOptions } from 'typeorm';
import * as process from "process";
import {User} from "./src/user/entity/user/user.entity";

let url: string = process.env.DB_URL;

url=url??"postgres://postgres:password@localhost:5432/nest"
export default {
    type: 'postgres',
    url: url,
    database: 'filmash',
    entities: [User],
    synchronize: true,
} as ConnectionOptions;
/*
export default {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'pass',
    database: 'filmash',
    entities: [],
synchronize: true,
} as ConnectionOptions;
*/
