const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
    u=0
    matrix.forEach(e=> {
      for(let i = 0; i<e.length; i++){
        if(e[i]=='^^'){
          u+=1
        }
      }
    })
    return u
}

module.exports = {
  countCats
};
