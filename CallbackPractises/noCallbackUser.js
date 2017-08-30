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
 *Use the functions this way could be a problem if the add-function is slower than the get method
 * The new added item would not be showed in the list
 * That's because the getUser-function is finish before the addUser-function
 */
addUser("Susan");
addUser("Sandy");
addUser("Simon");
getUsers();