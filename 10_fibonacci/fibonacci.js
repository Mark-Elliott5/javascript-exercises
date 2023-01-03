const fibonacci = function(input) {
    let newInput = parseInt(input);
    if ((Math.sign(newInput) == -1) || (newInput == 0)) {
        return 'OOPS'
    } 
    let fiboArray = [1, 1];
    if (newInput <= 2) {
        return fiboArray[newInput-1];
    }
    for (let i = 2; i < newInput; i++) {
        let newNumber = fiboArray[fiboArray.length-(2)] + fiboArray[fiboArray.length-(1)];
        fiboArray.push(newNumber);
    } return fiboArray[fiboArray.length-1];
};

// Do not edit below this line
module.exports = fibonacci;
