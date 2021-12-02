fs = require("fs");
textArray = fs.readFileSync("day02/input.txt", "utf8").split("\n");

const dive = (arr) => {
  let horizontal = 0;
  let depth = 0;
  let aim = 0;
  for (let i = 0; i < arr.length; i++) {
    const command = arr[i].split(" ")[0];
    const int = parseInt(arr[i].split(" ")[1]);
    switch (command) {
      case "forward":
        horizontal += int;
        depth += aim * int;
        break;
      case "up":
        aim -= int;
        break;
      case "down":
        aim += int;
        break;
      default:
        break;
    }
  }
  return horizontal * depth;
};

console.log(dive(textArray));
