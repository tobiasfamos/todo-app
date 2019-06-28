<template>
  <div class="flex-vertical whole">
    <div>
      <the-header />
    </div>
    <div class="flex-horizontal">
      <todo-app class="list" />
      <todo-edit class="edit" v-if="$store.state.currentTodoEdit" />
    </div>
  </div>
</template>

<script>
import TodoApp from "./TodoApp";
import TodoEdit from "./TodoEdit";
import store from "@/Store/Store";
import TheHeader from "./TheHeader";
export default {
  name: "TodoBlock",
  store,
  components: { TheHeader, TodoApp, TodoEdit }
};
</script>

<style scoped>
.list {
  width: 50vw;
  margin: 5vw;
}
.edit {
  align-self: flex-start;
  position: sticky;
  width: 30vw;
  margin: 5vw;
}
</style>
