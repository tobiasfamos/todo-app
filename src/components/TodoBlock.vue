<template>
  <div class="flex">
    <todo-app class="list" />
    <todo-edit class="edit" v-show="$store.state.currentTodoEdit" />
  </div>
</template>

<script>
import TodoApp from "./TodoApp";
import TodoEdit from "./TodoEdit";
import store from "@/Store/Store";
export default {
  name: "TodoBlock",
  store,
  components: { TodoApp, TodoEdit }
};
</script>

<style scoped>
.flex {
  display: flex;
  flex-direction: row;
  align-content: space-around;
  justify-content: space-between;
}
.list {
  width: 50vw;
  margin: 5vw;
}
.edit {
  width: 30vw;
  margin: 5vw;
}
</style>
