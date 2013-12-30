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



//-------------------------------
// Create 3D
//-------------------------------

function Initialize3D(){
	var width = window.innerWidth;
	var height = window.innerHeight;

	// Create utilities
	var clock = new THREE.Clock;

	// Set up the Geometry

		// Textures
		var cubeTexture = THREE.ImageUtils.loadTexture("textures/box.png");

		// Cube
		var cubeGeometry = new THREE.CubeGeometry(100, 100, 100);
		var cubeMaterial = new THREE.MeshLambertMaterial({ color: 0x1ec876 }); //map: cubeTexture
		var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
		cube.rotation.y = Math.PI * 45 / 180;

		// Skybox
		var skyboxGeometry = new THREE.CubeGeometry(10000, 10000, 10000);
		// var cubeMaterial = new THREE.MeshLambertMaterial({ map: cubeTexture, color: 0x28c0ec });
		var skyboxMaterial = new THREE.MeshBasicMaterial({ color: 0x000000, side: THREE.BackSide });
		var skybox = new THREE.Mesh(skyboxGeometry, skyboxMaterial);

	// Create the camera
	var camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 10000);
	camera.position.y = 160;
	camera.position.z = 400;
	camera.lookAt(cube.position);

	// Create the scene
		// Point Light
		var pointLight = new THREE.PointLight(0xffffff);
		pointLight.position.set(0, 300, 200);

		// Camera
		var scene = new THREE.Scene;
		scene.add(cube); 
		scene.add(camera);
		scene.add(skybox);
		scene.add(pointLight);

	// Create the renderer
	var renderer = new THREE.WebGLRenderer({antialias: true});
	renderer.setSize(width, height);
	document.body.appendChild(renderer.domElement);
	 
	render();

}

function render() {
   renderer.render(scene, camera);
    
   // Do scene render
   cube.rotation.y -= clock.getDelta();

   requestAnimationFrame(render);
}

Initialize3D();