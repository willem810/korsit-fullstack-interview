import { Injectable, NotFoundException, Inject } from '@nestjs/common';
import { Todo } from './todo.entity';
import { TODO_REPOSITORY } from '../app/constants';
import { Repository } from 'typeorm';


@Injectable()
export class TodoService {

    constructor(@Inject(TODO_REPOSITORY) private readonly todoRepo: Repository<Todo>) { }


    private readonly todos: Todo[] = [];

    async findAll(): Promise<Todo[]> {
        console.log("Getting all todos")
        return this.todoRepo.find();
    }

    async find(id: number): Promise<Todo> {
        console.log("Getting todo with id: " + id);      
        return this.todoRepo.findOne(id);
    }

    async create(todo: Todo): Promise<Todo> {
        console.log("Creating todo with id: " + todo.id);
        return this.todoRepo.save(todo);
    }

    async update(todo: Todo): Promise<Todo> {
        console.log("Updating todo with id: " + todo.id);
        return this.todoRepo.save(todo);
    }

    async delete(id: number) {
        // The remove function of the Repository requires an object instead of an ID
        // Therefor we first need to find this object
        var todo = await this.find(id);
        console.log("Deleting todo with id: " + id);
        this.todoRepo.remove(todo);
    }
}
