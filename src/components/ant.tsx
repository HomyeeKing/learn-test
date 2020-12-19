import {defineComponent} from 'vue'
import { Button, Input, Modal } from 'ant-design-vue'
export default defineComponent({
    name:"AntButton",
    setup(){
        return ()=>(<Button>ANT</Button>)
    }
})