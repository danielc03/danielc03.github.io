//  Menu

const openSideMenu = () =>{
	document.querySelector("#side-menu").style.width = "250px";
	document.querySelector("#main").style.marginLeft = "250px";
};

const closeSideMenu = () =>{
	document.querySelector("#side-menu").style.width = "0";
	document.querySelector("#main").style.marginLeft = "0";
};


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