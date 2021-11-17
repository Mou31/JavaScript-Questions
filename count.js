// To find the count of each element in an array


let arr = [1,2,3,1,4,5,2,6,4,8,9,0,7,9]

let count = {};

for (let i=0; i<arr.length; i++) {
    let num = arr[i];
    count[num] = count[num] ? count[num] + 1: 1;
}
console.log(count);
