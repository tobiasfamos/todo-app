import Vuex from "vuex";
import Vue from "vue";
import axios from "axios";
import data from "./data";
import constants from "@/constants";
import moment from "moment";

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
  },
  currentTodoEdit: state => {
    return state.currentTodoEdit;
  }
};

const mutations = {
  SET_CURRENT_EDIT(state, payload) {
    state.currentTodoEdit = payload.id;
  },
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
  UPDATE_LOGIN_INPUT(state, payload) {
    state.input[payload.inputKey] = payload.value;
  },
  RESET_LOGIN_INPUT(state) {
    state.input.username = "";
    state.input.password = "";
  },
  RESET_EDIT_INPUT(state) {
    state.input.date = "";
    state.input.description = "";
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
  },
  SET_DATE_TEMPLATE(state, payload) {
    state.dateTemplate = payload.template;
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
          localStorage.setItem("token", resp.data.token);
          context.commit("SET_TOKEN", { token: resp.data.token });
        } else {
          console.log("Unauthorized");
        }
      });
  },
  addTask(context, payload) {
    //payload: description and date (YYYY-MM-DD)

    let data = {
      title: payload.description,
      date: payload.date
    };
    axios
      .post(constants.baseUrl + "/todo", data, {
        headers: constants.baseHeaders
      })
      .then(rsp => {
        if (rsp.status === 201) {
          //get the task without the user object
          let { user, ...task } = rsp.data;
          context.commit("ADD_TASK", { task: task });
        }
      })
      .catch(error => {
        console.log(error);
      });
  },
  fetchTasks(context) {
    axios
      .get(constants.baseUrl + "/todo", {
        headers: constants.baseHeaders
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
    axios
      .delete(constants.baseUrl + "/todo/" + payload.id, {
        headers: constants.baseHeaders
      })
      .then(rsp => {
        if (rsp.status === 201) {
          context.commit("DELETE_TASK", { id: payload.id });
        }
      })
      .catch(err => {});
  },
  updateTask(context, payload) {
    let task = state.tasks.filter(task => task.id === payload.id)[0];

    let data = {
      title: payload.description ? payload.description : task.title,
      date: payload.date ? payload.date : task.date,
      done: payload.done !== null ? payload.done : task.done
    };

    axios
      .patch(constants.baseUrl + "/todo/" + payload.id, data, {
        headers: constants.baseHeaders
      })
      .then(rsp => {
        if (rsp.status === 201) {
          context.dispatch("fetchOneTask", {
            id: payload.id
          });
        }
      });
  },
  fetchOneTask(context, payload) {
    axios
      .get(constants.baseUrl + "/todo/" + payload.id, {
        headers: constants.baseHeaders
      })
      .then(rsp => {
        context.commit("UPDATE_TASK", {
          id: payload.id,
          task: rsp.data
        });
      });
  },
  editSave(context) {
    //Update the tasks at backend
    context.dispatch("updateTask", {
      description: state.input.description,
      date: moment(state.input.date).format("YYYY-MM-DD"),
      id: state.currentTodoEdit
    });
    // Reset the Input and hide the input fields
    context.dispatch("editDiscard");
  },
  editDiscard(context) {
    context.commit("RESET_EDIT_INPUT");
    context.commit("SET_CURRENT_EDIT", { id: null });
  },
  settingsSave(context) {
    context.commit("SET_DATE_TEMPLATE", {
      template: state.input.settingsDateTemplate
    });
  }
};

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
});
