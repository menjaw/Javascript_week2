var friends = ["Pierre", "David", "Stacey", "Sofie"];

//Pass an anonymous function as a parameter
friends.forEach(function (eachItem, index) {
    console.log(index + 1 + ":" + eachItem);
});


var bookNames = ["Learn JavaScript", "JPA", "Linux", "Server Installation"];
bookNames.push("Array", "Mon");
bookNames.sort();
console.log(bookNames);

var animals = new Array("Horse", "Elephant", "Abe", "Donkey");
animals.sort();
var sortedAnimals = animals.join();
console.log(sortedAnimals);