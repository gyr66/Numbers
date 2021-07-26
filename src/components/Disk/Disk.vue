<template>
  <div id="disk">
    <table>
      <tr v-for="i in dimension">
        <td v-for="j in dimension" @click="numberClick">
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
import {checkPosition, check, getRandomStatus} from "@/components/Disk/caculate";

export default {
  name: "Disk",

  props: {
    dimension: {
      type: Number,
      default: 4
    },
    tableWidth: {
      type: Number,
      default: 500
    }
  },

  data() {
    return {
      numbers: Array,
      blankPos: Number,
      pos: Array,
      tdWidth: Number,
      isChallenging: false,
      steps: 0,
      seconds: 0,
      empEle: Object
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
  },

  mounted() {
    let td_selector = $("td");
    let span_selector = $("span");
    let lattice = document.getElementsByTagName("td");
    for (let el of lattice) {
      if (el.innerText === "") {
        this.empEle = el;
        break;
      }
    }
    $("table").css("height", this.tableWidth).css("width", this.tableWidth);
    $("#addArea").css("margin-top", this.tableWidth * 0.1);
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
    numberClick(event) {
      let blankPos = this.blankPos;
      let el = event.currentTarget;
      let bEl = this.empEle;
      if (el === bEl) return;
      let curNum = Number($(el).text());
      let currentPos;
      for (let i = 0; i < this.numbers.length; i++) {
        if (this.numbers[i] === curNum) {
          currentPos = i;
          break;
        }
      }
      let result = checkPosition(currentPos, blankPos, this.dimension);
      if (result === -1) return;
      if (this.isChallenging)
        this.steps++;
      if (result === 0) {
        this.leftMove(el, currentPos);
        this.rightMove(bEl, blankPos);
      } else if (result === 1) {
        this.rightMove(el, currentPos);
        this.leftMove(bEl, blankPos);
      } else if (result === 2) {
        this.upMove(el, currentPos);
        this.downMove(bEl, blankPos);
      } else if (result === 3) {
        this.downMove(el, currentPos);
        this.upMove(bEl, blankPos);
      }
      this.numbers[blankPos] = this.numbers[currentPos];
      this.numbers[currentPos] = this.dimension * this.dimension;
      this.blankPos = currentPos;
      if (this.isChallenging && check(this.numbers, this.dimension)) {
        this.isChallenging = false;
        this.$emit("success", {
          time: this.steps,
          step: this.steps
        });
      }
    },

    leftMove(block, currentPosition) {
      let p = this.pos[currentPosition];
      $(block).stop().animate({
        left: p.left - this.tdWidth + "px",
        top: p.top + "px"
      }, 200);
    },

    rightMove(block, currentPosition) {
      let p = this.pos[currentPosition];
      $(block).stop().animate({
        left: p.left + this.tdWidth + "px",
        top: p.top + "px"
      }, 200);
    },

    upMove(block, currentPosition) {
      let p = this.pos[currentPosition];
      $(block).stop().animate({
        left: p.left + "px",
        top: p.top - this.tdWidth + "px"
      }, 200);
    },

    downMove(block, currentPosition) {
      let p = this.pos[currentPosition];
      $(block).stop().animate({
        left: p.left + "px",
        top: p.top + this.tdWidth + "px"
      }, 200);
    },

    startClick() {
      this.isChallenging = !this.isChallenging;
      let newDisk = getRandomStatus(this.dimension);
      const MAX_NUMBER = this.dimension * this.dimension;
      let numbers = document.getElementsByTagName("td");
      let temp = new Array(MAX_NUMBER);
      for (let i = 0; i < MAX_NUMBER; i++) {
        for (let j = 0; j < MAX_NUMBER; j++) {
          let value;
          if (numbers[j].innerText === "") value = MAX_NUMBER;
          else value = Number($(numbers[j]).text());
          if (value === this.numbers[i]) {
            temp[i] = numbers[j];
            break;
          }
        }
      }
      for (let i = 0; i < MAX_NUMBER; i++)
        this.numbers[i] = newDisk[i];
      for (let i = 0; i < MAX_NUMBER; i++) {
        if (this.numbers[i] < MAX_NUMBER)
          $(temp[i]).children().eq(0).text(this.numbers[i]);
        else {
          $(temp[i]).children().eq(0).text("");
          this.empEle = temp[i];
          this.blankPos = i;
        }
      }
    }
  }
}
</script>

<style scoped>
#disk {
  text-align: center;
  color: green;
}

#disk table {
  position: relative;
  margin: auto;
  text-align: center;
  background-color: lightgreen;
  border-spacing: 2px;
  -moz-user-select: none;
  -webkit-user-select: none;
  user-select: none;
}

#disk button {
  display: block;
  position: relative;
  margin: auto;
  background-color: lightgreen;
  color: green;
  font-size: xxx-large;
}

#addArea {
  font-size: xxx-large;
}
</style>