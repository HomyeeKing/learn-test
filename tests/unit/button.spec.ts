import { shallowMount } from '@vue/test-utils'
import Button from '@/components/Button.tsx'

describe('test button', () => {
	const wrapper = shallowMount(Button)

	it('has a button', () => {
		expect(wrapper.find('.button')).toBeTruthy()
	})

	it('should bind value to input by v-model', async () => {
		const textInput = wrapper.find<HTMLInputElement>('.input')
		await textInput.setValue('some value')
		expect(textInput.element.value).toBe('some value')
	})
})
