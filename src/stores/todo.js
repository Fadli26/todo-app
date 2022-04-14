import { defineStore } from "pinia";

export const useTodoStore = defineStore({
  id: "todos",
  state: () => ({
    todos: [],
  }),
  getters: {
    getTodos: (state) => state.todos,
    getTodosCompleted: (state) => state.todos.filter((todo) => todo.status),
    getTodosUncompleted: (state) => state.todos.filter((todo) => !todo.status),
  },
  actions: {
    changeStatus(index) {
      this.todos[index].status = !this.todos[index].status;
    },
    addTodo(title) {
      const id = this.todos.length;
      const todo = {
        id: id + 1,
        title,
        status: false,
      };
      this.todos.push(todo);
    },
    deleteTodo(id) {
      const todoIndex = this.todos.findIndex((todo) => todo.id == id);
      this.todos.splice(todoIndex, 1);
    },
  },
});
