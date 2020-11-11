// script.js

$(document).ready(function(){

"use strict";
var resultList = $("#resultList")
resultList.text("this is jQuery")

var toggleButton = $("#toggleButton")
toggleButton.on("click", function(){
    resultList.toggle(500)

    if (toggleButton.text() == "Hide") toggleButton.text("Show")
    else toggleButton.text ("Hide")
}) 

/*var msg= "If you find this, you probably work at rotschy";
console.log(msg);

var resultsDiv = document.getElementById("results")
resultsDiv.innerHTML = "<p>This is from javascript</p>"

var result = {
    name: "jQuery",
    language: "JavaScript",
    score: 4.5
    }
console.log(result.name)

var results = []
results.push({
    name: "results"})
console.log(results.name)



console.log(`msg is ${typeof (msg)}`)
console.log("resultsDiv is " + typeof(resultsDiv));

var none;
console.log("none is " + typeof(none));

var aNumber = 42;
console.log("aNumber is " + typeof(aNumber));

var trueFalse = true;
console.log("trueFalse is " + typeof(trueFalse));

if (none == undefined) {
    console.log ("Nothing is here");
}

if (none == undefined) {
    console.log("the number is 42");
}

function showMsg (msg) {
    console.log("Message to aliens: " +msg);
}

showMsg("beware earth rn, election day is today");

var showit = function (msg) {
    console.log(msg);
}

var inGlobal = true;

function testMe () {
console.log ("testMe: " + inGlobal);

var someMsg = "some Message";
console.log("testme: " + someMsg);
}

//console.log("global: " + someMsg);

testMe();*/
})