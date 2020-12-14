import { defineComponent, ref } from "vue";

export default defineComponent({
	name: "ButtonTSX",
	props: {
		name: String,
	},
	emits: ["s"],
	setup(props, { emit }) {
		const count = ref(1);
		const text = ref("sss");
		emit("s");
		return () => (
			<>
				<h1>{props.name}</h1>
				<span>test</span>
				<button class="button" onClick={() => count.value++}>
					{count.value}
				</button>
				<input type="text" v-model={[text.value, "value"]} />
			</>
		);
	},
});
