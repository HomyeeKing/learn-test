import { defineComponent, ref } from "vue";
import { Button, Input } from "ant-design-vue";
import Ant from "@/components/ant";
export default defineComponent({
	name: "app",
	setup() {
		const val = ref("asdas");
		return () => (
			<>
				<Ant onClick={() => alert("1")} onClickOnce={() => alert("2")} />
				<span>{val.value}</span>
			</>
		);
	},
});
