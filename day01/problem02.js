const fs = require("fs");
const textArray = fs.readFileSync('day01/problem.txt', 'utf8').split('\n');

const slidingWindowArray = (arr) => {
    const windowArr = [];
    for (let i = 2; i < arr.length; i++) {
        windowArr.push(parseInt(arr[i - 2]) + parseInt(arr[i - 1]) + parseInt(arr[i]));
    }
    return windowArr;
}

const increasedOverPrev = (arr) => {
    let count = 0;
    for (let i = 1; i < arr.length; i++) {
        count += arr[i] > arr[i - 1] ? 1 : 0;
    }
    return count;
}

console.log(increasedOverPrev(slidingWindowArray(textArray)));