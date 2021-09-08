<template>
  <div id="app">
    <keep-alive exclude="ScoreList">
      <router-view/>
    </keep-alive>
<!--    <MainTabBar />-->
  </div>
</template>

<script>
import router from "@/router";
import MainTabBar from "@/components/content/mainTabbar/MainTabBar";


export default {
  name: 'App',
  components: {MainTabBar},
  router
}

</script>

<style>
@import "assets/css/base.css";


</style>
