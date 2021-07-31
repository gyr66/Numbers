<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabBar"
}
</script>

<style scoped>
  #tab-bar {
    display: flex;
    height: 49px;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: lightgreen;
    box-shadow: 0 -2px 1px rgba(0, 128, 0, .2);
  }

</style>