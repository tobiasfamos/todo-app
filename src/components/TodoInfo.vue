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
import { mapGetters } from "vuex";
import moment from "moment";

export default {
  name: "TodoInfo",
  components: { BaseTodoText },
  store,
  props: {
    infoKey: {
      type: String,
      required: true
    },
    date: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    ...mapGetters(["getTaskById", "currentTodoEdit"]),
    info() {
      let info = this.getTaskById(this.currentTodoEdit)[this.infoKey];
      if (this.date) {
        info = moment(info).format("DD-MM-YYYY");
      }
      return info;
    }
  }
};
</script>

<style scoped></style>
