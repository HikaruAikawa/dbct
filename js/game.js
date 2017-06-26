// Initialization

function start() {
	characters.forEach(function(character) {
		drawIcon(character);
	});
	drawTextBubble("guest");
}
// Game loop

function draw() {
	
}

setInterval(draw, 10);