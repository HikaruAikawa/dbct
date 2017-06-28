// Initialization

function start() {
	setInterval(draw, step);
	
	/*characters.forEach(function(character) {
		drawIcon(character);
	});
	drawTextBubble("guest");*/
}
// Game loop

function draw() {
	
	ctx.clearRect(0, 0, canvasWidth, canvasHeight);
	
	characters.forEach(function(character) {
		drawIcon(character);
	});
	drawTextBubble("guest");
	
	if (dialogueText.length > 0) {
		// Draws text from the text buffer
		dialogueTimer = dialogueTimer + 1;
		if (dialogueTimer >= dialogueDelay) {
			dialogueTimer = 0;
			dialogueCursor.next();
		}
	}
	drawDialogueText();
	
}
