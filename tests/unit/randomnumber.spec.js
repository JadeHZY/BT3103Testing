import { shallowMount } from '@vue/test-utils'
import RandomNumber from '@/components/RandomNumber.vue'

test('if Button Clicked the random number should be 1-10', async () => {
    const wrapper = shallowMount(RandomNumber)
    await wrapper.find('button').trigger('click')
    const random_number=parseInt(wrapper.find('h2').text())
    expect(random_number).toBeGreaterThanOrEqual(1)
    expect(random_number).toBeLessThanOrEqual(10)
  })
  