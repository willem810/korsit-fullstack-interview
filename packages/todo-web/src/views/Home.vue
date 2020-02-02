<template>
  <div id="app" class="container">
    <div class="page-content page-container" id="page-content">
      <div class="padding">
        <div class="row container d-flex justify-content-center">
          <div class="col-lg-12">
            <div class="card px-3">
              <div class="card-body">
                <h4 class="card-title">Todo list</h4>
                <addTodo v-on:add-todo="addTodo" />
                <todoList
                  v-bind:todos="todos"
                  v-on:del-todo="deleteTodo"
                  v-on:update-todo="updateTodo"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import todoList from "../components/todoList";
import addTodo from "../components/addTodo";
import axios from "axios";
import * as constants from "../constants";

export default {
  components: { todoList, addTodo },
  data() {
    return {
      todos: []
    };
  },
  beforeMount() {
    this.getTodos();
  },
  methods: {
    getTodos() {
      window.console.log("Getting todos");
      axios
        .get(constants.BACKEND_ADRES + "/todo/find")
        .then(res => {
          this.todos = res.data;
        })
        .catch(err => window.console.log(err));
    },
    getTodo(id) {
      axios
        .get(constants.BACKEND_ADRES + "/todo/find/" + id)
        .then(res => (this.todos = [...this.todos, res.data]))
        .catch(err => window.console.log(err));
    },
    addTodo(todo) {
      const { title, isDone } = todo;
      axios
        .post(constants.BACKEND_ADRES + "/todo/create", {
          title,
          isDone
        })
        .then(res => {
          todo.id = res.data;
          this.todos.push(todo);
        })
        .catch(err => window.console.log(err));
    },
    updateTodo(todo) {
      window.console.log("Updating todos");
      const { id, title, isDone } = todo;
      axios
        .post(constants.BACKEND_ADRES + "/todo/update", {
          id,
          title,
          isDone
        })
        .catch(err => window.console.log(err));
    },
    deleteTodo(id) {
      window.console.log("Deleting todos");
      axios
        .delete(constants.BACKEND_ADRES + "/todo/delete/" + id)
        .then(() => {
          this.todos = this.todos.filter(todo => todo.id !== id);
        })
        .catch(err => window.console.log(err));
    }
  }
};
</script>