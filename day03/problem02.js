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

  let oxygenRating = [];
  let co2Rating = [];

  const max = binaryCount[0][0] > binaryCount[0][1] ? "0" : "1";
  const min = binaryCount[0][0] > binaryCount[0][1] ? "1" : "0";

  for (let i = 0; i < binaryCount.length; i++) {}

  return parseInt(gamma, 2) * parseInt(epsilon, 2);
};

console.log(binaryDiagnostic(textArray));
