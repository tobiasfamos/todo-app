import Vuex from "vuex";
import Vue from "vue";
import axios from "axios";
import data from "./data";
import constants from "@/constants";

Vue.use(Vuex);

const state = { ...data };

const getters = {
  tasksByDone: state => done => {
    return state.tasks.filter(task => task.done === done);
  },
  doneTasks() {
    return state.tasks.filter(task => task.done);
  },
  undoneTasks() {
    return state.tasks.filter(task => !task.done);
  },
  token() {
    return state.token;
  },
  getTaskById: state => id => {
    return state.tasks.filter(task => task.id === id)[0];
  }
};

const mutations = {
  ADD_TASK(state, payload) {
    state.tasks.unshift(payload.task);
  },
  DELETE_TASK(state, payload) {
    state.tasks = state.tasks.filter(t => t.id !== payload.id);
  },
  INVERT_DONE(state, payload) {
    state.tasks = state.tasks.map(t => {
      if (t.key === payload.key) {
        t.done = !t.done;
      }
      return t;
    });
    state.tasks[payload.key].done = !state.tasks[payload.index].done;
  },
  INC_NEXT_KEY(state) {
    state.nextKey++;
  },
  SET_DESCRIPTION(state, payload) {
    state.tasks = state.tasks.map(t => {
      if (t.key === payload.key) {
        t.description = payload.description;
      }
      return t;
    });
  },
  SET_DATE(state, payload) {
    state.tasks = state.tasks.map(t => {
      if (t.key === payload.key) {
        t.date = payload.date;
      }
      return t;
    });
  },
  UPDATE_LOGIN_INPUT(state, payload) {
    state.loginInput[payload.inputKey] = payload.value;
  },
  RESET_LOGIN_INPUT(state) {
    state.loginInput.username = "";
    state.loginInput.password = "";
  },
  SET_TOKEN(state, payload) {
    state.token = payload.token;
  },
  SET_TASKS(state, payload) {
    state.tasks = payload.tasks;
  },
  UPDATE_TASK(state, payload) {
    state.tasks = state.tasks.map(t => {
      if (t.id === payload.id) {
        return payload.task;
      }
      return t;
    });
  }
};

const actions = {
  login(context, payload) {
    axios
      .post(constants.baseUrl + "/auth/login", {
        username: payload.username,
        password: payload.password
      })
      .then(resp => {
        if (resp.status === 200) {
          // Status OK
          context.commit("SET_TOKEN", { token: resp.data.token });
        } else {
          console.log("Unauthorized");
        }
      });
  },
  addTask(context, payload) {
    //payload: description and date (YYYY-MM-DD)
    let headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + state.token
    };
    let data = {
      title: payload.description,
      date: payload.date
    };
    axios
      .post(constants.baseUrl + "/todo", data, {
        headers: headers
      })
      .then(rsp => {
        if (rsp.status === 201) {
          context.dispatch("fetchTasks");
        }
      })
      .catch(error => {
        console.log(error);
      });
  },
  fetchTasks(context) {
    let headers = {
      Authorization: "Bearer " + state.token
    };
    axios
      .get(constants.baseUrl + "/todo", {
        headers: headers
      })
      .then(rsp => {
        if (rsp.status === 200) {
          context.commit("SET_TASKS", { tasks: rsp.data });
        }
      })
      .catch(error => {
        console.log(error);
      });
  },
  deleteTask(context, payload) {
    let headers = {
      Authorization: "Bearer " + state.token
    };
    axios
      .delete(constants.baseUrl + "/todo/" + payload.id, {
        headers: headers
      })
      .then(rsp => {
        if (rsp.status === 201) {
          context.commit("DELETE_TASK", { id: payload.id });
        }
      });
  },
  updateTask(context, payload) {
    let task = state.tasks.filter(task => task.id === payload.id)[0];

    let headers = {
      Authorization: "Bearer " + state.token,
      "Content-Type": "application/json"
    };

    let data = {
      title: payload.description ? payload.description : task.title,
      date: payload.date ? payload.date : task.date,
      done: payload.done ? payload.done : task.done
    };

    axios
      .patch(constants.baseUrl + /todo/ + payload.id, data, {
        headers: headers
      })
      .then(rsp => {
        if (rsp.status === 201) {
          context.dispatch("fetchTasks");
        }
      });
  },
  updateDescription(context, payload) {
    let task = state.tasks.filter(task => task.id === payload.id)[0];
  },
  invertDone(context, payload) {}
};

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
});
