import { mount } from "@vue/test-utils";
import TodoApp from "@/components/TodoApp.vue";
test("renders a todo", () => {
	const wrapper = mount(TodoApp);
	const todo = wrapper.get('[data-test="todo"]');
	expect(todo.text()).toBe("learn vue3.js");
});
