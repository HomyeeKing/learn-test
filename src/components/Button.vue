<template>
    <div>
        <button class="button" @click="()=> value++">click me </button>
    </div>  
</template>

<script lang='ts'>
import { defineComponent,ref } from 'vue'
export default defineComponent({
   name:'Button',
   setup(){
       const value = ref(1)
       return {
           value
       }
   }
});
</script>

<style scoped lang="scss">

</style>