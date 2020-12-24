import { defineComponent } from "vue";
import { Button, Input, Modal } from "ant-design-vue";
export default defineComponent({
	name: "AntButton",
	// props: {
	// 	onClickOnce: Function,
	// 	onClick: Function,
	// },
	props: ["on-click"],
	setup(props, ctx) {
		return () => <Button onClick={() => ctx.emit("click")}>ss</Button>;
	},
});
