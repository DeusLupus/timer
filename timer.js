"use strict";

var count = 30;

window.onload = pageLoad;

function pageLoad() {
	var startbtn = document.getElementById("start");
	startbutton.onclick = timer;

function timer() {
	setInterval(function(){
		count = count - 1;
		if (count = 0) {
			clearInterval(counter);
			document.getElementById("timer").innerHTML = "";
			return;
		}
	})
	document.getElementById("timer").innerHTML = count + " seconds";
}

function stop() {
    clearInterval(counter);
    document.getElementById("timer").innerHTML = "";
}

function reset() {
	count = 30;
	document.getElementById("timer").innerHTML = "30";
}
