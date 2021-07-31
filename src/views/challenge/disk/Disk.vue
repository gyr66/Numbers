<template>
  <div id="disk">
    <table>
      <tr v-for="i in dimension">
        <td v-for="j in dimension" @click="numberClick" :id="(i - 1) * dimension + j">
        <span>
          {{
            (i - 1) * dimension + j === dimension * dimension ? '' : (i - 1) * dimension + j
          }}
        </span>
        </td>
      </tr>
    </table>
    <div id="addArea">
      <button v-if="!isChallenging" id="start" @click="startClick">开始</button>
      <p v-else id="message">
        用时: <span id="seconds">{{seconds}}</span>秒&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;花费: <span id="steps">{{steps}}</span>步
      </p>
    </div>
  </div>

</template>

<script>
import $ from "jquery"
import {checkPosition, check, getRandomStatus} from "@/views/challenge/disk/caculate";

export default {
  name: "Disk",
  props: {
    dimension: {
      type: Number,
      default: 4
    }
  },

  data() {
    return {
      numbers: [],
      blankPos: Number,
      pos: [],
      tableWidth: Number,
      isChallenging: false,
      steps: 0,
      seconds: 0,
      empEle: Object,
      timer: undefined,
      numbersToCoordinate: []
    }
  },

  created() {
    let totalCount = this.dimension * this.dimension;
    this.numbers = new Array(totalCount);
    this.pos = new Array(totalCount);
    for (let i = 1; i <= totalCount; i++) {
      this.numbers[i - 1] = i;
    }
    this.blankPos = totalCount - 1;
    for (let i = 1; i <= totalCount; i++)
      this.numbersToCoordinate[i] = i - 1;
  },

  mounted() {
    let td_selector = $("#disk td");
    let span_selector = $("#disk span");
    let lattice = document.querySelectorAll("#disk td");
    for (let el of lattice) {
      if (el.innerText === "") {
        this.empEle = el;
        break;
      }
    }
    let table = $("#disk table")
    this.tableWidth = table.width();
    table.css("height", this.tableWidth).css("width", this.tableWidth);
    td_selector.each((index, node) => this.pos[index] = $(node).position());
    this.tdWidth = td_selector.width();
    //处理格子
    td_selector.each((index, node) => $(node).css("position", "absolute").css("left", this.pos[index].left).css("top", this.pos[index].top)
      .css("width", this.tdWidth).css("height", this.tdWidth));
    //处理数字
    span_selector.css("font-size", this.tdWidth / 2);
    //处理span
    let delta = this.tdWidth - span_selector.height();
    span_selector.each(function (index, node) {
      $(node).offset({
        top: $(this).offset().top + delta / 2,
        left: $(this).offset().left
      });
    });
  },

  methods: {
    update(currentPosition, curNum) {
      this.numbers[this.blankPos] = this.numbers[currentPosition];
      this.numbers[currentPosition] = this.dimension * this.dimension;
      this.numbersToCoordinate[curNum] = this.blankPos;
      this.numbersToCoordinate[this.dimension * this.dimension] = currentPosition;
      this.blankPos = currentPosition;
    },

    numberClick(event) {
      let blankPos = this.blankPos;
      let el = event.currentTarget;
      let bEl = this.empEle;
      if (el === bEl) return;
      let curNum = Number($(el).text());
      let currentPos = this.numbersToCoordinate[curNum];
      let result = checkPosition(currentPos, blankPos, this.dimension);
      if (result === -1) return;
      if (this.isChallenging) this.steps++;
      let direction = result.direction, path = result.path;
      if (direction === 0) {
        while (path.length) {
          let cur = path.pop();
          this.rightMove(cur);
        }
      } else if (direction === 1) {
        while (path.length) {
          let cur = path.pop();
          this.leftMove(cur);
        }
      } else if (direction === 2) {
        while (path.length) {
          let cur = path.pop();
          this.downMove(cur);
        }
      } else {
        while (path.length) {
          let cur = path.pop();
          this.upMove(cur);
        }
      }
      if (this.isChallenging && check(this.numbers, this.dimension)) {
        this.isChallenging = false;
        this.$emit("success", {
          time: this.seconds,
          step: this.steps
        });
      }
    },

    leftMove(currentPosition) {
      let block = document.getElementById(this.numbers[currentPosition] + "");
      let curNum = Number($(block).text());
      let p = this.pos[currentPosition];
      $(block).animate({
        left: p.left - this.tdWidth + "px",
        top: p.top + "px"
      }, 200);
      block = document.getElementById(this.numbers[currentPosition - 1] + "");
      p = this.pos[currentPosition - 1];
      $(block).animate({
        left: p.left + this.tdWidth + "px",
        top: p.top + "px"
      }, 200);
      this.update(currentPosition, curNum);
    },

    rightMove(currentPosition) {
      let block = document.getElementById(this.numbers[currentPosition] + "");
      let curNum = Number($(block).text());
      let p = this.pos[currentPosition];
      $(block).animate({
        left: p.left + this.tdWidth + "px",
        top: p.top + "px"
      }, 200);
      block = document.getElementById(this.numbers[currentPosition + 1] + "");
      p = this.pos[currentPosition + 1];
      $(block).animate({
        left: p.left - this.tdWidth + "px",
        top: p.top + "px"
      }, 200);
      this.update(currentPosition, curNum);
    },

    upMove(currentPosition) {
      let block = document.getElementById(this.numbers[currentPosition] + "");
      let curNum = Number($(block).text());
      let p = this.pos[currentPosition];
      $(block).animate({
        left: p.left + "px",
        top: p.top - this.tdWidth + "px"
      }, 200);
      block = document.getElementById(this.numbers[currentPosition - this.dimension] + "");
      p = this.pos[currentPosition - this.dimension];
      $(block).animate({
        left: p.left + "px",
        top: p.top + this.tdWidth + "px"
      }, 200);
      this.update(currentPosition, curNum);
    },

    downMove(currentPosition) {
      let block = document.getElementById(this.numbers[currentPosition] + "");
      let curNum = Number($(block).text());
      let p = this.pos[currentPosition];
      $(block).animate({
        left: p.left + "px",
        top: p.top + this.tdWidth + "px"
      }, 200);
      block = document.getElementById(this.numbers[currentPosition + this.dimension] + "");
      p = this.pos[currentPosition + this.dimension];
      $(block).animate({
        left: p.left + "px",
        top: p.top - this.tdWidth + "px"
      }, 200);
      this.update(currentPosition, curNum);
    },

    startClick() {
      this.isChallenging = !this.isChallenging;
      clearInterval(this.timer);
      this.seconds = this.steps = 0;
      this.timer = setInterval(() => this.seconds++, 1000);
      let newDisk = getRandomStatus(this.dimension);
      for (let i in newDisk) {
        this.numbers[i] = newDisk[i];
        this.numbersToCoordinate[newDisk[i]] = Number(i);
        $("#" + newDisk[i]).css("left", this.pos[i].left).css("top", this.pos[i].top);
        if (newDisk[i] === this.dimension * this.dimension) {
          this.blankPos = Number(i);
          this.empEle = document.getElementById(newDisk[i] + "");
        }
      }
    }
  }
}
</script>

<style scoped>
#disk {
  width: 380px;
  height: 500px;
  text-align: center;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  color: green;
}

#disk table {
  position: relative;
  width: 372px;
  left: 2px;
  background-color: lightgreen;
  border-spacing: 2px;
  -moz-user-select: none;
  -webkit-user-select: none;
  user-select: none;
}

#disk button {
  display: block;
  margin: auto;
  background-color: lightgreen;
  color: green;
  font-size: xx-large;
}

#addArea {
  position: relative;
  margin-top: 100px;
  font-size: xx-large;
}
</style>