import Vue from 'vue'
import { mount, shallowMount } from '@vue/test-utils'
import TodoApp from "../../../src/components/TodoApp";


describe('TodoApp.vue', () => {
  it('should render a title', () => {
    const wrapper = shallowMount(TodoApp,{ data:() => {
      return {
        title: "Todo App"
      }
    }});
    expect(wrapper.find('h1').text()).toEqual("Todo App")
  });

  it('should have two todo Lists', () => {
    const wrapper = mount(TodoApp,);
    expect(wrapper.find(TodoList)).toHaveLength(2);
  });

  it('should have a todo list with title done', () => {
    const wrapper = mount(TodoApp,);
    expect(wrapper.find(TodoList))
  });

  it('should have a todo list with title undone', () => {
    const wrapper = mount(TodoApp,);
    expect(wrapper.find(TodoList)).

    })
  });


});


