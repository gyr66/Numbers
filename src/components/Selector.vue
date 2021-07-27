<template>
  <div id="selector">
      <select v-model="choice" @change="selectChange">
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
      </select>
    </div>
</template>

<script>
export default {
  name: "Selector",
  data() {
    return {
      choice: 4
    }
  },
  methods: {
    selectChange() {
      this.$emit("selectChange", this.choice);
    }
  }
}
</script>

<style scoped>

#selector {
  position: relative;
  margin-bottom: 100px;
  height: 100px;
  padding-top: 10px;
  padding-bottom: 10px;
}


#selector select {
  display: block;
  margin: auto;
  width: 30%;
  background-color: lightgreen;
  color: green;
  font-size: xxx-large;
}

</style>