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

	if(event.button == rightMouseButton)
		menu.show();
	
}

canvas.onmouseup = function(event){
	console.log({
		msg: 'mouse up', 
		event: event
	});

	if(event.button == rightMouseButton)
		menu.hide();
	
}

var Menu = function(){
	this.show = function(){

	};

	this.hide = function(){

	};

	// Todo create menu item,
}

// Scale canvas by using CSS
$(document).ready(function(){
	canvas.width = window.innerWidth - 2;
	canvas.height = window.innerHeight - 2;

})

console.clear();
console.log('Loaded');