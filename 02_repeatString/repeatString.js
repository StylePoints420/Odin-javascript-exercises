const repeatString = function(string, num) {
    if (num < 0) {
        return "ERROR";
    }
    for(let i = 0;i <= num; i++) {
        return string.repeat(num);
        // console.log(string);
    }
};

// Do not edit below this line
module.exports = repeatString;
