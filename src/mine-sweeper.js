const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const arr = []

  for (let i = 0; i < rows; i++) {
    arr.push(new Array(cols).fill(0))
  }

  for (let i = 0; i < rows; i++) {
    for (let d = 0; d < cols; d++) {
      if (matrix[i][d]) {
        for (let row = i - 1; row <= i + 1; row++) {
          for (let col = d - 1; col <= d + 1; col++) {
            if (row >= 0 && row < rows && col >= 0 && col < cols && !(row === i && col === d)) {
              arr[row][col]++
            }
          }
        }
      }
    }
  }
  return arr
}

module.exports = {
  minesweeper
};
