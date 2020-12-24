import { computed, SetupContext } from "vue";

export function useModel(val: any, ctx: SetupContext, key = "modelValue") {
	return computed({
		get() {
			return val;
		},
		set(val) {
			ctx.emit(`update:${key}`, val);
		},
	});
}
