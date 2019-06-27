<template>
  <input @keydown.enter="insertTask" class="task input" v-model="taskInput"  placeholder="Enter your task..."/>
</template>

<script>
import store from "@/Store/Store";
import MaxTween from "gsap";
import {mapActions, mapMutations} from "vuex";
import moment from "moment";

export default {
  name: "TodoInput",
  store,
  data() {
    return { taskInput: "" };
  },
  methods: {
    ...mapMutations(["ADD_TASK", "INC_NEXT_KEY"]),
    ...mapActions(["addTask"]),
    insertTask: function() {
      let date = moment();
      let k = this.$store.state.nextKey;
      this.addTask({
        description: this.taskInput,
        date: date.format("YYYY-MM-DD")
      });
      this.INC_NEXT_KEY();
      this.taskInput = "";
      MaxTween.from("#task0", 0.4, { x: 400 });
    }
  }
};
</script>

<style scoped>
.task {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  width: 100%;
  border: #d3d3d3 1px solid;
  padding: 10px;
  margin: 5px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
}

.input {
  font-size: 17px;
}
</style>
