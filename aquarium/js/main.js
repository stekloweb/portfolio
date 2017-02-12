var CANVAS;
var CONTEXT;
var CANVAS_WIDTH;
var CANVAS_HEIGHT;
var FPS = 60;
var X = 0;
var Y = 0;
var SELECTED;

CRITTER = [];

function Critter() {
	var obj = {};
	obj.x = Math.random() * CANVAS_WIDTH;
	obj.y = Math.random() * CANVAS_HEIGHT;
	obj.vx = Math.random() * 2 - 1;
	obj.vy = Math.random() * 2 - 1;
	obj.sizeX = 50;
	obj.sizeY = 85;
	obj.image = new Image();
    obj.image.src = "images/squid.png";
	
		
	obj.update = function() {
		obj.x += obj.vx;
		obj.y += obj.vy;
		bounds();
	};
	obj.draw = function () {
		CONTEXT.drawImage(obj.image, obj.x, obj.y);
	};
	obj.bounds = function() {
		if ((obj.x > CANVAS_WIDTH +25)|| obj.x < 0 + 25) {
			obj.x = Math.random() * CANVAS_WIDTH;
		};
		if ((obj.y > CANVAS_HEIGHT +25) || obj.y < 0 + 25) {
			obj.y = Math.random() * CANVAS_HEIGHT;
		};
	};
	return obj;
}

function BackgroundConstructor ()  {
	var obj ={};
	obj.draw = function() {
		var gradient = CONTEXT.createLinearGradient(0,0,0, CANVAS_HEIGHT);
		gradient.addColorStop(0.0, "#17D6F5");
		gradient.addColorStop(0.8, "#111C57");
		gradient.addColorStop(0.81, "#F0D193");
		gradient.addColorStop(1.0, "#AB9569");
		CONTEXT.fillStyle = gradient;
		CONTEXT.fillRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
    };
	return obj;
}

function bounds() {
	for (var i = 0; i < CRITTER.length-1; i++) {
		CRITTER[i].bounds();
	}
}

function loop() {
	update();
	draw();
}

function draw() {
	BACKGROUND.draw();
	for (var i = 0; i < CRITTER.length-1; i++) {
		CRITTER[i].draw();
	}
}

function update() {
	for (var i = 0; i < CRITTER.length-1; i++) {
		CRITTER[i].update();
		X++;
		Y++;
	}
}

function doCritterClick(e) {
    console.log("clicked the canvas");
    var x = e.pageX - OFFSET_X; 
    var y = e.pageY - OFFSET_Y;
    console.log (x + " " + y);
	for (var i = 0; i < 12; i++) {
		var myCritter = CRITTER[i];
		if(y > myCritter.y && y < myCritter.y + myCritter.sizeY && x > myCritter.x && x < myCritter.x + myCritter.sizeX){
			console.log("clicked a critter");
		    myCritter.vx  = 2 * Math.random() -1;
		    myCritter.vy  = 2 * Math.random() -1;
		    SELECTED = myCritter;
		}
	}
}

function doKeyPress(e) {
	if (e.keyCode == 87) {
		// [w] key -- up
		SELECTED.vy  = -2;
	}
	else if (e.keyCode == 83) {	
		// [s] key -- down
		SELECTED.vy  = 2;
	}
	else if (e.keyCode == 68) {	
		// [d] key -- right
		SELECTED.vx  = 2;
	}
	else if (e.keyCode == 65) {	
		// [a] key -- left
		SELECTED.vx  = -2;
	}
}

function init() {
	CANVAS = document.getElementById("myCanvas");
	CONTEXT = CANVAS.getContext("2d");
	CANVAS_WIDTH = CANVAS.width;
	CANVAS_HEIGHT = CANVAS.height;
	setInterval(loop, 1000/FPS);
	BACKGROUND = new BackgroundConstructor();
	OFFSET_X = CANVAS.offsetLeft;
    OFFSET_Y = CANVAS.offsetTop;
    CANVAS.setAttribute('tabindex','1');
    CANVAS.focus();
	for (var i = 0; i < 12; i++) {
		CRITTER[i] = new Critter();
	}
	U.addEvent(CANVAS, "click", doCritterClick);
	U.addEvent(CANVAS, "keydown", doKeyPress);
}

window.onload = init;