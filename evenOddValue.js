let arr = [1, 2, 3]
let even = 0;
let odd = 0;

function evenOddValue() {


    for (let i = 0; i < arr.length; i++) {
        if (i % 2 == 0) {
            even += arr[i];
        }
        else {
            odd += arr[i];
        }

    }
    console.log("Even indexes sum", even);
    console.log("Odd indexes sum", odd);
}
evenOddValue();

function subtract(a, b) {
    let sub = a - b;
    return sub;
}

let arr1 = subtract(even, odd)
console.log(arr1);


