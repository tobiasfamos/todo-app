<!--
  emits: todoChecked
-->
<template>
  <input type="checkbox" :checked="done" @input="$emit('todoChecked')" @clicked.stop="" />
</template>

<script>
export default {
  name: "BaseTodoCheckbox",
  props:{
    done:{
      type: Boolean,
      required: true,
    }
  }
};
</script>

<style scoped></style>
