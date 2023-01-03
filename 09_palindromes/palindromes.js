// const palindromes = function (inputString) {
//     let newString = inputString.replace(/\W|_/g, '').toLowerCase();
//     for (let i = 0; i <= newString.length; i++) {
//         if (!(newString[i] == newString[(newString.length-(i+1))])) {
//             return false;
//         }
//     return true;
//     }
// };

const palindromes = function (inputString) {
    let newString = inputString.replace(/\W|_/g, '').toLowerCase();
    let reverseString = '';
    for (let i = (newString.length-1); i >= 0; i--) {
        reverseString += newString[i];
    } if (!(reverseString == newString)) {
        return false;
    } else { 
        return true;
    }
};

// Do not edit below this line
module.exports = palindromes;