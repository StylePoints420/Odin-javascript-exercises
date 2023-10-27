const reverseString = function(word) {
    let text = "";
    for (let i = word.length;i > 0; i--) {
        text += word[i-1];
    }
    return text;
};

// Do not edit below this line
module.exports = reverseString;
