import Vue from 'vue'
import { mount, shallowMount } from '@vue/test-utils'
import TodoApp from "../../../src/components/TodoApp";
import Undone from "../../../src/components/Undone";
import Done from "../../../src/components/Done";


describe('TodoApp.vue', () => {
  it('should render a title', () => {
    const wrapper = shallowMount(TodoApp,{ data:() => {
      return {
        title: "Todo App"
      }
    }});
    expect(wrapper.find('h1').text()).toEqual("Todo App")
  });

  it('should have a component undone', () => {
    const wrapper = mount(TodoApp,);
    expect(wrapper.find(Undone)).toHaveLength(1);
  });

  it('should have a component done',() => {
    const wrapper = mount(TodoApp);
    expect(wrapper.find(Done)).toHaveLength(1);
  });
});


