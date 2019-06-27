<!--
  emits: todoButtonClicked
-->
<template>
  <button @click="$emit('todoButtonClicked')">
    <slot></slot>
  </button>
</template>

<script>
    export default {
        name: "BaseTodoButton"
    }
</script>

<style scoped>

</style>
