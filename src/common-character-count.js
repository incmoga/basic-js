const { NotImplementedError } = require("../lib");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */

function getCommonCharacterCount(s1, s2) {
  const s2Array = s2.split("");
  let count = 0;
  for (let char of s1) {
    const i = s2Array.indexOf(char);
    if (i !== -1) {
      count++;
      s2Array.splice(i, 1);
    }
  }

  return count;
}

module.exports = {
  getCommonCharacterCount,
};
