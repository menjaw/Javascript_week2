/**
 * Created by Menja on 30-08-2017.
 */
var friends = ["Pierre", "David", "Stacey", "Sofie"];

//Here we pass an anonymous function as a parameter
friends.forEach(function (eachItem, index) {
    console.log(index + 1 + ":" + eachItem);
});

