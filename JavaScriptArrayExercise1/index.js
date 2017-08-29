/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//Arrays declared and printet out 
var boys = ["Torben", " Gert", " Klaus", " Henning", " Alfred "];
var girls = ["Tine", " Helga", " Karen", " Greta", " Anna"];
//document.getElementById("boys").innerHTML = "First array: " + boys;
console.log("First array: " + boys);
//document.getElementById("girls").innerHTML = "Second array: " + girls;
console.log("First array: " + girls);

//Merge the 2 arrays with concat() and print out
var all = boys.concat(girls);
//document.getElementById("concatArray").innerHTML = "This is the 2 array concated: " + all;
console.log("This is the 2 array concated: " + all);

/*
//Reduce array into a single String with join() and seperated with hyphen (-) and then comma (,)
//document.getElementById("reduceArrayHyphen").innerHTML = "Array as hyphen seperated String: " + all.join("<b> - </b>");
console.log("Array as hyphen seperated String: " + all.join("<b> - </b>"));
//document.getElementById("reduceArrayComma").innerHTML = "Array as comma seperated String: " + all.join("<b> , </b>");
console.log("Array as comma seperated String: " + all.join("<b> , </b>"));


//ADD NEW ITEM IN THE START AND THE END AT THE ARRAY
//Add item at the first place of the array with the unshift() method
//document.getElementById("addItemStart1").innerHTML = "There are now: " + "<b>" + girls.unshift("<b> Frida</b>", "<b> Daja </b>") + "</b>" + " girl names in the girl-array";
console.log( "There are now: " + "<b>" + girls.unshift("<b> Frida</b>", "<b> Daja </b>") + "</b>" + " girl names in the girl-array");
//document.getElementById("addItemStart2").innerHTML = "There are now: " + "<b>" + boys.unshift("<b> Simon</b>", "<b> Lucke </b>") + "</b>" + " boy names in the boy-array";
console.log( "There are now: " + "<b>" + boys.unshift("<b> Simon</b>", "<b> Lucke </b>") + "</b>" + " boy names in the boy-array");
//document.getElementById("addItemStart3").innerHTML = "There are now: " + "<b>" + all.unshift("<b> Sherry</b>", "<b> Heninrich</b>", "<b> Albert</b>", "<b> Eva</b> ") + "</b>" + " names in the all-array";
console.log( "There are now: " + "<b>" + all.unshift("<b> Sherry</b>", "<b> Heninrich</b>", "<b> Albert</b>", "<b> Eva</b> ") + "</b>" + " names in the all-array");
*/

/*
//Add item in the end of the array with the push() method
document.getElementById("addItemEnd1").innerHTML = "There are now: " + "<b>" + girls.push("<b> Anne-lise</b>", "<b> Vera</b>") + "</b>" + " girl names in the girl-array";
document.getElementById("addItemEnd2").innerHTML = "There are now: " + "<b>" + boys.push("<b> Anders</b>", "<b> Brian</b>", "<b> Frede</b>") + "</b>" + " boy names in the boy-array";
document.getElementById("addItemEnd3").innerHTML = "There are now: " + "<b>" + all.push("<b> Ann</b>", "<b> Kasper</b>", "<b> Viggo</b>") + "</b>" + " names in the all-array";

//Print out all 3 arrays with the new names added
document.getElementById("printAddItem").innerHTML = "Girl array with new names: " + girls + "<br>" +
    "Boy array with new names: " + boys + "<br>" +
    "The All array with the new added names: " + all;


//REMOVE THE FIRST AND LAST ITEM IN ARRAY
//Remove the first item of the array with the shift() method
document.getElementById("removeItemStart1").innerHTML = "Girls: " + "<b>" + girls.shift() + "</b>" + " is removed from the list";
document.getElementById("removeItemStart2").innerHTML = "Boys: " + "<b>" + boys.shift() + "</b>" + " is removed from the list";
document.getElementById("removeItemStart3").innerHTML = "All: " + "<b>" + all.shift() + "</b>" + " is removed from the list";


//Remove item at the end of the array with the pop() method
document.getElementById("removeItemEnd1").innerHTML = "Girls: " + "<b>" + girls.pop() + "</b>" + " is removed from the list";
document.getElementById("removeItemEnd2").innerHTML = "Boys: " + "<b>" + boys.pop() + "</b>" + " is removed from the list";
document.getElementById("removeItemEnd3").innerHTML = "All: " + "<b>" + all.pop() + "</b>" + " is removed from the list";

//Print out all 3 arrays with the new names added
document.getElementById("printRemoveItem").innerHTML = "Girl array without the removed names: " + girls + "<br>" +
    "Boy array without the removed names: " + boys + "<br>" +
    "The All array without the removed names: " + all;



//CHANGE ARRAY BY ADDING NEW OR REMOVE EXISTING ITEMS
//Add new item to specific place in the array with the splice() method
//SYNTAX: array.splice(index, howmany items to be removed, "New Item")
document.getElementById("addAnywhere1").innerHTML = girls.splice(2, 0, "<b> New Girl </b>", "<b> New Name </b>"); //SYNTAX: array.splice(index, howmany items to be removed, "added Item")
document.getElementById("addAnywhere2").innerHTML = boys.splice(4, 0, "<b> New boy </b>", "<b> Boy Name </b>");
document.getElementById("addAnywhere3").innerHTML = all.splice(7, 0, " <b> All new </b>", "<b> Not new at all </b>");

//Print all 3 arrays with the new added names
document.getElementById("printAddAnywhere").innerHTML = "Girl array with new names: " + girls + "<br>" +
    "Boy array with new names: " + boys + "<br>" +
    "The All array with the new added names: " + all;

//Remove existing item from a specific place in the array with the splice() method
//SYNTAX: array.splice(index, howmany items to be removed)
document.getElementById("removeAnywhere1").innerHTML = girls.splice(4, 1);
document.getElementById("removeAnywhere2").innerHTML = boys.splice(2, 2);
document.getElementById("removeAnywhere3").innerHTML = all.splice(8, all.length);

//Print all 3 arrays with the new added names
document.getElementById("printRemoveAnywhere").innerHTML = "Girl-array with new names: " + girls + "<br>" +
    "Boy-array with new names: " + boys + "<br>" +
    "The-All array with the new added names: " + all;


//Reverse array
document.getElementById("reverseArray").innerHTML = "The girl-array reversed: " + girls.reverse() + "<br>" +
    "The boy-array reversed: " + boys.reverse() + "<br>" +
    "The all-array reversed: " + all.reverse() + "<br>";
*/

//Sort array
//document.getElementById("sortArray").innerHTML = "Girl-array sorted without compareFunction [" + girls.sort() + "]";
/*console.log("Sorted girl-array: " + girls.sort());
console.log("Sorted boy-array: " + boys.sort());
console.log("Sorted array: " + all.sort());*/


console.log(girls.map(function(i){return i.toUpperCase}));

//var toUpper = girls.join("- ");
//toUpper.toLocaleUpperCase();
//console.log(toUpper);

console.log("This is now a string: " + girls.toString());

//console.log(girls.map());

