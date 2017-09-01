/**
 * Created by Menja on 30-08-2017.
 */
function defaultColor() {
    alert("Det virker hvis denne kommer frem");
    var divs = document.getElementsByTagName('div');
    for (var i = 0; i < divs.length; i++) {
        divs[i].style.backgroundColor = "grey";
    }
}
defaultColor();

function changeColor(){
var divs = document.getElementsByTagName('div');
    divs[0].style.backgroundColor = "red";
    divs[1].style.backgroundColor = "yellow";
    divs[2].style.backgroundColor = "green";
}