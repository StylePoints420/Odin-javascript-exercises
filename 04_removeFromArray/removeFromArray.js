const removeFromArray = function(arr, ...valuesToRemove) {
    for(let i of valuesToRemove) {
        if(arr.includes(i) == true) {
            arr.splice(arr.indexOf(i), 1);
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
