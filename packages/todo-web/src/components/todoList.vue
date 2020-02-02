<template>
  <div class="list-wrapper">
    <ul
      class="d-flex flex-column-reverse todo-list"
      v-for="(todo, i) in todos"
      v-bind:key="`${i}-${todo.id}`"
    >
      <todo v-bind:todo="todo" v-on:del-todo="deleteTodo" v-on:update-todo="updateTodo" />
    </ul>
  </div>
</template>

<script>
import todo from "./todo.vue";

export default {
  name: "todoList",
  components: {
    todo
  },
  props: ["todos"],
  mounted() {
    window.console.log(this.todos);
  },
  methods: {
    deleteTodo(id) {
      this.$emit("del-todo", id);
    },
    updateTodo(todo) {
      this.$emit("update-todo", todo);
    }
  }
};
</script>