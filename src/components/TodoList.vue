<template>
  <div class="task-container">
    <div style="width:100%" v-for="task in $store.getters.tasksByDone(done)">
      <TodoTask
        :key="task.id"
        :description="task.title"
        :date="task.date"
        :taskKey="task.id"
        :done="task.done"
      >
      </TodoTask>
    </div>
  </div>
</template>

<script>
import TodoTask from "./TodoTask";
import store from "@/Store/Store";

export default {
  name: "TodoList",
  data: () => {
    return {
      taskInput: ""
    };
  },
  store,
  props: {
    done: {
      type: Boolean,
      required: true
    }
  },
  components: { TodoTask },
};
</script>

<style scoped>
.task-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.done {
  text-decoration: line-through;
}
</style>
