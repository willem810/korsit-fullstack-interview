# korsit-fullstack-interview

Hello there, Korsit candidate! This is the interview assignment for potential full stack developers, and today you'll be creating the following:

* A CRUD API for a Todo-list, using the Nest.JS framework.
* A simple front-end to list, create, update and delete Todo items, using Vue.js

Assignment details can be found in ASSIGNMENT.md, but before you can start completing those, you'll need to be able to run the front-end and back-end.

I've created this boilerplate for you in a single mono-repo, so you don't have to set up everything yourself :)

## Requirements

* Node.JS 12.x (LTS) or 13.x (Current)
* Git
* An editor. I recommend using VSCode (I have included some sensible workspace settings), but feel free to use whatever you like :)
* (Optional) Docker, docker-compose

## Install dependencies

To install all dependencies, simply run the following command in a shell:

```shell
$ npx lerna bootstrap
```

## Running the front-end and API


### Front-end
To start the front-end, run the following command in a shell:

```shell
$ npm run dev:web
```

The front-end will be available at http://localhost:8080

### API

To start the API, open up another shell and run the following command:

```shell
$ npm run dev:api
```

The API will be available at http://localhost:3000

## Code & Documentation

Both projects will run in watch mode, so saving your changes is enough to reload the app you're editing.

### Front-end

For the Vue front-end, documentation can be found at https://vuejs.org/v2/guide/index.html. If you're already familiar with the basics, I suggest you look at the entry for **Single File Components** to learn how to create and structure components for your Todo List.

The front-end code can be found in `packages/todo-web`.

### API
For the NestJS API, documentation can be found at https://docs.nestjs.com/.
You'll want to look mostly at the **Controllers** and **Providers** sections for implementing your CRUD API. 

I've already scaffolded the controller and service for you in `packages/todo-api/todo/`.

## The assignment

Assignment requirements and details can be found in ASSIGNMENT.md



