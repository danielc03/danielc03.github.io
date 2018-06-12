//  Menu

const sideMenu = document.querySelector("#side-menu");
const close = document.querySelector(".btn-close");
const showcase = document.querySelector("#showcase");
const about = document.querySelector("#aboutme");
const projects = document.querySelector("#projects");
const knowledge = document.querySelector("#knowledge");
const contact = document.querySelector("#contact");
const footer = document.querySelector("footer");

const openSideMenu = () =>{
	sideMenu.style.width = "250px";
};

//  Closing side menu

const closeSideMenu = () =>{
	sideMenu.style.width = "0";
};

const closeMenu = (id) => {
	id.addEventListener("click", closeSideMenu);
}

const tags = [close, showcase, about, projects, knowledge, contact, footer];
tags.forEach(closeMenu);



// Smooth scrolling

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


//  TOP BUTTON

let marginY = 0;
let speed = 10;
let scroller = null;

const toTop = (elementId) => {
	destination = document.querySelector(`#${elementId}`).offsetTop;

	scroller = setTimeout(function(){
		toTop(elementId);
	}, 1);
	marginY -= speed;

	if(marginY <= 0 ){
		clearTimeout(scroller);
	}

	window.scroll(0, marginY);
};