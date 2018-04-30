$(document).ready(function() {

//set up variables

//select a random number to display at start of game between 19-120
var randomNumber = Math.floor(Math.random()*101+19)
//append randomnumber in html doc with div class="targetScore"
$(".targetScore").text(randomNumber)
console.log(randomNumber)

//each button has to select a random number between 1-12(no appending to html stays hidden)
var randomNumberBtn1 = Math.floor(Math.random()*11+1)
var randomNumberBtn2 = Math.floor(Math.random()*11+1)
var randomNumberBtn3= Math.floor(Math.random()*11+1)
var randomNumberBtn4 = Math.floor(Math.random()*11+1)
console.log(randomNumberBtn1,randomNumberBtn2,randomNumberBtn3,randomNumberBtn4,)

var wins = 0;
var loses = 0;
var userScore = 0;



//wins
//function wins() {
    // (userScore == randomNumber)
    //$("#sentence").append("YOU WIN!").innerHTML


//loses

$(".userScoreCounter").text(userScore)

$("#jewel1").on("click", ".gems", function() {
    var userScore = userScore + randomNumberBtn1;
    console.log("new userScore=" + userScore);
    $(".userScoreCounter").text(userScore);
    console.log(userScore)
        //if win or lose situations
        if (userScore == randomNumber){
            winner();
        }
        else if (userScore > randomNumber) {
            loser();
        }

})
$("#jewel2").on("click",".gems", function() {
    var userScore = userScore + randomNumberBtn2;
    console.log("new userScore=" + userScore);
    $(".userScoreCounter").text(userScore);
        //if win or lose situations
        if (userScore == randomNumber){
            winner();
        }
        else if (userScore > randomNumber) {
            loser();
        }

})
$("#jewel3").on("click",".gems", function() {
    var userScore = userScore + randomNumberBtn3;
    console.log("new userScore=" + userScore);
    $(".userScoreCounter").text(userScore);
        //if win or lose situations
        if (userScore == randomNumber){
            winner();
        }
        else if (userScore > randomNumber) {
            loser();
        }

})
$("#jewel4").on("click", ".gems", function() {
    var userScore = userScore + randomNumberBtn4;
    console.log("new userScore=" + userScore);
    $(".userScoreCounter").text(userScore);
        //if win or lose situations
        if (userScore == randomNumber){
            winner();
        }
        else if (userScore > randomNumber) {
            loser();
        }

});
//reset the game when user either matches target score or goes over target score, append to html doc
$(".wins").text(wins)
$(".loses").text(loses)

function reset() {

    randomNumber=Math.floor(Math.random()*101+19);
    $(".targetScore").text(randomNumber);
    randomNumberBtn1 = Math.floor(Math.random()*11+1);
    randomNumberBtn2 = Math.floor(Math.random()*11+1);
    randomNumberBtn3= Math.floor(Math.random()*11+1);
    randomNumberBtn4 = Math.floor(Math.random()*11+1);
    userScore = 0;
    $('#finalTotal').text(userScore);
}


});
