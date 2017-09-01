/**
 * Created by Menja on 01-09-2017.
 */
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


//5: Takes the two paramters and make a callback to the add-method
console.log(cb(3,3,add));

//6: Takes the two paramters and make a callback to the sub-method
console.log(cb(5, 2, sub));