import { Controller } from '@nestjs/common';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {

    /**
     * Inject the Todo Service
     * into the Todo Controller.
     * 
     * @param todoService
     */
    constructor(private readonly todoService: TodoService) {}

}
