/**
 * Created by Menja on 01-09-2017.
 */
/*ONE WAY TO DO IT (useful way)*/
//Declare variable
var lastnames = ["Vanderpump", "Richardson", "Dickson", "Carlsson", "Birk", "Lennon"];


//Automatic: Creates a function that can be called and used to different arrays
//Map creates array. Puts the value from the old array in a list and then store it in the new array
function mapArrays(array) {
    var newList = array.map(function (name) {
        console.log(name);
        return '<li>' + name + '</li>';
    })
    return newList.join("");
}



//Maps the array lastnames and save it in a variable we can print out to the html page
var lastnameList = mapArrays(lastnames);

//Prints out the new arrays at the html page
document.getElementById("lastnameList").innerHTML = lastnameList;



//FUNCTIONS
//Function to add new user
function addlastname(element) {
    lastnames.push(element);
    document.getElementById("lastnameList").innerHTML = mapArrays(lastnames);
}

//Function to remove first element in array
function removeFirstElement() {
    lastnames.shift();
    document.getElementById("lastnameList").innerHTML = mapArrays(lastnames);
}

//Function to remove last element in array
function removeLastElement() {
    lastnames.pop();
    document.getElementById("lastnameList").innerHTML = mapArrays(lastnames);
}




//WHEN BUTTON IS CLICKED
//add element
document.getElementById("btnSubmit").onclick = function (event) {
    event.preventDefault();
    var input = document.getElementById("input").value;
    addlastname(input);
}

//remove first element
document.getElementById("btnRemoveFirst").onclick = function (event) {
    event.preventDefault();
    removeFirstElement();
}

//remove last element
document.getElementById("btnRemoveLast").onclick = function (event) {
    event.preventDefault();
    removeLastElement();
}

// /*ANOTHER WAY (not so useful)*/
// //Declare variables
// var firstnames = ["Toby", "Dash", "Hillary", "Cliff", "George", "Phil"];
// //Creates a new array for the firstnames and puts the value from the original array in the new one
// var firstnameList = firstnames.map(function (name) {
//     console.log(name);
//     return '<li>' + name + '</li>';
// })
// //Prints out the new list
// document.getElementById("firstnameList").innerHTML = firstnameList;


/*THIS DON'T DO ANYTHING AND DOESN'T WORKS*/
// function convertArrayToString(members) {
//     members.join(" - ");
//     return members;
// }
//
// var result = convertArrayToString(members);
// console.log(result);


// console.log(typeof members);
// console.log(typeof convertToString);
// function convertToString(members) {
//     return members.join();
//
// }
