// Initialization

function start() {
	setInterval(draw, step);
	
	//setDialogueText("This is a long sentence to check if the text is correctly split across multiple lines.");
	dialogueCharacter = "guest";
	currentScene = 0;
	currentMoment = -1;  // Initialized as -1 so that nextMoment will set it to 0
	nextMoment();
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
	if (gameState == "dialogueInput") {
		drawDialogueButton();
	}
	
	//ctx.fillRect(testX, testY, 50, 50);
	//ctx.strokeRect(dialogueRect.x, dialogueRect.y, dialogueRect.w, dialogueRect.h);
	
}

function nextMoment() {
	if (currentMoment < scenes[currentScene].length - 1) {
		currentMoment++;
		var moment = scenes[currentScene][currentMoment];
		if (moment[0] == "talk") {
			dialogueCharacter = moment[1];
			setDialogueText(moment[2]);
		}
	}
}
