// Given a string, reverse each word in the sentence

let str = "Hello World"

function reverseString(str){
    return str.split('').reverse().join('');
}

console.log(reverseString(str));