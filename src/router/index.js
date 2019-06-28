import Vue from "vue";
import Router from "vue-router";
import TodoLogin from "../components/TodoLogin";
import store from "@/Store/Store";
import TodoBlock from "../components/TodoBlock";

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
      name: "TodoBlock",
      component: TodoBlock,
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
