// Star Pattern - Pyramid

function generatePyramid() {
    let totalRows = 5;
    let output = ' ';
    for (let i = 1; i < totalRows; i++) {
        for (let j = 1; j <= i; j++) {
            output += '*';
        }
        console.log(output);
        output = ' ';
    }
}
generatePyramid();

// Star Pattern - Square

let totalRows = 4;

let output = '';

for (let i = 0; i<totalRows; i++) {
    for(let j=0; j<=totalRows; j++){
        output += '*'
    }
    output += "\n"
}

console.log(output);

// Star Pattern - Hollow Square

let totalRows = 5;
let output = '';
for (let i=0; i< totalRows; i++){
    for(let j=0; j< totalRows; j++){
        if(i === 0 || i === totalRows - 1){
            output += '*';
        }
        else{
            if(j === 0 || j === totalRows - 1){
                output += '*';
            }
            else {
                output += ' ';
            }
        }
    }
    output += "\n";
}

console.log(output);

// Star Pattern - Left Triangle

let n = 5;
let output = '';

for(let i = 1; i<=n; i++){
    for (let j=0; j< n-i; j++){
        output += ' '
    }
    for(let k=0; k<i; k++){
        output += "*"
    }
    output += "\n"
}

console.log(output);
