//  Menu

const sideMenu = document.querySelector("#side-menu");

//  Opening side menu 

const openSideMenu = () =>{
	sideMenu.style.width = "250px";
};

//  Closing side menu

const closeSideMenu = () =>{
	sideMenu.style.width = "0";
};

const closeMenuClick = (id) => {
	id.addEventListener("click", closeSideMenu);
};

//closing menu by clicking on body

const closeMenuClass = document.querySelectorAll(".closeMenu");

closeMenuClass.forEach(closeMenuClick);



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