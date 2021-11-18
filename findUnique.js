// How do you find the largest and smallest number in an unsorted integer array?

// let arr = [1, 4, 8, 3, 7, 0, 9, 6, 5]

// for (let i = 0; i < arr.length; i++) {
//     let largest = 0;
//     let smallest = 0;

//     if (arr[i] > largest) {
//         largest = arr[i];
//     }
// }

let chars = ['A', 'B', 'A', 'C', 'B'];
let uniqueChars = [...new Set(chars)];

console.log(uniqueChars);
