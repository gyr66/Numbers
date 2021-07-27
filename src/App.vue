<template>
  <div id="app">
    <selector @selectChange="selectChange" />
    <Disk :dimension="dimension" :key="componentKey" @success="success"/>
  </div>
</template>

<script>
import Disk from "./components/Disk/Disk";
import Selector from "@/components/Selector";
import router from "@/router";
import store from "store"

export default {
  name: 'App',
  router,
  data() {
    return {
      dimension: 4,
      componentKey: 0,
    }
  },
  components: {
    Selector,
    Disk
  },
  methods: {
    success(obj) {
      setTimeout(() => {
        alert("成功!\n用时: " + obj.time + "秒 花费: " + obj.step + "步");
      }, 200);
      let cur = new Date();
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
  }
}
</script>

<style>
selector {
  margin-bottom: 50px;
}

* {
  box-sizing: border-box !important;
  border: 0 !important;
}

body {
  background-color: skyblue;
}

</style>
