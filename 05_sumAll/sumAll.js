const sumAll = function(startNum, lastNum) {
    let errorMessage = "ERROR";
    let totalSum = 0;
    if (startNum > lastNum) {
        for(let i = lastNum; i <= startNum; i++) {
        totalSum += i;
        }
        return totalSum;
    }

    else if (startNum < 0 || lastNum < 0) {
        return errorMessage;
    }

    else if (typeof startNum !== "number" || typeof lastNum !== "number") {
        return errorMessage;
    }

    else {
        for(let i = startNum; i <= lastNum; i++) {
        totalSum += i;
        }
        return totalSum;
    }
};

// Do not edit below this line
module.exports = sumAll;
