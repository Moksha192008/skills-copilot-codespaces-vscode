function calculateNumbers(var1, var2) {
  return Number(var1) + Number(var2);
}

if (typeof module !== 'undefined') {
  module.exports = calculateNumbers;
  module.exports.calculateNumbers = calculateNumbers;
}