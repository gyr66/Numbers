<template>
  <div>
    <tab-bar>
      <tab-bar-item active-color="blue" link="/challengeView">
        <img slot="item-icon" alt="" src="~assets/img/tabbar/challenge.svg"/>
        <img slot="item-icon-active" alt="" src="~assets/img/tabbar/challenge_active.svg"/>
        <div slot="item-text">挑战</div>
      </tab-bar-item>
      <tab-bar-item active-color="blue" link="/scoreList">
        <img slot="item-icon" alt="" src="~assets/img/tabbar/scoreList.svg"/>
        <img slot="item-icon-active" alt="" src="~assets/img/tabbar/scoreList_active.svg"/>
        <div slot="item-text">历史记录</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from "@/components/tabbar/TabBar";
import TabBarItem from "@/components/tabbar/TabBarItem";

export default {
  name: "MainTabBar",
  components: {TabBar, TabBarItem}
}
</script>

<style scoped>

</style>