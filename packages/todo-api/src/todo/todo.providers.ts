import { Connection, Repository } from 'typeorm';
import { Todo } from './todo.entity';
import { TODO_REPOSITORY, DATABASE_CONNECTION } from '../app/constants';


export const todoProviders = [
  {
    provide: TODO_REPOSITORY,
    useFactory: (connection: Connection) => connection.getRepository(Todo),
    inject: [DATABASE_CONNECTION],
  },
];