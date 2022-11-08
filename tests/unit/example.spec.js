import { shallowMount } from '@vue/test-utils'
import RandomNumber from '@/components/RandomNumber.vue'
//import { random } from 'core-js/core/number'

describe('RandomNumber.', () => {
  it('By default the random number should be 0', () => {
    const wrapper = shallowMount(RandomNumber)
    expect(wrapper.text()).toMatch('0')
  })
})

