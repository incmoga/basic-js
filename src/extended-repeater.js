const { NotImplementedError } = require("../lib");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(str, options) {
  const mainStr = String(str);
  const additionStr = options.hasOwnProperty("addition")
    ? String(options.addition)
    : "";

  const {
    repeatTimes = 1,
    separator = "+",
    additionRepeatTimes = 1,
    additionSeparator = "|",
  } = options;

  const additionPart = additionStr
    ? Array(additionRepeatTimes).fill(additionStr).join(additionSeparator)
    : "";

  const fullStr = mainStr + additionPart;

  return Array(repeatTimes).fill(fullStr).join(separator);
}

module.exports = {
  repeater,
};
