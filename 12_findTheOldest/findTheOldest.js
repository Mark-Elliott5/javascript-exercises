const findTheOldest = function(inputArray) {
    for (let i = 0; i < inputArray.length; i++) {
        if (inputArray[i]['yearOfDeath']) {
            inputArray[i]['age'] = inputArray[i]['yearOfDeath'] - inputArray[i]['yearOfBirth'];
        } else {
            inputArray[i]['age'] = (new Date().getFullYear()) - inputArray[i]['yearOfBirth'];
        }
    } 
    inputArray.sort(compareAge);
    return inputArray[0];
};

function compareAge(a, b) {
    if (a['age'] > b['age']) {
        return -1;
    } if (a['age'] < b['age']) {
        return 1;
    } return 0;
}

// Do not edit below this line
module.exports = findTheOldest;
