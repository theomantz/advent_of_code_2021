const fs = require("fs");
const textArray = fs.readFileSync("day03/problem.txt", "utf8").split("\n");

const binaryDiagnostic = (arr) => {
  const binaryCount = Array.from(Array(arr[0].length), () => [0, 0]);

  for (let i = 0; i < arr.length; i++) {
    const binaryCode = arr[i];
    for (let j = 0; j < binaryCode.length; j++) {
      const binaryDigit = parseInt(binaryCode[j]);
      binaryCount[j][binaryDigit] += 1;
    }
  }

  let gamma = "";
  let epsilon = "";
  for (let i = 0; i < binaryCount.length; i++) {
    gamma += binaryCount[i][0] > binaryCount[i][1] ? "0" : "1";
    epsilon += binaryCount[i][0] > binaryCount[i][1] ? "1" : "0";
  }

  return parseInt(gamma, 2) * parseInt(epsilon, 2);
};

console.log(binaryDiagnostic(textArray));
