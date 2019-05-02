var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.getElementById("random");


function setGradient () {
	body.style.background = 
		"linear-gradient(to right, " 
		+ color1.value 
		+ ", " 
		+ color2.value 
		+ ")";

		css.textContent = body.style.background + ";";
}

//sets default colors, assigns values to HTML
function defaultGradient(){
	color1.value = "#FF0000";
	color2.value = "#FFFF00";
	setGradient();
}

//returns random hex value
function setColor(){
	return '#'
	+ ("000000" 
	+ Math.random().toString(16).slice(2, 8).toUpperCase()).slice(-6);
}

//assigns random colors to gradient in CSS
function randomColors (){
	color1.value = setColor();
	color2.value = setColor();
	setGradient();
}

//outputs CSS text of background property
css.textContent = getComputedStyle(body).backgroundImage + ";";
defaultGradient();

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
random.addEventListener("click", randomColors);