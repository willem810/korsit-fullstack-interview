# Assignment

As explained in README.md, your assignment will be to create a CRUD API and a front-end consuming that API, to create a TODO application. The requirements for this application are in a MoSCoW (Must-have, should-have, could-have, would-have) format.

## Requirements

### Must-have

* **[**API]** All necessary CRUD routes for Todo items
    * index
    * get
    * create
    * update
    * delete
* **[Front-end]** Fetch and display all items from Todo API.
* **[Front-end]** Create a todo item using the Todo API
* **[Front-end]** Update a todo item using the Todo API
* **[Front-end]** Delete a todo item using the Todo API

### Should-have
* **[API]** Use an ORM and a database to store and persist Todo entities. I recommend using TypeORM and SQLite for simplicity's sake. For docs, see: https://docs.nestjs.com/recipes/sql-typeorm
* **[Front-end]** Implement the UI using a UI framework that integrates with Vue, such as BootstrapVue or Vuetify.


### Could-have
* **[API]** Implement a simple unit test in `todo.controller.spec.ts` by mocking the `TodoService` method and calling the associated controller method, and assert that it returns the correct data.
* **[Front-end]** Implement a responsive layout that works correctly on desktop and mobile.

### Would-have
* **[DevOps]** Create Dockerfiles for both the front-end and API
* **[DevOps]** Create a `docker-compose.yml` with containers for said Dockerfiles, as well as a MySQL container to run said application with a single `docker-compose up -d` command.