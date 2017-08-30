/**
 * Created by Menja on 30-08-2017.
 */
var numberList = [2, 54, 12, 55, 98, 22, 7, 9, 27, 33,];

function callback(numberList) {
    var newNumberList = [];

    //Run through the list/data with a loop
    for (var i = 0; i < numberList.length; i++) {
        //Condition that say the number has to be less than 30
        if (numberList[i] < 30) {
            //Put te value into the new array
            newNumberList.push(numberList[i]);
        }
    }
    return newNumberList;
}


//Be able to invoke the callback-function, by calling it and then pass the parameter
function filter(numberList, callback) {
    return callback(numberList);
}


//Prints out the result to the console
var filtered = filter(numberList, callback);
console.log(filtered);