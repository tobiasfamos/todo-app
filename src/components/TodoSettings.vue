<template>
  <div class="flex-vertical">
    <todo-edit-block input-key="settingsDateTemplate" @todoNext="save">
      Date Template
    </todo-edit-block>
    <div class="flex-horizontal">
      <base-todo-button @todoButtonClicked="cancel">
        Cancel
      </base-todo-button>
      <base-todo-button @todoButtonClicked="save">
        Save
      </base-todo-button>
    </div>
  </div>
</template>

<script>
import TodoEditBlock from "./TodoEditBlock";
import store from "@/Store/Store";
import { mapActions } from "vuex";
import TheHeader from "./TheHeader";
import BaseTodoButton from "./BaseTodoButton";
export default {
  name: "TodoSettings",
  store,
  components: { BaseTodoButton, TheHeader, TodoEditBlock },
  methods: {
    ...mapActions(["settingsSave"]),
    save() {
      this.settingsSave();
      this.$router.push("/");
    },
    cancel() {
      this.$router.push("/");
    }
  }
};
</script>

<style scoped></style>
