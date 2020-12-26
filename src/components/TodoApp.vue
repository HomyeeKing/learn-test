<template>
  <div v-for="item in todos" :key="item.id">
    text:{{ item.text }}
    <input type="checkbox" v-model="item.completed" />
  </div>
</template>

<script lang='ts'>
import { defineComponent } from "vue";
export default defineComponent({
  name: "TodoApp",
  data: () => ({
    todos: [
      {
        id: 1,
        text: "learn vue3.js",
        completed: true,
      },
    ],
  }),
});
</script>

