const convertToCelsius = function(myNum) {
  return (Math.round(((myNum - 32) * 5/9) * 10) / 10);
};

const convertToFahrenheit = function(myNum) {
  return (Math.round((myNum * 9/5 + 32) * 10) / 10);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
