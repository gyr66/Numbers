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

Date.prototype.format = function (fmt) {
  const o = {
    "M+": this.getMonth() + 1,                 //月份
    "d+": this.getDate(),                    //日
    "h+": this.getHours(),                   //小时
    "m+": this.getMinutes(),                 //分
    "s+": this.getSeconds(),                 //秒
    "q+": Math.floor((this.getMonth() + 3) / 3), //季度
    "S": this.getMilliseconds()             //毫秒
  };
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
  }
  for (let k in o) {
    if (new RegExp("(" + k + ")").test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    }
  }
  return fmt;
}

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
        alert("成功!\n用时: " + obj.time + "秒 花费: " + obj.step + "步");
      }, 200);
      let cur = new Date().format("yyyy-MM-dd hh:mm:ss");
      store.set(cur, {
        dimension: this.dimension,
        seconds: obj.time,
        steps: obj.step
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