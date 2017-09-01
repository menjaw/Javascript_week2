//Function Declaration
function add(i1, i2) {
    return i1 + i2;
}

//Function Expression
var sub = function (i1, i2) {
    return i1 - i2;
}

//Callback Example
var cb = function (i1, i2, callback) {
    return "Result from the two numbers: " + i1 + " + " + i2 + " = " + callback(i1, i2);
}

//If you add the string after the extra parameter it will be ignored and the numbers will be added together
//console.log(add(2, 2, 2 + " If you add an extra parameter, everything after will just be ignored "));

//This will fail with a TypeError, because the cb-functions third parameter isn't a function
//console.log(cb(3,3, add()));

//This will add the number and String together
console.log(cb(3, " String", add));


//Checking arguments
typeof i1  //Will fail if i1 is undefined or not a number
typeof i2 //Will fail if i2 is undefined or not a number

console.log(add());
