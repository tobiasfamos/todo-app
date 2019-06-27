<!--
  emits: todoRemove
-->
<template>
  <button class="button" @click.stop="$emit('todoRemove')">x</button>
</template>

<script>
    export default {
        name: "BaseTodoClose"
    }
</script>

<style scoped>

  .button {
    background-color: transparent;
    border: #d3d3d3 1px solid;
    border-radius: 3px;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  }

</style>
