<template>
  <div>
    <base-todo-button class="button" @todoButtonClicked="logoutClicked">
      Logout
    </base-todo-button>
    <base-todo-button class="button" @todoButtonClicked="settingsClicked">
      Settings
    </base-todo-button>
  </div>
</template>

<script>
import BaseTodoButton from "./BaseTodoButton";
export default {
  name: "TheHeader",
  components: { BaseTodoButton },
  methods: {
    logoutClicked() {
      localStorage.removeItem("token");
      this.$router.push("/login");
    },
    settingsClicked(){
      this.$router.push("/settings")
    }
  }
};
</script>

<style scoped>
.button {
  float: right;
  margin-right: 10vw;
}
</style>
