// Initialization

function start() {
	setInterval(draw, step);
	
	setDialogueText("This is a very long test to check if different lines really do work");
	dialogueCharacter = "guest";
	//ctx.fillStyle = "rgb(255,255,255)";
}
// Game loop

function draw() {
	
	ctx.clearRect(0, 0, canvasWidth, canvasHeight);
	
	characters.forEach(function(character) {
		drawIcon(character);
	});
	drawTextBubble(dialogueCharacter);
	
	// Draws text from the text buffer
	dialogueTimer = dialogueTimer + 1;
	if (dialogueTimer >= dialogueDelay) {
		dialogueTimer = 0;
		if (!dialogueCursor.endReached) {
			dialogueCursor.next();
		}
	}
	
	drawDialogueText();
	
	//ctx.fillRect(testX, testY, 50, 50);
	//ctx.strokeRect(dialogueRect.x, dialogueRect.y, dialogueRect.w, dialogueRect.h);
	
}
