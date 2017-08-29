
//document.getElementById("output1").innerHTML = "Hallo World. Now it is time for javaScript";

//document.getElementById("output2").innerHTML = alert("This is an alert with a message");

//var myObject = {name: "henrik", age: 56, address: "Living here 33"}
//console.log(myObject);

//document.getElementById("output3").innerHTML = function myFunc(){
//    console.log("This is a function.");
//}

/*function myCalc(num1, num2, num3) {
    var result = num1 + num2 + num3;
    for(var i = 0; i < arguments.length; i++){
        result += arguments[i];
        ////document.write("For-loop: " + result);
        console.log(result);
    }
    return result;
}
myCalc(2, 5, 3);*/

var multiplier = function (arg) {
    return arg * arg;
}

var callBackDemo = function (arg, myCallBack) {
    return myCallBack(arg);
}

var result = callBackDemo(4, multiplier);
console.log(result);
