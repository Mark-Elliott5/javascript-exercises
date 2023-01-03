const reverseString = function(inputString) {
    let reversedString = '';
    for (let i = 1; i <= inputString.length; i++) {
        reversedString += inputString[inputString.length-i];
    }
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;

