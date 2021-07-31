<template>
  <div id="app">
    <MainTabBar />
    <keep-alive exclude="ScoreList">
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
import router from "@/router";
import MainTabBar from "@/components/tabbar/MainTabBar";


export default {
  name: 'App',
  components: {MainTabBar},
  router
}

</script>

<style>
@import "assets/css/base.css";

button {
  background-color: lightgreen;
  margin-right: 5px;
  font-size: x-large;
  color: green;
}
</style>
