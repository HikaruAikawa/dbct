// Initialization

function start() {
	setInterval(draw, step);
	
	setDialogueText("This is a very long test to check if different lines really do work");
}
// Game loop

function draw() {
	
	ctx.clearRect(0, 0, canvasWidth, canvasHeight);
	
	characters.forEach(function(character) {
		drawIcon(character);
	});
	drawTextBubble("guest");
	
	// Draws text from the text buffer
	dialogueTimer = dialogueTimer + 1;
	if (dialogueTimer >= dialogueDelay) {
		dialogueTimer = 0;
		if (!dialogueCursor.endReached) {
			dialogueCursor.next();
		}
	}
	
	drawDialogueText();
	
}
