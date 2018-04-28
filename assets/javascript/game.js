$(document).ready(function() {

var main = $("body");
var buttons = main.find("#buttons");

// create the jewel button

//1. create for-loop to iterate through  array 
for (var i=0; i<randomNumber.length; i++) {
    //inside loop
//2. create a variable named "jewelBtn" equal to $("<button>")
var jewelBtn = $("<button>");
//3. then give "jewelBtn" classes
jewelBtn.addClass(".alphabet li")
//4. give "jewelBtn" attributes
jewelBtn.attr("data-letter" .this[i]);
//5.give each "jewelBtn" an image
jewelBtn.img(???????[i]);
//6 append to #buttons div
buttons.append(jewelBtn);

  }
}
