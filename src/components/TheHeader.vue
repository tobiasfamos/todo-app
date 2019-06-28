<template>
  <base-todo-button
    class="button"
    @todoButtonClicked="buttonClicked"
  >
    Logout
  </base-todo-button>
</template>

<script>
import BaseTodoButton from "./BaseTodoButton";
export default {
  name: "TheHeader",
  components: { BaseTodoButton },
  methods: {
    buttonClicked() {
      localStorage.removeItem("token");
      this.$router.push("/login");
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
