/**
 * Created by Menja on 31-08-2017.
 */
var greetings = document.getElementById("hallo"); //Bliver til et objekt

greetings.onclick = function () {
    alert("You have clicked");
    this.style.width = 50;
    this.style.height = 50;
    this.style.backgroundColor = "black";
    this.style.color = "white";

    var myObject = {
        name: "This is the name of the object",
        print: function () {
            console.log(this.name);//This refererer her til myObject og ikke til selve funktionen
        }
    };
    myObject.print();


//Self-invoke function (don't need to call this):
    (function () {
        console.log(this);
    })();

    //Need to call this function
    this.demoFunc = function () {
        var demo1 = " Her bliver demoFunc kaldt. 'this' refererer til gloab window";
        console.log(this);
        console.log(demo1);
    };
    //console.log(demo1);
    this.demoFunc();
}

