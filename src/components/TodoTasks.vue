<!--
  Displays the two lists of tasks.
  -->

<template>
      <div class="task-container">
      <todo-list :done="false"></todo-list>
      <todo-list :done="true"></todo-list>
    </div>

</template>

<script>
  import TodoTask from "./TodoTask";
  import store from "@/Store/Store";
  import {mapMutations, mapGetters, mapActions} from "vuex";
  import MaxTween from "gsap";
  import TodoList from "./TodoList";
  import BaseTodoButton from "./BaseTodoButton";
  export default {
    name: "TodoTasks",
    data: () => {
      return {
        taskInput: "",
        currentShow: 0,
        show: true
      };
    },
    store,
    components: {BaseTodoButton, TodoList, TodoTask },
    methods: {
      ...mapMutations(["ADD_TASK", "DELETE_TASK", "INC_NEXT_KEY"]),
    },
    computed: {
      ...mapGetters(["doneTasks", "undoneTasks"])
    }
  };
</script>

<style scoped>
  .task-container {
    width:100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>
