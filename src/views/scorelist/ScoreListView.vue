<template>
  <div id="scoreList">
    <tab-control :titles="['本地历史', '全部历史']" class="tab-control" @viewChange="viewChange"></tab-control>
    <local-score-list v-if="index === 0"></local-score-list>
    <RemoteScoreList v-else></RemoteScoreList>
  </div>
</template>

<script>
import TabControl from "@/components/common/tabcontrol/TabControl";
import RemoteScoreList from "@/views/scorelist/childrenComponents/ReomoteScoreList";
import LocalScoreList from "@/views/scorelist/childrenComponents/LocalScoreList";

export default {
  name: "ScoreList",
  components: {TabControl, RemoteScoreList, LocalScoreList},
  data() {
    return {
      index: 0
    }
  },
  methods: {
    viewChange(index) {
      this.index = index;
    }
  }
}
</script>

<style scoped>
.tab-control {
  background-color: darkseagreen;
  color: white;
  box-shadow: 0 2px 1px rgba(0, 128, 0, .2);
}
</style>
