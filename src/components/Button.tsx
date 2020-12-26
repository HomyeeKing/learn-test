import { defineComponent, ref } from "vue";

export default defineComponent({
	name: "ButtonTSX",
	props: {
		name: String,
		modelValue: String,
	},
	emits: ["update:modelValue"],
	setup(props) {
		const count = ref(1);
		const text = ref("sss");
		const handleChange = (e: Event) => {
			console.log(e);
		};
		return () => (
			<>
				<h1>{props.name}</h1>
				<span>{props.modelValue}</span>
				<button class="button" onClick={() => count.value++}>
					{count.value}
				</button>
				<input type="text" v-model={text.value} onChange={handleChange} />
			</>
		);
	},
});
