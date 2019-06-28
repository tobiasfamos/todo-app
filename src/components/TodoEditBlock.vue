<template>
  <div>
    <base-todo-text>
      <slot></slot>
    </base-todo-text>
    <base-todo-input :input-key="inputKey" :type="type" @todoNext="$emit('todoNext')"> </base-todo-input>
  </div>
</template>

<script>
import BaseTodoText from "./BaseTodoText";
import BaseTodoInput from "./BaseTodoInput";
export default {
  name: "TodoEditBlock",
  components: { BaseTodoInput, BaseTodoText },
  props: {
    inputKey: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: "text"
    }
  },
};
</script>

<style scoped></style>
