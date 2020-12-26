# learn-test

单元测试是开发大型项目的基本功，尤其涉及到自定义封装一些组件的时候，单元测试异常重要，所以，今天好好学习一下单元测试。

> 跟着[官方文档](https://vue-test-utils.vuejs.org/zh/guides/#%E8%B5%B7%E6%AD%A5)学习单元测试，但是注意官方文档可能有些地方有些老旧，相应的 api 应该是被废弃了，记得检查文档的(api)(https://vue-test-utils.vuejs.org/zh/api/#mount),包括下面的**Wrapper** 和**WrapperArray\*\* 处

## 初始化

1. 如果想用 vue add [plugin]的方式，必须是一个 vuecli 启动的项目，比如一个 vite app 就不可以
2. 创建好一个 vuecli 项目之后，运行`vue add unit-jest`，安装相应依赖，或者你在初始化的时候选择单元测试的相关配置，这部分脚手架很详细 不再赘述

## 跑通第一个测试用例

如果你初始化的时候就选择了相关的测试配置，比如本项目选用最基本的单元测试 + jest 来进行测试，那么项目生成的时候根目录会自动有一个`tests`文件夹，
里面还包含一个`unit`文件夹包含一个测试文件`example.spec.ts`，里面是一个单元测试的样例，里面内容如下：

```ts
import { shallowMount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";

describe("HelloWorld.vue", () => {
	it("renders props.msg when passed", () => {
		const msg = "new message";
		const wrapper = shallowMount(HelloWorld, {
			props: { msg },
		});
		expect(wrapper.text()).toMatch(msg);
	});
});
```

是一个很基础的测试`HelloWorld.vue`组件的测试文件，测试传入的 msg 属性是否正确应用到 helloworld 组件上

只需运行`npm run unit:test`即可看到一条测试通过的结果

## 写一个自己的单元测试

上面只是一个基础的内容变换的检测，我们可以动手写一个带有交互的测试文件，同样写一个简单地，我们在`components`文件夹下创建 Button.vue 文件，然后对应写一个`button.spec.ts`文件

内容如下：

```ts
import { shallowMount } from "@vue/test-utils";
import Button from "@/components/Button.vue";

describe("test button", () => {
	const wrapper = shallowMount(Button);

	it("has a button", () => {
		expect(wrapper.find(".button")).toBeTruthy();
	});
	it("should make value increment", () => {
		wrapper.find(".button").trigger("click");
		expect(wrapper.vm.value).toBe(1);
	});
});
```

我们通过 trigger 来模拟用户点击行为，这部分同样很基础，只需要多看 api 文档就行。

## 跑通 tsx 组件的单元测试

上面的都是 vue 文件的测试，有很多文档支撑，只不过需要多看 api 来熟悉，而 vue3 之后，我们可以愉快地书写 tsx，下面来探索一下 tsx 文件的单元测试，

项目 tsx 支持不再赘述

首先同样创建一个 tsx 文件，和 button.vue 一样,简单创建一个`Button.tsx`文件

然后测试文件里只需删除.vue 文件后缀 即可识别为.tsx 文件

> 实测 如果根项目有 jest.config 文件会影响 vue-jest 的配置，会造成 bug

```ts
// button.spec.ts
import { shallowMount } from "@vue/test-utils";
import Button from "@/components/Button.tsx";

describe("test button", () => {
	const wrapper = shallowMount(Button);

	it("has a button", () => {
		expect(wrapper.find(".button")).toBeTruthy();
	});
	it("should make value increment", async () => {
		await wrapper.find(".button").trigger("click");
		expect(wrapper.find(".button").text()).toBe("2");
	});
});
```

运行一下，发现测试通过 美滋滋~

## vue 和 tsx 单元测试 wrapper 的不同写法

|描述| vue | tsx|

| ---| ---| ---|
| 获取所有的静态节点 | wrapper.vm.content | wrapper.text() |

| | | |

| | | |
