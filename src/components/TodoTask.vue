<template>
  <div
    class="task"
    @click="SET_CURRENT_EDIT({ id: taskKey })"
    :class="{ done: done }"
    ref="task"
  >
    <div class="todo-part" @click.stop="">
      <base-todo-checkbox :done="done" @todoChecked="todoChecked" />
    </div>
    <div class="todo-part">
      <base-todo-text>
        {{ description }}
      </base-todo-text>
    </div>
    <div  class="todo-part">
      <base-todo-text>
        {{ readableDate }}
      </base-todo-text>
    </div>
    <div class="todo-part">
      <base-todo-close @todoRemove="remove"></base-todo-close>
    </div>
  </div>
</template>

<script>
import { mapActions, mapMutations } from "vuex";
import BaseTodoClose from "./BaseTodoClose";
import BaseTodoCheckbox from "./BaseTodoCheckbox";
import BaseTodoText from "./BaseTodoText";
import moment from "moment";

export default {
  name: "TodoTask",
  components: {
    BaseTodoText,
    BaseTodoCheckbox,
    BaseTodoClose
  },
  props: {
    description: {
      type: String,
      default: ""
    },
    date: {
      type: String,
      default: null
    },
    taskKey: {
      type: Number,
      required: true
    },
    done: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    ...mapMutations(["DELETE_TASK", "INVERT_DONE", "SET_CURRENT_EDIT"]),
    ...mapActions(["deleteTask", "updateTask"]),
    remove() {
      this.deleteTask({ id: this.taskKey });
    },
    todoChecked() {
      this.updateTask({ id: this.taskKey, done: !this.done });
    }
  },
  computed: {
    readableDate() {
      return moment(this.date).format(this.$store.state.dateTemplate);
    },
  }
};
</script>

<style scoped>
.task {
  display: flex;
  justify-content: space-between;
  width: 100%;
  border: #d3d3d3 1px solid;
  padding: 10px;
  margin: 5px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
}
.todo-part {
  width: 24%;
  overflow: hidden;
}
</style>
