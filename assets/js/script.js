let menu = document.querySelector(".menu");
let div = document.querySelector("div");


const openNav = () => {
	div.style.opacity = "0.1";
	div.style.transition = ".5s";
    document.querySelector("#mySidenav").style.width = "250px";
}

const closeNav = () => {
	document.querySelector(".container").style.opacity = "1";
	div.style.transition = "2s";
    document.querySelector("#mySidenav").style.width = "0";
}

const menuInvisible = () => {
	menu.style.opacity = "0";
	menu.addEventListener
}

const menuRestore = () => {
	menu.style.opacity = "1";	
}

const menuHover = () => {
	menu.style.color = "grey";
}

const menuHoverOff = () => {
	menu.style.color = "black";
}
