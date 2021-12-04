const fs = require("fs");
const textArray = fs.readFileSync("day03/problem.txt", "utf8").split("\n");

const binaryDiagnostic = (arr) => {
  const oxygenRating = [];
  const co2Rating = [];
  let max = currentMax(arr, 0);
  let min = max === '0' ? '1' : "0"

  for (let i = 0; i < arr.length; i++) {
    switch(arr[i][0]) {
      case max:
        oxygenRating.push(arr[i]);
        break;
      default:
        co2Rating.push(arr[i]);
        break;
    }
  }
  let i = 1;
  while (oxygenRating.length > 1 && i < oxygenRating[0].length) {
    max = currentMax(oxygenRating, i);
    for (let j = 0; j < oxygenRating.length; j++) {
      if (oxygenRating.length === 1) break;
      while (oxygenRating[j] && oxygenRating[j][i] !== max) oxygenRating.splice(j, 1);
    }
    i++;
  }

  i = 1
  while (co2Rating.length > 1 && i < co2Rating[0].length) {
    min = currentMax(co2Rating, i) === "0" ? "1" : "0";
    for (let j = 0; j < co2Rating.length; j++) {
      if (co2Rating.length === 1) break;
      while (co2Rating[j] && co2Rating[j][i] !== min) co2Rating.splice(j, 1)
    }
    i++;
  }

  return parseInt(oxygenRating[0], 2) * parseInt(co2Rating[0], 2)
};

const currentMax = (arr, idx) => {
  let count0 = 0;
  let count1 = 0;
  for (let i = 0; i < arr.length; i++) {
    switch(arr[i][idx]) {
      case "0":
        count0++;
        break;
      default:
        count1++;
        break;
    }
  }
  return count0 > count1 ? "0" : "1";
}

console.log(binaryDiagnostic(textArray));
