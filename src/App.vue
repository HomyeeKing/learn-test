<template>
  <div><Ant :onClickOnce="antClick" /></div>
</template>

<script lang='ts'>
import { defineComponent } from "vue";
import Ant from "@/components/ant";

export default defineComponent({
  name: "App",
  components: { Ant },
  methods: {
    antClick() {
      alert(1);
    },
    antClickProp() {
      alert(2);
    },
  },
});
</script>

