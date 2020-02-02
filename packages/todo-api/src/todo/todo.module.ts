import { Module } from '@nestjs/common';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';
import { todoProviders } from './todo.providers';
import { DatabaseModule } from '../database/database.module';

@Module({
  controllers: [TodoController],
  providers: [TodoService, ...todoProviders],
  imports: [DatabaseModule]
})
export class TodoModule {}


