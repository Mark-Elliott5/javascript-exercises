const sumAll = function(initialValue, exitValue) {
    //if (!((Number.isInteger(initialValue)) && (Number.isInteger(exitValue)))) {
    if (!((typeof initialValue == 'number') && (typeof exitValue == 'number'))) {
        return 'ERROR';
    } if ((initialValue < 0) || (exitValue < 0)) {
        return 'ERROR';
    }
    let result = 0;
    if (initialValue < exitValue) {
        for (let i = initialValue; i <= exitValue; i++) {
            result += i;
        }
    } else {
        for (let i = exitValue; i <= initialValue; i++) {
            result += i;
        }
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
