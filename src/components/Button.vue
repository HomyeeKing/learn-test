<template>
  <div>
    <button class="button" @click="$emit('welcome')" v-bind="$attrs">
      click me
    </button>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from "vue";
export default defineComponent({
  name: "Button",
  inheritAttrs: false,
  props: {
    name: String,
    ciad: String,
    onWelcome: Function,
  },
  emits: ["welcome"],
  setup(_, { attrs }) {
    console.log(attrs);
  },
  data: () => ({
    text: "",
  }),
});
</script>

