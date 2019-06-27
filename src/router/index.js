import Vue from "vue";
import Router from "vue-router";
import TodoApp from "../components/TodoApp";
import TodoLogin from "../components/TodoLogin";
import store from "@/Store/Store";

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/login",
      name: "TodoLogin",
      component: TodoLogin,
      meta: {
        authorize: false
      }
    },
    {
      path: "/",
      name: "TodoApp",
      component: TodoApp,
      meta: {
        authorize: true
      }
    }
  ]
});
router.beforeEach((to, from, next) => {
  if (to.meta.authorize) {
    if (store.state.token) {
      next();
    } else {
      next("/login");
    }
  }
  next();
});

export default router;
