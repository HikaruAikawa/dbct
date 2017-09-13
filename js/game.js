// Initialization

function start() {
	setInterval(draw, step);
	
	//setDialogueText("This is a long sentence to check if the text is correctly split across multiple lines.");
	dialogueCharacter = "guest";
	currentScene = 0;
	currentMoment = -1;  // Initialized as -1 so that nextMoment will set it to 0
	nextMoment();
	images["guest"].alpha = 0;
	
}

// Game loop

function draw() {
	
	ctx.clearRect(0, 0, canvasWidth, canvasHeight);
	
	drawMap();
	
	characters.forEach(function(character) {
		drawIcon(character);
		drawMapIcon(character);
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
	
	if (gameState == "dialogue" || gameState == "dialogueInput") {
		drawDialogueText();
	}
	
	if (gameState == "dialogueInput") {
		drawDialogueButton();
	}
	
	if (gameState == "animation") {
		var animationType = animation[0];
		var animationImage = animation[1];
		var animationTime = animation[2];
		var animationParams = animation[3];
		// If the animation is over, goes to the next moment
		if (animationTimer > animationTime) {
			animationTimer = 0;
			nextMoment();
		}
		// Otherwise, advances the animation
		else {
			var t = animationTimer/animationTime;
			if (animationType == "fadeIn") {
				images[animationImage].alpha = lerp(0, 1, t);
			}
			else if (animationType == "fadeOut") {
				images[animationImage].alpha = lerp(1, 0, t);
			}
			else if (animationType == "moveMapIcon") {
				var startPos = animationParams.startPos;
				var endPos = animationParams.endPos;
				map.icons[animationImage].x = lerp(startPos.x, endPos.x, t);
				map.icons[animationImage].y = lerp(startPos.y, endPos.y, t);
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
		else if (moment[0] == "animation") {
			animation[0] = moment[1];
			animation[1] = moment[2];
			animation[2] = moment[3];
			animation[3] = moment[4];
			gameState = "animation";
		}
		else if (moment[0] == "goto") {
			currentMoment = moment[1]-1;
			nextMoment();
		}
		else if (moment[0] == "mapInput") {
			mapChoices = moment[1];
			gameState = "mapInput";
		}
	}
}
