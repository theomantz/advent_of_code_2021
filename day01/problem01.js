const fs = require('fs')
const textArray = fs.readFileSync('day01/problem.txt', 'utf8').split('\n')

const increasedOverPrev = (arr) => {
    let count = 0;
    for (let i = 1; i < arr.length; i++) {
        count += parseInt(arr[i]) > parseInt(arr[i - 1]) ? 1 : 0;
    }
    return count;
}

console.log(increasedOverPrev(textArray));
