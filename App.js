var canvas = document.getElementById('canvas'),
	context = canvas.getContext('2d');


canvas.onclick = function(event){

	console.log(event);
}

console.log('Done!');

$(document).ready(function(){
	canvas.width = window.innerWidth - 20;
	canvas.height = window.innerHeight - 20;

})