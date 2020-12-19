import { defineComponent } from "vue";

import Button from "@/components/Button.vue";
import Ant from '@/components/ant'
export default defineComponent({
	name: "app",
	data: () => ({
		text: "s",
		visible: true,
	}),
	components: { Button },
	methods: {
		foo() {
			return 1;
		},
	},
	directives: {
		focus: {
			mounted(el: HTMLInputElement) {
				el.focus();
			},
		},
		for: (el, binding: any) => {
			console.log(binding);
			const instance = binding.instance;
			console.log(instance[binding.value]);
		},
	},
	render() {
		return (
			<>
				<button v-for="text">click me </button>
                <Ant />
			</>
		);
	},
});
