/**
 * Created by Menja on 30-08-2017.
 */

/*EXAMPLE WITHOUT CALLBACK*/
//We assume this is our database
var userList = ["Tony", "Britt", "Haley", "David"];
console.log("Default user list: " + userList);

//Functions
function addUser(username) {
    userList.push(username);
}

function getUsers() {
    console.log(userList);
}


/*
 *Using the functions this way could be a problem if the add-function is slower than the get method
 * The new added item would not be showed in the list when you get it
 * That's because the getUser-function is executed before the addUser-function is finish
 */
addUser("Susan");
addUser("Sandy");
addUser("Simon");
getUsers();


/*EXAMPLE WITH CALLBACK*/
//We assume this is our database
var userList = ["John", "Jane", "Michael", "Nicky", "Taylor"];
console.log("Default member list: " + userList);

//Functions
function addNewUser(userName) {
    userList.push(userName)
}

function addUser(userName, callback) {
    userList.push(userName);
    callback();
}

function getUsers() {
    console.log(userList);
}

/*First you add the user and then the get all users
 *Remember the callback is not a function
 *We are passing the hole function, we are not passing the function being called
 *The function is called in the addUser-function
 */
addNewUser("Lisa");
addNewUser("kim");
addUser("Scott", getUsers);


