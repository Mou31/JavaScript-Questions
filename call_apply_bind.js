//function borrowing

let name = {
    firstName: "Mou",
    lastName: "Mazumder",
}

let printFullName = function(hometown, country) {
    console.log(this.firstName + " " + this.lastName +  " " + "from" +  " " + hometown +  "," + country)
}

printFullName.call(name, "Assam", "India");

let name2 = {
    firstName: "Papu",
    lastName: "Singh"
}

// call method
printFullName.call(name2, "Bihar", "USA");

// apply method
printFullName.apply(name2, ["Mumbai", "India"]);

//bind method
let printMyName = printFullName.bind(name2, "Mumbai", "India");
printMyName();
