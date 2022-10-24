var x = "hello world!";


function try1 (){
    console.log("my try1");
}


var try2 = function (){
    console.log("my try2");
}


try1();

try2();


function compare (num1, num2){
    return num1 > num2;
}

var y = compare(5 , 7);

compare(9,"a");

compare();

var z = 20;
try3();

function try3(){
    var z = 5;
    try4();
}

function try4(){
    console.log(z);
}

function try5(demonstrate){
    // if full
    if(demonstrate === undefined){
        demonstrate = "Kotomoto";
    }
    // short cut for if above
    demonstrate = demonstrate || "Kotomoto";

}

var company = new Object();
company.name = "NOPWASD";
company.ceo = new Object();
company.ceo.name = "Ehab";
company.ceo.bod = "13/05/1960";



// so important to add event to element without adding attribute in html
document.addEventListener("DOMContentLoaded",
function (event) {
    
    function gobig(event) {
        var lis = document.querySelectorAll("li").textContent;
        lis += " biger";
        document.querySelectorAll("li").textContent = lis;
    }

    function sayhello(event) {
        var greeting = document.querySelector("h1").textContent;
        greeting = "Hi " + greeting;
        document.querySelector("h1").textContent = greeting;
    }

    document.querySelector("#Assignments").addEventListener("click",sayhello);

    document.querySelector(".designing").addEventListener("click",gobig);
}
);