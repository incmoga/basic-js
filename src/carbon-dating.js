const { NotImplementedError } = require("../lib");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if (typeof sampleActivity !== "string" || arguments.length === 0) {
    return false;
  }

  const cleanedValue = sampleActivity.trim();
  if (cleanedValue === "") {
    return false;
  }

  const activity = parseFloat(cleanedValue);
  if (
    isNaN(activity) ||
    activity <= 0 ||
    activity >= MODERN_ACTIVITY ||
    !isFinite(activity)
  ) {
    return false;
  }

  const k = 0.693 / HALF_LIFE_PERIOD;
  const age = Math.log(MODERN_ACTIVITY / activity) / k;

  if (isNaN(age) || !isFinite(age) || age < 0) {
    return false;
  }

  return Math.ceil(age);
}

module.exports = {
  dateSample,
};
