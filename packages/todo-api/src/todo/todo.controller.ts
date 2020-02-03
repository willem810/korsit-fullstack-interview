import { Controller, Get, Post, Delete, Param, Body, Res, HttpCode } from '@nestjs/common';
import { response } from 'express';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {

    /**
     * Inject the Todo Service
     * into the Todo Controller.
     * 
     * @param todoService
     */
    constructor(private readonly todoService: TodoService) { }

    /**
     * Endpoint used to check the health of this API
     * @returns Status code 200(OK) if service is up and available
     */
    @Get()
    @HttpCode(200)
    health() {        
    }

    /**
     * Find all todos 
     * @returns a list of all todos
     */
    @Get('find')
    findAll() {
        return this.todoService.findAll();
    }

    /**
     * Returns a todo with given ID
     * @param params List of all query parameters. Required is the ID parameter
     * @returns if Todo is found with given ID, returns the corresponding ToDO
     */
    @Get('find/:id')
    find(@Param() params) {
        console.log(params.id);
        return this.todoService.find(params.id);
    }

    /**
     * Creates a new Todo
     * @param createTodoDto The DTO required to create a ToDo
     * @returns the ID of the newly created DTO
     */
    @Post('/create')
    async create(@Body() createTodoDto) {
        console.log(createTodoDto);
        var newTodo = await this.todoService.create(createTodoDto);
        return newTodo.id;
    }

    /**
     * Updates a Todo with new values
     * @param updateTodoDto The DTO required to update a ToDo
     * @returns the ID of the updated ToDo
     */
    @Post('/update')
    async update(@Body() updateTodoDto) {
        var newTodo = await this.todoService.update(updateTodoDto);
        return newTodo.id;
    }

    /**
     * Delets a Todo
     * @param params List of all query parameters. Required is the ID parameter
     */
    @Delete('delete/:id')
    delete(@Param() params) {
        this.todoService.delete(params.id);
    }


}
