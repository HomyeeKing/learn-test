import { shallowMount } from '@vue/test-utils'
import Button from '@/components/Button.tsx'

describe('test button', () => {
	const wrapper = shallowMount(Button)

	it('has a button', () => {
		expect(wrapper.find('.button')).toBeTruthy()
	})
	it('should make value increment', async () => {
		await wrapper.find('.button').trigger('click')
		expect(wrapper.find('button').text()).toBe('2')
	})
	it('should render prop correctly', () => {
		const name = 'homy'
		const wrapper = shallowMount(Button, {
			props: { name }
		})
		expect(wrapper.find('h1').text()).toBe(name)
	})
	it('should bind value to input by v-model', async () => {
		const textInput = wrapper.find('input[type="text"]')
		await textInput.setValue('some value')

		expect(wrapper.find('input[type="text"]').element.innerHTML).toBe('some value')
	})
})
