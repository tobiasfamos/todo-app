<template>
  <div>
    <todo-login-block class="el" input-key="username">
      Username
    </todo-login-block>
    <todo-login-block class="el" input-key="password" @todoNext="loginClicked">
      Password
    </todo-login-block>
    <base-todo-button class="el" @todoButtonClicked="loginClicked">
      Login</base-todo-button
    >
  </div>
</template>

<script>
import TodoLoginBlock from "./TodoLoginBlock";
import BaseTodoButton from "./BaseTodoButton";
import store from "@/Store/Store";
import { mapActions, mapGetters, mapMutations } from "vuex";
import router from "@/router/index";

export default {
  name: "TodoLogin",
  store,
  components: { BaseTodoButton, TodoLoginBlock },
  methods: {
    ...mapActions(["login",]),
    ...mapMutations(["RESET_LOGIN_INPUT"]),
    loginClicked() {
      this.login({
        username: this.$store.state.loginInput["username"],
        password: this.$store.state.loginInput["password"]
      });

      this.RESET_LOGIN_INPUT();
    }

  },
  computed: {
    ...mapGetters(["token"])
  },
  watch: {
    token() {
      router.push("/");
    }
  }
};
</script>

<style scoped>
.el {
  margin: 10px;
}
</style>
