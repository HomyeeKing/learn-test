import Ant from '@/components/ant'
import { shallowMount } from '@vue/test-utils'

describe('Ant', () => {
    it("should be exists",()=>{
        const wrapper = shallowMount(Ant)
        expect(wrapper.text()).toBe('ANT')
    })
})
