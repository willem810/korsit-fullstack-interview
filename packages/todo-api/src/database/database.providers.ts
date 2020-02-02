import {createConnection} from 'typeorm';
import { DATABASE_CONNECTION } from '../app/constants';
import { Todo } from '../todo/todo.entity';

export const databaseProviders = [
    {
      provide: DATABASE_CONNECTION,
      useFactory: async () => await createConnection({
        type: 'mysql',
        host: 'toemen.nu',
        port: 3306,
        username: 'korsit',
        password: 'korsit2020',
        database: 'korsit',
        entities: [
            __dirname + '/../**/*.entity{.ts,.js}',
        ],
        synchronize: true,
      }).catch(err => console.log(err)),
    },
  ];