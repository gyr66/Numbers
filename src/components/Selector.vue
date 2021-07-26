<template>
  <div id="selector">
    <div id="choice">
      <select v-model="choice">
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
      </select>
      <button id="confirm" @click="confirmClick">确定</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "selector",
  data() {
    return {
      choice: 4
    }
  },
  methods: {
    confirmClick() {
      this.$emit("confirmClick", this.choice);
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

#choice {
  width: 50%;
  height: 80px;
  margin: auto;
  display: flex;
  justify-content: space-around;
}

#selector button {
  background-color: lightgreen;
  color: green;
  width: 30%;
  font-size: xxx-large;
}

#selector select {
  width: 30%;
  background-color: lightgreen;
  color: green;
  font-size: xxx-large;
}

</style>