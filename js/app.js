console.log('Loading.....');

var canvas = document.getElementById('canvas'),
	context = canvas.getContext('2d');

var leftMouseButton = 0,
	middleMouseButton = 1,
	rightMouseButton = 2;

canvas.onmousedown = function(event){
	console.log({
		msg: 'mouse down', 
		event: event
	});
	
	window.event.returnValue = false;
	event.preventDefault();
	

	if(event.button == rightMouseButton)
		window.menu.show();
}

canvas.onmouseup = function(event){
	console.log({
		msg: 'mouse up', 
		event: event
	});

	window.event.returnValue = false;
	event.preventDefault();
	

	if(event.button == rightMouseButton)
		window.menu.hide();
}

if (document.addEventListener) {
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    }, false);
} else {
    document.attachEvent('oncontextmenu', function() {
        window.event.returnValue = false;
    });
}

var Menu = function(){

	this.menu = $('#menu');

	this.show = function(){
		this.menu.show();
	};

	this.hide = function(){
		this.menu.hide();
	};

	this.hide();
}

window.menu = new Menu();

// Scale canvas by using CSS
$(document).ready(function(){
	canvas.width = window.innerWidth - 2;
	canvas.height = window.innerHeight - 2;

})

console.clear();
console.log('Loaded');