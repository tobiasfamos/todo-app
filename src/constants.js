const constants = {
  baseUrl: "https://todo-backend.jls.digital/api/v1",
  baseHeaders: {
    Authorization: "Bearer " + localStorage.getItem("token"),
    "Content-Type": "application/json"
  }
};

export default constants;
