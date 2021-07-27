<template>
  <div id="app">
    <router-link to="/challengeView" tag="button">挑战</router-link>
    <router-link to="/scoreList" tag="button">历史记录</router-link>
    <router-view />
  </div>
</template>

<script>
import router from "@/router";

export default {
  name: 'App',
  router
}
</script>

<style>
* {
  box-sizing: border-box !important;
  border: 0 !important;
}

body {
  background-color: skyblue;
}

button {
  background-color: lightgreen;
  margin: 0 10px;
  font-size: x-large;
  color: green;
}
</style>
