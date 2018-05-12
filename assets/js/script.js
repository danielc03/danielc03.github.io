function openNav() {
	document.querySelector("div").style.opacity = "0.1";
	document.querySelector("div").style.transition = ".5s";
	document.querySelector("#mySidenav").style.width = "250px";
}

function closeNav() {
	document.querySelector(".container").style.opacity = "1";
	document.querySelector("div").style.transition = "2s";
    document.querySelector("#mySidenav").style.width = "0";

	document.querySelector("div").style.transition = "1s";
	document.querySelector("#mySidenav").style.width = "0";
}

function menu() {
	document.querySelector("#menu").style.opacity = "0";
}

function menuRestore(){
	document.querySelector("#menu").style.opacity ="1";	
}
