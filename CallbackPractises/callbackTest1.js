/**
 * Created by Menja on 30-08-2017.
 */
var friends = ["Pierre", "David", "Stacey", "Sofie"];

//Here we pass an anonymous function as a parameter
friends.forEach(function (eachItem, index) {
    console.log(index + 1 + ":" + eachItem);
});


//Here we create a test callback function
function useCallback(callback, callback2) {
    console.log("This is the function that is used to run the callback function");
    callback();
    callback2();
}

function callbackFunction() {
    console.log("This is the callback function");
}

function anotherCallback() {
    console.log("This is another callback function");
}

useCallback(callbackFunction, anotherCallback);