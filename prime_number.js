var number = window.prompt("Enter a number")

let isPrime = true;

if (number == 1) {
    console.log("Neither prime nor Composite");
}

else if (number > 1) {
    for(let i =2; i<number; i++){
        if (number% i == 0){
            isPrime = false;
            break;
        }
    }

    if(isPrime){
       console.log(`${number} is Prime`); 
    }
    else {
        console.log(`${number} is not Prime`);
    }
}
else {
    console.log("The number is not a prime number.");
}