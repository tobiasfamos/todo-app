<template>
  <div>
    <todo-info info-key="id">
      Id
    </todo-info>
    <todo-edit-block
      input-key="description"
      type="text"
      @todoNext="editSave"
      :autofocus="true"
    >
      Description
    </todo-edit-block>
    <todo-edit-block input-key="date" type="date" @todoNext="editSave">
      Date
    </todo-edit-block>
    <todo-info info-key="done">
      Done
    </todo-info>
    <todo-info info-key="createdAt" :date="true">
      Created
    </todo-info>
    <todo-info info-key="updatedAt" :date="true">
      Last Updated
    </todo-info>
    <div class="button-container">
      <base-todo-button @todoButtonClicked="editSave">
        Save
      </base-todo-button>
      <base-todo-button @todoButtonClicked="editDiscard">
        Cancel
      </base-todo-button>
    </div>
  </div>
</template>

<script>
import TodoEditBlock from "./TodoEditBlock";
import store from "@/Store/Store";
import { mapActions, mapGetters, mapMutations } from "vuex";
import BaseTodoButton from "./BaseTodoButton";
import moment from "moment";
import TodoInfo from "./TodoInfo";
export default {
  name: "TodoEdit",
  components: { TodoInfo, BaseTodoButton, TodoEditBlock },
  store,
  computed: {
    ...mapGetters(["currentTodoEdit", "getTaskById"])
  },
  methods: {
    ...mapMutations(["UPDATE_LOGIN_INPUT"]),
    ...mapActions(["editSave", "editDiscard"]),
    setInputFieldValues(id) {
      if (id) {
        let task = this.getTaskById(id);
        this.UPDATE_LOGIN_INPUT({
          inputKey: "description",
          value: task.title
        });
        this.UPDATE_LOGIN_INPUT({
          inputKey: "date",
          value: moment(task.date).format("YYYY-MM-DD")
        });
      }
    }
  },
  watch: {
    currentTodoEdit(newId) {
      this.setInputFieldValues(newId);
    }
  },
  created(){
    this.setInputFieldValues(this.$store.state.currentTodoEdit)
  }
};
</script>

<style scoped>
.button-container {
  float: right;
  margin-top: 20px;
}
</style>
