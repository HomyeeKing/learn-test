import Ant from '@/components/ant'
import { mount } from '@vue/test-utils'

describe('Ant', () => {
    it("should be exists",()=>{
        const wrapper = mount(Ant)
        expect(wrapper.text()).toBe('ANT')
    })
})
