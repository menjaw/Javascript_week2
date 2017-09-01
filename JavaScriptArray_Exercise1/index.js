/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//Arrays declared and printet out 
var boys = ["Torben", " Gert", " Klaus", " Henning", " Alfred "];
var girls = ["Tine", " Helga", " Karen", " Greta", " Anna"];
//console.log("boys") = "First array: " + boys;
console.log("First array: " + boys);
//console.log("girls") = "Second array: " + girls;
console.log("First array: " + girls);

//Merge the 2 arrays with concat() and print out
var all = boys.concat(girls);
//console.log("concatArray") = "This is the 2 array concated: " + all;
console.log("This is the 2 array concated: " + all);


//Reduce array into a single String with join() and seperated with hyphen (-) and then comma (,)
//console.log("reduceArrayHyphen") = "Array as hyphen seperated String: " + all.join("<b> - </b>");
console.log("Array as hyphen seperated String: " + all.join("<b> - </b>"));
//console.log("reduceArrayComma") = "Array as comma seperated String: " + all.join("<b> , </b>");
console.log("Array as comma seperated String: " + all.join("<b> , </b>"));


//ADD NEW ITEM IN THE START AND THE END AT THE ARRAY
//Add item at the first place of the array with the unshift() method
//console.log("addItemStart1") = "There are now: " + "<b>" + girls.unshift("<b> Frida</b>", "<b> Daja </b>") + "</b>" + " girl names in the girl-array";
console.log("There are now: " + "<b>" + girls.unshift("<b> Frida</b>", "<b> Daja </b>") + "</b>" + " girl names in the girl-array");
//console.log("addItemStart2") = "There are now: " + "<b>" + boys.unshift("<b> Simon</b>", "<b> Lucke </b>") + "</b>" + " boy names in the boy-array";
console.log("There are now: " + "<b>" + boys.unshift("<b> Simon</b>", "<b> Lucke </b>") + "</b>" + " boy names in the boy-array");
//console.log("addItemStart3") = "There are now: " + "<b>" + all.unshift("<b> Sherry</b>", "<b> Heninrich</b>", "<b> Albert</b>", "<b> Eva</b> ") + "</b>" + " names in the all-array";
console.log("There are now: " + "<b>" + all.unshift("<b> Sherry</b>", "<b> Heninrich</b>", "<b> Albert</b>", "<b> Eva</b> ") + "</b>" + " names in the all-array");



//Add item in the end of the array with the push() method
console.log("There are now: " + "<b>" + girls.push("<b> Anne-lise</b>", "<b> Vera</b>") + "</b>" + " girl names in the girl-array");
console.log("There are now: " + "<b>" + boys.push("<b> Anders</b>", "<b> Brian</b>", "<b> Frede</b>") + "</b>" + " boy names in the boy-array");
console.log("There are now: " + "<b>" + all.push("<b> Ann</b>", "<b> Kasper</b>", "<b> Viggo</b>") + "</b>" + " names in the all-array");

//Print out all 3 arrays with the new names added
console.log("Girl array with new names: " + girls + "<br>" +
    "Boy array with new names: " + boys + "<br>" +
    "The All array with the new added names: " + all);


//REMOVE THE FIRST AND LAST ITEM IN ARRAY
//Remove the first item of the array with the shift() method
console.log("Girls: " + "<b>" + girls.shift() + "</b>" + " is removed from the list");
console.log("Boys: " + "<b>" + boys.shift() + "</b>" + " is removed from the list");
console.log("All: " + "<b>" + all.shift() + "</b>" + " is removed from the list");


//Remove item at the end of the array with the pop() method
console.log("Girls: " + "<b>" + girls.pop() + "</b>" + " is removed from the list");
console.log("Boys: " + "<b>" + boys.pop() + "</b>" + " is removed from the list");
console.log("All: " + "<b>" + all.pop() + "</b>" + " is removed from the list");

//Print out all 3 arrays with the new names added
console.log("Girl array without the removed names: " + girls + "<br>" +
    "Boy array without the removed names: " + boys + "<br>" +
    "The All array without the removed names: " + all);



//CHANGE ARRAY BY ADDING NEW OR REMOVE EXISTING ITEMS
//Add new item to specific place in the array with the splice() method
//SYNTAX: array.splice(index, howmany items to be removed, "New Item")
console.log(girls.splice(2, 0, "<b> New Girl </b>", "<b> New Name </b>")); //SYNTAX: array.splice(index, howmany items to be removed, "added Item")
console.log(boys.splice(4, 0, "<b> New boy </b>", "<b> Boy Name </b>"));
console.log(all.splice(7, 0, " <b> All new </b>", "<b> Not new at all </b>"));

//Print all 3 arrays with the new added names
console.log("Girl array with new names: " + girls + "<br>" +
    "Boy array with new names: " + boys + "<br>" +
    "The All array with the new added names: " + all);

//Remove existing item from a specific place in the array with the splice() method
//SYNTAX: array.splice(index, howmany items to be removed)
console.log(girls.splice(4, 1));
console.log(boys.splice(2, 2));
console.log(all.splice(8, all.length));

//Print all 3 arrays with the new added names
console.log("Girl-array with new names: " + girls + "<br>" +
    "Boy-array with new names: " + boys + "<br>" +
    "The-All array with the new added names: " + all);


//Reverse array
console.log("The girl-array reversed: " + girls.reverse() + "<br>" +
    "The boy-array reversed: " + boys.reverse() + "<br>" +
    "The all-array reversed: " + all.reverse() + "<br>");


//Sort array
//console.log("sortArray") = "Girl-array sorted without compareFunction [" + girls.sort() + "]";
console.log("Sorted girl-array: " + girls.sort());
console.log("Sorted boy-array: " + boys.sort());
console.log("Sorted array: " + all.sort());

var bookNames = ["Learn JavaScript", " JPA", " Linux settings", " Server history"];
var schoolBooks = new Array(" Start to code", " Begin to understand", " Learn a lot", " Do something", " Grow up");
var eBooks = [" Browser", " PHP", " C#", " LEAN", " ITIL"];

//.LENGTH: See how many Items the array contains (property)
console.log("The array contains " + "<b>" + bookNames.length + "</b>" + " items: " + "\n" + bookNames);


//CONCAT: Put the two array together to one array (method)
console.log(bookNames.concat(schoolBooks + eBooks));


//JOIN: convert the array to a string
var artists = ["Lady Gaga", "Michael Jackson", "Kings of Leon", "Asaf Avidan", "Amy Winehouse"];
var convertToString = artists.join(" - ");

console.log(convertToString);

//Check the type (jubii it works!!)
var checkArtists = typeof artists;
var checkConvertion = typeof convertToString;
console.log("Artists is an: " + checkArtists + "<br>" + " Now it is a: " + checkConvertion);

//SORT: sorts the item in the array
var animals = new Array("Horse", "Elephant", "Abe", "Donkey");
animals.sort();
var sortedAnimals = animals.join();
console.log(sortedAnimals);

var bookNames = ["Learn JavaScript", "JPA", "Linux", "Server Installation", "ABC", "All you need"];
bookNames.push("Array", "Mon");
bookNames.sort();
console.log(bookNames);

//MAP
console.log(girls.map(function (i) { return i.toUpperCase(); }));

//Another way to map
var toUpper = "testerString";
var str = toUpper.toUpperCase();
console.log(str);

console.log("This is now a string: " + girls.toString());



//ARRAY FILTER METHOD
//Ages
var ages = [12, 33, 95, 21, 56, 44, 82, 28, 10, 11, 8, 4, 9, 2];
function checkAge(age){
return age >= 18;
}
function allowedAges(){
    console.log(ages.filter(checkAge));//creates a new array that contains the allowed ages
}
console.log(allowedAges());

//Names
var names = ["Torben", "Sille", "Gert", "Klaus", "Henning", "Alfred", "Anna", "Ib", "Lilly"];
function checkNames(incomingName){
    return incomingName == "Alfred";
}
function allowedNames(){
console.log(names.filter(checkNames));
}
console.log(allowedNames());