<template>
  <div class="flex-horizontal task">
    <base-todo-text>
      <slot></slot>
    </base-todo-text>
    <base-todo-input
      style="  border: #d3d3d3 1px solid"
      :input-key="inputKey"
      @todoNext="$emit('todoNext')"
    ></base-todo-input>
  </div>
</template>

<script>
import BaseTodoText from "./BaseTodoText";
import BaseTodoButton from "./BaseTodoButton";
import BaseTodoInput from "./BaseTodoInput";
export default {
  name: "TodoLoginBlock",
  components: { BaseTodoInput, BaseTodoButton, BaseTodoText },
  props: {
    inputKey: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped></style>
