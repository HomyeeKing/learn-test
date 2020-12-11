import { defineComponent,ref } from 'vue'
export default defineComponent({
  name: 'ButtonTSX',
  props:{
    name:String
  },
	setup(props) {
    const count = ref(1)
    const text =ref('')
    return () => (
       <>
       <h1>{props.name}</h1>
         <button>{count.value}</button>
         <input type="text" v-model={[text.value,'value']}/>
      </>
      
      )
	}
})
