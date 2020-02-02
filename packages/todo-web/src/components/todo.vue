<template>
  <li>
    <div class="form-check">
      <label class="form-check-label">
        <input
          class="checkbox"
          type="checkbox"
          v-on:change="toggleIsDone"
          v-bind:checked="todo.isDone"
        />
        {{todo.title}}
        <i class="input-helper"></i>
      </label>
    </div>
    <i class="remove" v-on:click="deleteTodo">X</i>
  </li>
</template>
          

<script>
export default {
  name: "Todo",
  props: ["todo"],
  methods: {
    toggleIsDone() {
      this.todo.isDone = !this.todo.isDone;
      this.$emit('update-todo', this.todo);
    },
    deleteTodo() {
      this.$emit('del-todo', this.todo.id);
    }
  }
};
</script>
