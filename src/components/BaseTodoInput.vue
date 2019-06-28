<!--
  emits: todoNext
-->

<template>
  <input
    type="text"
    ref="input"
    :value="$store.state.input[inputKey]"
    @input="updateStore"
    @keydown.enter="$emit('todoNext')"
    class="todo-input"
  />
</template>

<script>
import store from "@/Store/Store";
import { mapMutations } from "vuex";

export default {
  name: "BaseTodoInput",
  store,
  props: {
    inputKey: {
      type: String,
      required: true
    }
  },
  methods: {
    ...mapMutations(["UPDATE_LOGIN_INPUT"]),
    updateStore() {
      this.UPDATE_LOGIN_INPUT({
        inputKey: this.inputKey,
        value: this.$refs.input.value
      });
    }
  }
};
</script>

<style scoped></style>
