// Constants
// Constant for the size of the greenhouse, will increase with "investment".
const GREENHOUSE_SIZE_MULTIPLIER = 1;
// Framerate.
const FPS = 30;
// Plant size in pixels.
const PLANT_SIZE = 20;
// Light radius from lamps in pixels.
const LAMP_RADIUS = 80;

// Variables
/** @type {HTMLCanvasElement} */
var canv = document.getElementById("gameCanvas");
var ctx = canv.getContext("2d");
// The amount of money you currently have.
var currentMoney = 0;
// How high is the current greenhouse in stories.
var numberOfGreenhouseStories = 1;

// Number of plants in the greenhouse.
var numPlants = 300;

// Number of irrigators in the greenhouse.

// Number of vents in the greenhouse.

// Are the vents open or closed?

// Number of solar panels in greenhouse.

// Time of day (hour)
var time = 0;
var isNight = true;

// Set up the game loop.
setInterval(update, 1000 / FPS);
	

	function update() {
		// Update time variable.
		time += 1;
		// Draw the background color, changes with day vs night.
		if (time <= 120) {
		ctx.fillStyle = "#ebecf2";
		}
		else if (time > 120 && time <= 240) {
			ctx.fillStyle = "black";
		}
		else {
			time = 0;
		}
		ctx.fillRect(0, 0, canv.width, canv.height);
		
		// Draw greenhouse shape.
		ctx.rect(0, 0, canv.width, canv.height);
		ctx.stroke();

		// Draw plants.
		var plantCol = 0;
		var plantRow = 0;
		for (var i=0; i<numPlants; i++) {
			
			if ((0 + PLANT_SIZE + PLANT_SIZE * plantCol * 2) < canv.width && plantRow < canv.height - PLANT_SIZE) {
				ctx.fillStyle = "green";
				ctx.beginPath();
				ctx.arc(0 + PLANT_SIZE + PLANT_SIZE * plantCol * 2, plantRow + PLANT_SIZE, PLANT_SIZE, 0, 2*Math.PI);
				ctx.stroke();
				ctx.fill();
				plantCol++;
			}
			else {
				plantCol = 0;
				plantRow+=PLANT_SIZE*4;
			}
		}
		// Draw irrigators.

		// Draw vents.

		// Draw solar panels.

		// Draw light and lighted up areas.
		
		// Draw shadows.



}