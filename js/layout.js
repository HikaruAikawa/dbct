// Initialization

var iconPositions = {
	"detective" : {x: 523, y: 10},
	"widow" : {x: 523, y: 84},
	"butler" : {x: 523, y: 158},
	"nephew" : {x: 523, y: 232},
	"guest" : {x: 523, y: 306},
}

var textBubblePosition = {x: 587, y: 0}

// Draws the icon of the given character
function drawIcon(characterName) {
	ctx.drawImage(images[characterName], iconPositions[characterName].x, iconPositions[characterName].y, iconWidth, iconHeight);
}

// Clears the text box and draws another one on it
function drawTextBubble(characterName) {
	ctx.clearRect(textBubblePosition.x, textBubblePosition.y, images[characterName+"Text"].width, images[characterName+"Text"].height);
	ctx.drawImage(images[characterName+"Text"], textBubblePosition.x, textBubblePosition.y);
}

// Drawing images
function startLayout() {
	for (key in iconPositions) {
		drawIcon(key);
	}
	drawTextBubble("widow");
}
