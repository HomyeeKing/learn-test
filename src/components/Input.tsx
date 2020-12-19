import { defineComponent, ref } from "vue";

export default defineComponent({
	name: "ButtonTSX",
	props: {
		name: String,
		modelValue: String,
	},
	emits: ["update:modelValue", "click"],
	setup(props, { emit }) {
		return () => (
			<>
				<input
					type="text"
					value={props.modelValue}
					onInput={(e: Event) => {
						console.log((e.target as any).value);
					}}
				/>
			</>
		);
	},
});
