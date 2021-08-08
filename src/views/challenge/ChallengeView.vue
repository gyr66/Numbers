<template>
  <div>
    <Selector @selectChange="selectChange"/>
    <Disk :key="componentKey" :dimension="dimension" @success="success"/>
  </div>
</template>

<script>
import Disk from "@/views/challenge/disk/Disk";
import Selector from "@/views/challenge/Selector";
import store from "store";
import request from  "@/network/index"
import {format} from "@/common/util";

Date.prototype.format = format;

export default {
  name: "ChallengeView",
  data() {
    return {
      dimension: 4,
      componentKey: 0,
    }
  },
  methods: {
    success(obj) {
      setTimeout(() => {
        alert("成功!\n用时: " + obj.seconds + "秒 花费: " + obj.steps + "步");
      }, 200);
      let cur = new Date().format("yyyy-MM-dd hh:mm:ss");
      store.set(cur, {
        dimension: this.dimension,
        seconds: obj.seconds,
        steps: obj.steps
      });
      request.postRecord({
        type: this.dimension + "*" + this.dimension,
        seconds: obj.seconds,
        steps: obj.steps
      });
    },

    selectChange(dimension) {
      this.dimension = Number(dimension);
      this.componentKey = !this.componentKey
    }
  },

  components: {Disk, Selector}
}
</script>

<style scoped>

</style>