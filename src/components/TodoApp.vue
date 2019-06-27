<template>
  <div class="todo-app">
    <todo-input></todo-input>
    <todo-tasks>
    </todo-tasks>
  </div>
</template>

<script>
    import TodoList from "./TodoList";
    import TodoInput from "./TodoInput";
    import TodoTasks from "./TodoTasks";
    import store from "@/Store/Store";
    import {mapActions} from "vuex";

    export default {
      name: "TodoApp",
      components: {TodoTasks, TodoInput, TodoList},
      store,
      methods:{
        ...mapActions(["fetchTasks"])
      },
      mounted(){
        this.fetchTasks();
      }
    }
</script>

<style >
  .todo-app{
    display:flex;
    width:50%;
    flex-direction: column;
    justify-content: center;
    font-size:17px;

  }


</style>
