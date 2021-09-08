<template>
  <div class="tab-control">
    <div class="tab-control-item"
         v-for="(item, index) in titles"
         :class="{active: index === currentIndex}" @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props: {
    titles: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      this.$emit("viewChange", this.currentIndex);
    }
  }
}
</script>

<style scoped>
  .tab-control {
    display: flex;
    height: 49px;
    line-height: 49px;
    text-align: center;
  }

  .tab-control-item {
    flex: 1;
  }

  .active {
    color: green;
  }

  .active span {
    border-bottom: 3px solid green;
    padding-bottom: 5px;
  }
</style>
