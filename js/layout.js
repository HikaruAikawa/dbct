// Initialization

var iconPositions = {
	"detective" : {x: 523, y: 10},
	"widow" : {x: 523, y: 84},
	"butler" : {x: 523, y: 158},
	"nephew" : {x: 523, y: 232},
	"guest" : {x: 523, y: 306},
}

// Draws the icon of the given character
function drawIcon(characterName) {
	ctx.drawImage(images[characterName], iconPositions[characterName].x, iconPositions[characterName].y, iconWidth, iconHeight);
}

// Drawing images
function startLayout() {
	for (key in iconPositions) {
		drawIcon(key);
	}
}
