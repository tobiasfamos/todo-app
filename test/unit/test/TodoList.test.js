import Vue from 'vue'
import { shallowMount } from '@vue/test-utils'
import TodoApp from "../../../src/components/TodoApp";


describe('TodoApp.vue', () => {
  it('should render a title', () => {
    const wrapper = shallowMount(TodoApp,{ data:() => {
      return {
        title: "Todo App"
      }
    }});
    expect(wrapper.find('h1').text()).toEqual("Todo App")
  })
})


