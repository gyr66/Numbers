<template>
  <div id="app">
    <selector/>
    <Disk :dimension="dimension" :key="componentKey" @success="success"/>
  </div>
</template>

<script>
import Disk from "./components/Disk/Disk";
import Selector from "@/components/Selector";

export default {
  name: 'App',
  data() {
    return {
      dimension: 5,
      componentKey: 0,
    }
  },
  components: {
    Selector,
    Disk
  },
  methods: {
    btnClick() {
      this.componentKey = !this.componentKey;
      this.dimension++;
    },
    success(obj) {
      setTimeout(() => {
        alert("成功!\n用时: " + obj.time + "秒 花费: " + obj.step + "步");
      }, 200);
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
