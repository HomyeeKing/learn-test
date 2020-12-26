<template>
  <div>
    <input
      type="text"
      :value="title"
      @input="$emit('update:title', $event.target.value)"
    />
    <Button @welcome="hello" />
  </div>
</template>

<script lang='ts'>
import Button from "./Button.vue";
import { defineComponent } from "vue";
export default defineComponent({
  name: "Input",
  components: { Button },
  props: {
    title: String,
  },
  emits: ["update:title"],
  methods: {
    hello() {
      alert("hello");
    },
  },
});
</script>

