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

    @Get()
    health() {

    }

    @Get('find')
    findAll() {
        return this.todoService.findAll();
    }

    @Get('find/:id')
    find(@Param() params) {
        console.log(params.id);
        return this.todoService.find(params.id);
    }

    @Post('/create')
    async create(@Body() createTodoDto) {
        console.log(createTodoDto);
        var newTodo = await this.todoService.create(createTodoDto);
        return newTodo.id;
    }


    @Post('/update')
    async update(@Body() updateTodoDto) {
        var newTodo = await this.todoService.update(updateTodoDto);
        return newTodo.id;
    }

    @Delete('delete/:id')
    delete(@Param() params) {
        this.todoService.delete(params.id);
    }


}
