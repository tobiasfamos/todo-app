<template>
  <div>
    <base-todo-text>
      <slot></slot>
    </base-todo-text>
    <base-todo-text>
      {{ info }}
    </base-todo-text>
  </div>
</template>

<script>
import BaseTodoText from "./BaseTodoText";
import store from "@/Store/Store";
import {mapGetters} from "vuex";

export default {
    name: "TodoInfo",
  components: {BaseTodoText},
  store,
  props:{
      infoKey:{
        type:String,
        required: true,
      }
  },
  computed:{
      ...mapGetters(["getTaskById","currentTodoEdit"]),
      info(){
        return this.getTaskById(this.currentTodoEdit)[this.infoKey];
      }
  }
}
</script>

<style scoped></style>
