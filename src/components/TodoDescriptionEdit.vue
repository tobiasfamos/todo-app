<template>
  <input
    class="input"
    ref="input"
    :value="description"
    type="text"
    @keydown.enter="updateStore"
  />
</template>

<script>
  import {mapActions, mapMutations} from "vuex";
import store from "@/Store/Store";

export default {
  name: "TodoDescriptionEdit",
  store,
  props: {
    description: {
      type: String,
      required: true
    },
    taskKey: {
      type: Number,
      required: true
    }
  },
  methods: {
    ...mapActions(["updateTask"]),
    updateStore() {
      this.updateTask({
        description: this.$refs.input.value,
        id: this.taskKey
      });
      this.$emit("exit")
    }
  }
};
</script>
<style scoped>
.input {
  font-size: 17px;
  border: transparent;
}
</style>
