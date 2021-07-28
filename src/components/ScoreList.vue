<template>
<table>
    <tr>
      <th>日期</th>
      <th>类型</th>
      <th>时间</th>
      <th>步数</th>
    </tr>
    <tr v-for="item in list">
      <td>{{ item.key }}</td>
      <td>{{ item.value.dimension + "*" + item.value.dimension }}</td>
      <td>{{ item.value.seconds + "秒" }}</td>
      <td>{{ item.value.steps + "步" }}</td>
    </tr>
</table>
</template>

<script>
import store from "store"

export default {
  name: "ScoreList",
  data() {
    return {
      list: []
    }
  },
  created() {
    store.each((value, key) => {
      if (value.seconds !== undefined) {
        this.list.push({key, value});
      }
    });
    this.list.sort((a, b) => {
      if (a.key > b.key) return -1;
      else if (a.key === b.key) return 0;
      return 1;
    });
  }
}
</script>

<style scoped>
  table {
    border-spacing: 30px;
    font-size: x-large;
    color: green;
    margin: auto;
    text-align: center;
    position: relative;
  }

</style>