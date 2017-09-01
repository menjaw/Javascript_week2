// /**
//  * Created by Menja on 31-08-2017.
//  */
//Variables
var wrapper = document.getElementById("wrapper");
var first = document.getElementById("div1");
var second = document.getElementById("div2");
var third = document.getElementById("div3");
var fourth = document.getElementById("div4");
var fifth = document.getElementById("div5");
var sixth = document.getElementById("div6");
var seventh = document.getElementById("div7");


//onClick without bubbling mechanism
var printIdonClick = function () {
    console.log("Hi I am " + this.id);//this.id hænger sig fast på objektet
}
// first.onclick = printIdonClick; //hvis man putter parenteser på funktionen her, køres den inden der klikkes
// second.onclick = printIdonClick;
// third.onclick = printIdonClick;
// fourth.onclick = printIdonClick;
// fifth.onclick = printIdonClick;
// sixth.onclick = printIdonClick;
// seventh.onclick = printIdonClick;


//onclick with bubbling mechanism
function printId(event) {
    console.log("Clicked target that is triggered: " + event.target.id + ". This is the parent element: " + this.id);//this.id refererer til wrapper objektet
    document.getElementById("printText").innerText = ("Clicked target that is triggered: " + event.target.id + ". This is the parent element: " + this.id);//this.id refererer til wrapper objektet
}
wrapper.onclick = printId;


// function printId(element) {
//     element = element || window.event;
//     element = element.target || element.srcElement;
//     console.log(element);
// }
