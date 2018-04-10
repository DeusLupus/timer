"use strict";

var count = 30;
/*
////working countdown but on page load instead of with button

var counter = setInterval(timer, 1000);

function timer() {
	count = count - 1;
	if (count <= 0) {
		clearInterval(counter);
		document.getElementById("timer").innerHTML = "";
		return;
	}
	document.getElementById("timer").innerHTML = count + " seconds";
}
*/

//attempt to have timer work with button
window.onload = pageLoad;

var counter;

function pageLoad() {
	var startbtn = document.getElementById("start");

	startbtn.onclick = countdown;
}

function countdown() {
	counter = setInterval(timer, 1000);
}

function timer() {
	count = count - 1;
	if (count <= 0) {
		clearInterval(counter);
		document.getElementById("timer").innerHTML = "";
		return;
	}
	document.getElementById("timer").innerHTML = count + " seconds";
}

function stop() {
	clearInterval(counter);
}

function reset() {
	clearInterval(counter);
	count = 30;
	document.getElementById("timer").innerHTML = count + " seconds";
}
