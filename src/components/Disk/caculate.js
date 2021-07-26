
function checkPosition(s, t, dimension) {
  let rows = Math.floor(s / dimension), cols = s % dimension;
  let rowt = Math.floor(t / dimension), colt = t % dimension;
  if (rowt === rows && colt === cols - 1) return 0; // 空格在当前格子的左边
  if (rowt === rows && colt === cols + 1) return 1; // 空格在当前格子的右边
  if (colt === cols && rowt === rows - 1) return 2; // 空格在当前格子的上面
  if (colt === cols && rowt === rows + 1) return 3; // 空格在当前格子的下面
  return -1; // 未相邻
}

function hasSolution(array, dimension) {
  // 当N为奇数时，当两个N数码的逆序数奇偶性相同时，可以互达，否则不行；
  // 当N为偶数时，当两个N数码的奇偶性相同的话，那么两个N数码中的0所在行的差值delta，delta也必须是偶数时，才能互达；
  // 当两个N数码的奇偶性不同时，那么两个N数码中的0所在行的差值delta，delta也必须是奇数时，才能互达；
  const MAX_NUMBER = dimension * dimension;
  let cnt = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] === MAX_NUMBER || array[j] === MAX_NUMBER) continue;
      if (array[i] > array[j]) cnt++;
    }
  }
  if (MAX_NUMBER % 2) return cnt % 2 === 0;
  let row;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === MAX_NUMBER) {
      row = i / dimension;
      break;
    }
  }
  let delta = dimension - row - 1;
  cnt += delta;
  return cnt % 2 === 0;
}

function getRandomStatus(dimension) {
  const MAX_NUMBER = dimension * dimension;
  let array = new Array(MAX_NUMBER);
  for (let i = 0; i < array.length; i++) {
    array[i] = i + 1;
  }
  const random_sort = () => Math.random() > .5 ? -1 : 1;
  do {
    array.sort(random_sort);
  } while (!hasSolution(array, dimension));
  return array;
}

function check(disk, dimension) {
  const MAX_NUMBER = dimension * dimension;
  for (let i = 0; i < MAX_NUMBER; i++) {
    if (disk[i] !== i + 1) return false;
  }
  return true;
}

export {
  checkPosition, hasSolution, getRandomStatus, check
}