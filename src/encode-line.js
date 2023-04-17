const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let r = ''
  let c = 1

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      c++
    } else {
      if (c > 1) {
        r += c + str[i];
      } else {
        r += str[i]
      }
      c = 1
    }
  }

  return r
}

module.exports = {
  encodeLine
};
