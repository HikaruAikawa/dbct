// Initialization

function start() {
	setInterval(draw, step);
	
	//setDialogueText("This is a long sentence to check if the text is correctly split across multiple lines.");
	dialogueCharacter = "guest";
	currentScene = 0;
	currentMoment = -1;  // Initialized as -1 so that nextMoment will set it to 0
	nextMoment();
	images["guest"].alpha = 0;
	//ctx.fillStyle = "rgb(255,255,255)";
	
	//setAlpha("detective", 0.5);
	
}

// Game loop

function draw() {
	
	ctx.clearRect(0, 0, canvasWidth, canvasHeight);
	
	characters.forEach(function(character) {
		drawIcon(character);
	});
	drawTextBubble(dialogueCharacter);
	
	// Draws text from the text buffer
	if (gameState == "dialogue") {
		dialogueTimer = dialogueTimer + 1;
		if (dialogueTimer >= dialogueDelay) {
			dialogueTimer = 0;
			if (!dialogueCursor.endReached) {
				dialogueCursor.next();
			}
		}
	}
	
	drawDialogueText();
	
	if (gameState == "dialogueInput") {
		drawDialogueButton();
	}
	if (gameState == "animation") {
		var animationType = animation[0];
		var animationImage = animation[1];
		var animationTime = animation[2];
		// If the animation is over, goes to the next moment
		if (animationTimer > animationTime) {
			animationTimer = 0;
			nextMoment();
		}
		// Otherwise, advances the animation
		else {
			if (animationType == "fadeIn") {
				images[animationImage].alpha = (animationTimer/animationTime);
			}
			else if (animationType == "fadeOut") {
				images[animationImage].alpha = 1-(animationTimer/animationTime);
			}
			animationTimer++;
		}
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
			gameState = "dialogue";
		}
		else if (moment[0] = "animation") {
			animation[0] = moment[1];
			animation[1] = moment[2];
			animation[2] = moment[3];
			gameState = "animation";
		}
	}
}
