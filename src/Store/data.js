import moment from "moment";

const data = {
  tasks: [],
  nextKey: 3,
  input: {
    username: "",
    password: "",
    description: "",
    date: "",
    settingsDateTemplate: "YYYY-MM-DD"
  },
  token: null,
  currentTodoEdit: null,
  dateTemplate: "YYYY-MM-DD"
};

export default data;
