<template>
  <input
    class="input"
    ref="input"
    :value="date.format('YYYY-MM-DD')"
    type="date"
    @keydown.enter="updateStore"
  />
</template>

<script>
import store from "@/Store/Store";
import { mapActions } from "vuex";
import Moment from "moment";
import moment from "moment";

export default {
  name: "TodoDateEdit",
  store,
  props: {
    date: {
      type: Moment,
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
      this.updateTask({id: this.taskKey, date: moment(this.$refs.input.value).format("YYYY-MM-DD")});
      this.$emit("exit");
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
