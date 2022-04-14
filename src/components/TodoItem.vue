<template>
  <div class="flex items-center justify-between p-2 border-b border-slate-400">
    <div>
      <input
        type="checkbox"
        class="mr-2 focus:outline-none cursor-pointer accent-blue-500"
        :id="index"
        :checked="todo.status"
        @change="changeStatus(index)"
      />
      <label
        :for="index"
        class="font-medium text-slate-900"
        :class="{ 'line-through': todo.status, 'text-slate-500': todo.status }"
        >{{ todo.title }}</label
      >
    </div>
    <div>
      <button
        type="button"
        class="hover:text-rose-500"
        @click="$emit('deleteTodo', todo.id)"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
import { useTodoStore } from "../stores/todo";
export default {
  props: ["todo", "index"],
  emits: ["deleteTodo"],
  setup() {
    const useTodo = useTodoStore();
    const changeStatus = (index) => {
      useTodo.changeStatus(index);
    };

    return { changeStatus };
  },
};
</script>
