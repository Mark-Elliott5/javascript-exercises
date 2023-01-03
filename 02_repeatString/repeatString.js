const repeatString = function(inputString, quantity) {
    if (quantity < 0) {
        return 'ERROR';
    } else if (typeof inputString === 'string') {
        return inputString.repeat(quantity);
    } else {
        return TypeError;
    }
};

// Do not edit below this line
module.exports = repeatString;
