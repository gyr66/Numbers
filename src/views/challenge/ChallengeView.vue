<template>
  <div id="challenge">
    <Login ref="login"/>
    <nav-bar class="challenge_nav"><div slot="center">挑战</div></nav-bar>
    <Selector @selectChange="selectChange"/>
    <Disk :key="componentKey" :dimension="dimension" @success="success"/>
  </div>
</template>

<script>
import Disk from "@/views/challenge/childrenComponents/disk/Disk";
import Selector from "@/views/challenge/childrenComponents/Selector";
import store from "store";
import request from  "@/network/index"
import {format} from "@/common/util";
import NavBar from "@/components/common/navbar/NavBar";
import Login from "@/views/Login";

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
        console.log(this.$parent)
        // this.$refs.login.activate();
      }, 200);
      let cur = new Date().format("yyyy-MM-dd hh:mm:ss");
      store.set(cur, {
        dimension: this.dimension,
        seconds: obj.seconds,
        steps: obj.steps
      });
      request.postRecord({
        type: this.dimension,
        seconds: obj.seconds,
        steps: obj.steps
      });
    },

    selectChange(dimension) {
      this.dimension = Number(dimension);
      this.componentKey = !this.componentKey
    }
  },

  components: {Disk, Selector, NavBar, Login}
}
</script>

<style scoped>
  .challenge_nav {
    background-color: darkseagreen;
    color: green;
    box-shadow: 0 2px 1px rgba(0, 128, 0, .2);
    margin-bottom: 30px;
  }
</style>
