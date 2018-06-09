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

let marginY = 0;
let destination = 0;
let speed = 10;
let scroller = null;

const initScroll = (elementId) => {
	destination = document.querySelector(`#${elementId}`).offsetTop;

	scroller = setTimeout(function(){
		initScroll(elementId);
	}, 1);
	marginY += speed;

	if(marginY >= destination){
		clearTimeout(scroller);
	}

	window.scroll(0, marginY);
};


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