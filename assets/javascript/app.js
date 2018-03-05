$(document).ready(function() {
      
var number = 120;
var intervalId;

function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}

function decrement() {

    number--;

    $("#show-number").html("<h2>" + "Time Left: " + number + "</h2>");

if (number === 0) {

    stop();

    alert("Time Up!");
}
}

function stop() {

    clearInterval(intervalId);
    }

run();
});