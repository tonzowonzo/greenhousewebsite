// Constants
// Constant for the size of the greenhouse, will increase with "investment".
const GREENHOUSE_SIZE_MULTIPLIER = 1;
// Framerate.
const FPS = 30;

// Variables
/** @type {HTMLCanvasElement} */
var canv = document.getElementById("gameCanvas");
var ctx = canv.getContext("2d");
// The amount of money you currently have.
var currentMoney = 0;
// How high is the current greenhouse in stories.
var numberOfGreenhouseStories = 1;
// Greenhouse dimensions (x and y).
var greenhouseDimensions = {
	width: 200 * GREENHOUSE_SIZE_MULTIPLIER,
	height: 150 * GREENHOUSE_SIZE_MULTIPLIER
}
// Centre of the canvas.
centreCoords = {
	x: canv.width/2 - greenhouseDimensions.width/2,
	y: canv.width/2 - greenhouseDimensions.height
}
// Set up the game loop.
setInterval(update, 1000 / FPS);

function update() {
	// draw space
	ctx.fillStyle = "#589ea5";
	ctx.fillRect(0, 0, canv.width, canv.height);

	// Draw greenhouse shape.
	ctx.rect(centreCoords.x, centreCoords.y, greenhouseDimensions.width, greenhouseDimensions.height);
	ctx.stroke();
	// Draw plants.

	// Draw irrigators.

	// Draw vents.

	// Draw solar panels.

	// Draw shadows.


}