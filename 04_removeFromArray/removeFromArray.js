// const removeFromArray = function(input) {
//     let args = Array.from(arguments);
//     let output = []
//     for (let i = 0; i < args.length; i++) {
//         if (args[i] in input) {
//             continue;
//         } else {
//             output.shift(input[i]);
//         }
//     }
//     return input;
// };

const removeFromArray = function(input) {
    let args = Array.from(arguments);
    args.shift();
    return input.filter(value => !args.includes(value));
}

// const removeFromArray = function(input) {
//     let args = Array.from(arguments);
//     args.shift();
//     let output = []
//     for (let i = 0; i < input.length; i++) {
//         for (let j = 0; j < args.length; j++) {
//             if (args[j] === input[i]) {
//                 continue;
//             } else {
//                 output.push(input[i]);
//             }
//         }
//     }
//     return output;
// }

// Do not edit below this line
module.exports = removeFromArray;
