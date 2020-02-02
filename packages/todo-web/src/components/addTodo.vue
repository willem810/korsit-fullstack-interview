<template>
  <div>
    <div class="add-items d-flex">
      <input
        ref="title"
        type="text"
        class="form-control todo-list-input"
        placeholder="What do you need to do today?"
      />
      <button
        class="add btn btn-primary font-weight-bold todo-list-add-btn"
        v-on:click="addTodo"
      >Add</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "addTodo",
  methods: {
    addTodo() {
      var todo = {
        title: this.$refs.title.value,
        isDone: false
      };
      this.$emit("add-todo", todo);
    }
  }
};
</script>