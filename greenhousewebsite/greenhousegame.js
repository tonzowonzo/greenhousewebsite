// Constants
// Constant for the size of the greenhouse, will increase with "investment".
const GREENHOUSE_SIZE_MULTIPLIER = 1;
// Framerate.
const FPS = 60;
// Maximum plant size in pixels (radius).
const PLANT_SIZE_MAX = 20;
// Minimum plant size in pixels (radius).
const PLANT_SIZE_MIN = 5;
// Light radius from lamps in pixels.
const LAMP_RADIUS = 40;

// Variables
// Get the game canvas
/** @type {HTMLCanvasElement} */
var canv = document.getElementById("gameCanvas");
var ctx = canv.getContext("2d");

// Get the statistics canvas
var statsCanv = document.getElementById("statsCanvas");
var statsCtx = statsCanv.getContext("2d");

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

// Are the lights turned on or off?
var lightsOn = true;

// Current size of plants, increases as they grow.
var plantCurrentSize = 5;

// The amount of money the player currently has.
var money = 200;

// Disease rate of plants can change with certain management techniques.
var diseaseRate = 0.05;

// Outside temperature in degrees celcius.
var outsideTemperature = 23;
const MAX_TEMPERATURE_OUTSIDE = 40;
const MIN_TEMPERATURE_OUTSIDE = 0;

// Inside temperature and plant survival temperatures.
var insideTemperature = 29;
const INSIDE_MAX_TEMP = 55;
const INSIDE_MIN_TEMP = 0;
const PLANTS_MAX_TEMP = 40;
const PLANTS_MIN_TEMP = 12;

// Set up the game loop.
setInterval(update, 1000 / FPS);
	

	function update() {
		// Update time variable.
		time += 1;

		// Draw inside and outside thermometers.
		// Inside.
		// Single movement size on thermometer.
		var degreeMovementInside = (statsCanv.height/2)/(INSIDE_MAX_TEMP-INSIDE_MIN_TEMP);
		// Draw temperature filling thermometer.
		statsCtx.fillStyle = "white";
		statsCtx.fill();
		statsCtx.fillStyle = "red";
		statsCtx.fillRect(0, statsCanv.height/2, statsCanv.width/3, -degreeMovementInside*insideTemperature);
		statsCtx.rect(0, 0, statsCanv.width/3, statsCanv.height/2);
		statsCtx.stroke();

		// Outside.
		// Single movement size on thermometer.
		var degreeMovementOutside = (statsCanv.height/2)/(MAX_TEMPERATURE_OUTSIDE-MIN_TEMPERATURE_OUTSIDE);
		// Draw the temperature filling the thermometer.
		
		statsCtx.fillStyle = "red";
		statsCtx.fillRect(statsCanv.width - statsCanv.width/3, statsCanv.height/2, statsCanv.width/3, -degreeMovementOutside*outsideTemperature);
		statsCtx.rect(statsCanv.width - statsCanv.width/3, 0, statsCanv.width/3, statsCanv.height/2);
		statsCtx.stroke();

		// Draw the background color, changes with day vs night.
		if (time <= 120) {
			ctx.fillStyle = "#bbd2e4";
			isNight = false;
			outsideTemperature += 0.1;
			insideTemperature = outsideTemperature + 5;
		}
		else if (time > 120 && time <= 240) {
			ctx.fillStyle = "#0c2b42";
			isNight = true;
			outsideTemperature -= 0.1;
			insideTemperature = outsideTemperature + 5;
		}
		else {
			time = 0;
			plantCurrentSize++;
		}
		ctx.fillRect(0, 0, canv.width, canv.height);
		
		// Draw greenhouse shape.
		ctx.rect(0, 0, canv.width, canv.height);
		ctx.stroke();

		// Draw plants.
		var plantCol = 0;
		var plantRow = 0;
		var plantRowCount = 0;
		
		for (var i=0; i<numPlants; i++) {
			if (plantCurrentSize > PLANT_SIZE_MAX) {
				plantCurrentSize = PLANT_SIZE_MIN;
			}
			if ((0 + PLANT_SIZE_MAX + PLANT_SIZE_MAX * plantCol * 2) < canv.width && plantRow < canv.height - PLANT_SIZE_MAX) {
				// Draw soil underneath plants.
				ctx.fillStyle = "brown";
				ctx.beginPath();
				ctx.arc(0 + PLANT_SIZE_MAX + PLANT_SIZE_MAX * plantCol * 2, plantRow + PLANT_SIZE_MAX, PLANT_SIZE_MAX - 10, 0, 2*Math.PI);
				ctx.stroke();
				ctx.fill();
				// Draw plants.
				ctx.fillStyle = "green";
				ctx.beginPath();
				ctx.arc(0 + PLANT_SIZE_MAX + PLANT_SIZE_MAX * plantCol * 2, plantRow + PLANT_SIZE_MAX, plantCurrentSize, 0, 2*Math.PI);
				ctx.stroke();
				ctx.fill();
				plantCol++;
			}
			
			else {
				plantCol = 0;
				plantRow+=PLANT_SIZE_MAX*4;
				plantRowCount++;
			}
		}
		// Draw irrigators.

		// Draw vents.

		// Draw solar panels.

		// Draw light and lighted up areas.
		if (isNight && lightsOn) {
			
			for (var i=0; i<plantRowCount; i++) {
				if (i % 2 === 0 && i*PLANT_SIZE_MAX*2 < canv.height - PLANT_SIZE_MAX*2) {
					ctx.fillStyle = "rgba(255,255,164,0.2)";
					ctx.rect(0, i * PLANT_SIZE_MAX*2, canv.width, PLANT_SIZE_MAX*2);
					ctx.fill();
				}
			}
		}
		// Draw shadows.



}