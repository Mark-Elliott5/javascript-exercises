const getTheTitles = function(inputArray) {
    newArray = [];
    for (let i = 0; i < inputArray.length; i++) {
        newArray.push(inputArray[i]['title']);
    } return newArray;
};

// Do not edit below this line
module.exports = getTheTitles;
