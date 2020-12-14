<template>
  <div>
    <h1>{{ name }}</h1>
    <button class="button" @click="() => value++">{{ value }}</button>
    <input type="text" class="input" v-model="text" />
  </div>
</template>

<script lang='ts'>
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "Button",
  props: {
    name: String,
  },
  setup() {
    const value = ref(1);
    return {
      value,
    };
  },
  data: () => ({
    text: "",
  }),
});
</script>

<style scoped lang="scss">
</style>