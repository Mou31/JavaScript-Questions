let str = "Hello how are you";

let arr = str.split('');

let arr1 = []

let flag = false;

for (let i = 0; i < arr.length; i++) {
    let ele = arr[i];
    if (arr1.length == 0){
        flag = false;
    }
    for (let j = 0; j < arr1.length; j++) {
        if (ele == arr1[j]) {
           flag = true;
        }
    }
    if (!flag) {
        arr1.push(ele);
        flag = false;
    }
    else {
       flag = false;
    }
} 

console.log(arr1);
