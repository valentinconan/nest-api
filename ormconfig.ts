
import { ConnectionOptions } from 'typeorm';
import * as process from "process";

let url: string = process.env.DB_URL;

url=url??"postgres://postgres:password@localhost:5432/nest"
export default {
    type: 'postgres',
    url: url,
    database: 'filmash',
    entities: ['dist/**/*.entity{.ts,.js}'],
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
