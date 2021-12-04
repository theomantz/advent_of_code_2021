const fs = require("fs");

const getInput = () => {
  const rawText = fs.readFileSync("day04/input.txt", "utf8").split("\n");
  const puzzleInput = rawText
    .shift()
    .split(",")
    .map((el) => parseInt(el));
  rawText.shift();
  const boards = [];
  let currentBoard = [];

  for (let i = 0; i < rawText.length; i++) {
    if (rawText[i] === "") {
      boards.push(currentBoard);
      currentBoard = [];
    } else {
      let row = rawText[i]
        .split(" ")
        .filter((el) => el !== "")
        .map((el) => parseInt(el));
      currentBoard.push(row);
    }
  }
  boards.push(currentBoard);
  return { input: puzzleInput, boards: boards };
};

const markBoard = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === target) arr[i][j] = "X";
    }
  }
};

const checkRows = (arr) => {
  for (let i = 0; i < 5; i++) {
    if (arr[i].every((el) => el === "X")) return true;
  }
  return false;
};

const checkCols = (arr) => {
  for (let c = 0; c < 5; c++) {
    for (let r = 0; r < 5; r++) {
      if (arr[r][c] !== "X") break;
      if (r === 4) return true;
    }
  }
  return false;
};

const checkWin = (arr) => {
  return checkRows(arr) ? true : checkCols(arr) ? true : false;
};

const sumArray = (arr) => {
  let count = 0;
  for (let r = 0; r < 5; r++) {
    for (let c = 0; c < 5; c++) {
      if (arr[r][c] !== "X") count += arr[r][c];
    }
  }
  return count;
};

const play = () => {
  const { input, boards } = getInput();
  for (let i = 0; i < input.length; i++) {
    let target = input[i];
    for (let j = 0; j < boards.length; j++) {
      let board = boards[j];
      markBoard(board, target);
      if (i >= boards[0][0].length - 1 && checkWin(board)) {
        return sumArray(board) * target;
      }
    }
  }
};

console.log(play());
