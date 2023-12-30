
import { ConnectionOptions } from 'typeorm';

export default {
    type: 'postgres',
    url: 'postgres://postgres:password@localhost:5432/nest',
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
