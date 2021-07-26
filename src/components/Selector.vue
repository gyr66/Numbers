<template>
  <div id="selector">
    <div id="choice">
      <select>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        <option>6</option>
        <option>7</option>
        <option>8</option>
        <option>9</option>
      </select>
      <button id="confirm">确定</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "selector"
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
}

</style>