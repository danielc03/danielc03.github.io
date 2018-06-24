const sideMenu = document.querySelector("#side-menu");


//  Menu

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

//  review on scroll

window.sr = ScrollReveal();
sr.reveal('.navbar', {
	duration: 2500,
	origin: 'right',
	distance: '300px',
	delay: 1000
});






