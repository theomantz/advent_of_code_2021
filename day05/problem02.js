fs = require("fs");

const getInput = () => {
  let textArray = fs.readFileSync("day05/input.txt", "utf8").split("\n");
  let result = [];
  let maxX = Number.NEGATIVE_INFINITY;
  let maxY = Number.NEGATIVE_INFINITY;
  for (let i = 0; i < textArray.length; i++) {
    let arr = textArray[i].split(" -> ");
    let firstCoords = arr[0].split(",");
    let secondCoords = arr[1].split(",");
    let x1 = parseInt(firstCoords[0]);
    let x2 = parseInt(secondCoords[0]);
    let y1 = parseInt(firstCoords[1]);
    let y2 = parseInt(secondCoords[1]);
    maxX = Math.max(maxX, x1, x2);
    maxY = Math.max(maxY, y1, y2);
    result.push([x1, y1, x2, y2]);
  }
  return { result: result, max: [maxX, maxY] };
};

const buildGrid = () => {
  const { result, max } = getInput();
  let array = Array.from(Array(max[1] + 1), () =>
    new Array(max[0] + 1).fill(0)
  );
  for (let i = 0; i < result.length; i++) {
    let x1 = result[i][0];
    let y1 = result[i][1];
    let x2 = result[i][2];
    let y2 = result[i][3];
    if (y1 === y2) {
      let max = Math.max(x1, x2);
      let min = Math.min(x1, x2);
      for (let j = 0; j <= max - min; j++) {
        array[y1][min + j] += 1;
      }
    } else if (x1 === x2) {
      let max = Math.max(y1, y2);
      let min = Math.min(y1, y2);
      for (let j = 0; j <= max - min; j++) {
        array[min + j][x1] += 1;
      }
    } else {
      array[y2][x2] += 1;
      while (x1 !== x2 || y1 !== y2) {
        array[y1][x1] += 1;
        if (y1 !== y2) {
          y1 = y1 < y2 ? y1 + 1 : y1 - 1;
        }
        if (x1 !== x2) {
          x1 = x1 < x2 ? x1 + 1 : x1 - 1;
        }
      }
    }
  }
  return array;
};

const countCrossing = (arr) => {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] >= 2) count++;
    }
  }
  return count;
};

const run = () => {
  return countCrossing(buildGrid());
};

console.table(run());
