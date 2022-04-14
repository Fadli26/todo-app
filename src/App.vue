<template>
  <div class="container pt-20">
    <div class="w-full">
      <h1 class="mb-10 text-3xl text-center text-slate-900">Todo</h1>
    </div>
    <div class="flex justify-center">
      <div class="w-full px-4 lg:w-5/12">
        <Input v-model="title" @keyup.enter="addTodo" />
        <div class="mt-2">
          <todo-item
            v-for="(todo, index) in todos"
            :key="index"
            :todo="todo"
            :index="index"
            @delete-todo="deleteTodoById"
          />

          <div class="mt-2.5 flex justify-center gap-2">
            <Button
              class="bg-blue-500 focus:ring-blue-200 hover:bg-blue-600"
              @click="changeActive('all')"
              :class="[active == 'all' ? 'bg-blue-900' : 'opacity-80']"
              >All</Button
            >
            <Button
              class="bg-green-500 focus:ring-green-200 hover:bg-green-600"
              :class="[active == 'completed' ? 'bg-green-900' : 'opacity-80']"
              @click="changeActive('completed')"
              >Completed</Button
            >
            <Button
              class="bg-rose-500 focus:ring-rose-200 hover:bg-rose-600"
              :class="[active == 'uncompleted' ? 'bg-rose-900' : 'opacity-80']"
              @click="changeActive('uncompleted')"
              >Uncompleted</Button
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TodoItem from "./components/TodoItem.vue";
import Button from "./components/Button.vue";
import Input from "./components/Input.vue";
import { useTodoStore } from "./stores/todo";
import { computed, ref } from "vue";
export default {
  components: {
    Input,
    Button,
    TodoItem,
  },
  setup() {
    const useTodo = useTodoStore();
    const active = ref("all");
    const title = ref("");

    const changeActive = (val) => {
      active.value = val;
    };

    const todos = computed(() => {
      if (active.value == "all") {
        return useTodo.getTodos;
      } else if (active.value == "completed") {
        return useTodo.getTodosCompleted;
      } else if (active.value == "uncompleted") {
        return useTodo.getTodosUncompleted;
      }
    });

    const addTodo = () => {
      if (title.value == "") {
        return alert("Type something..");
      }
      useTodo.addTodo(title.value);
      title.value = "";
    };

    const deleteTodoById = (id) => {
      useTodo.deleteTodo(id);
    };

    return {
      todos,
      title,
      addTodo,
      changeActive,
      active,
      deleteTodoById,
    };
  },
};
</script>

<style>
body {
  @apply bg-slate-100/80;
}
</style>


