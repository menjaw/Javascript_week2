//Function Declaration
function add(i1, i2){
return i1 + i2;
}

//Function Expression
var sub = function(i1, i2){
return i1 - i2;
}

//Callback Example
var cb = function(i1, i2, callback){
    return "Result from the two numbers: " + i1 + " + " + i2 + " = " + callback(i1, i2); 
}

//1: Call all the functions and understand
console.log(add(1,2) + " This method adds 1 and 2 together");

console.log(add + " With no parameters it will print out the function syntax");

//3: If you add the string after the extra parameter it will be ignored and the numbers will be added together
console.log(add(2,2,2 + " If you add an extra parameter, everything after will just be ignored "));

//3:If you add the String before the parameters it will just print out everythin without adding the numbers together and ignore the extra parameter
console.log(add("If you add an extra parameter, it will just be ignored " + 2,2,2));

//4: Result is NaN (not available number), which means that the value is not a legal number
console.log(add(1));

//5: Takes the two paramters and make a callback to the add-method
console.log(cb(3,3,add));

//6: Takes the two paramters and make a callback to the sub-method
console.log(cb(5, 2, sub));

//7: This will fail with a TypeError, because the cb-functions third parameter isn't a function
//console.log(cb(3,3, add()));

//8: This will add the number and String together
console.log(cb(3, " String", add));

//8: This will result in a NaN, because you can't make a substraction with a number and a String
console.log(cb(3, " String", sub));