// Initialization

var imagesDiv = document.getElementById("imagesDiv");
var images = {};

ctx.imageSmoothingEnabled = false;

// Loading images

	// Will contain true if the image is loaded
	var isImageLoaded = {};
	
	// Returns true if all images are loaded
	function areAllImagesLoaded() {
		var ret = true;
		for (imageName in images) {
			if (!images[imageName].isLoaded) ret = false;
		}
		return ret;
	}
	
	// Adds an image by image name
	function addImage(imageName) {
		var newImage = new Image();
		newImage.onload = function() {
			images[imageName].isLoaded = true;
			if (areAllImagesLoaded()) onAllImagesLoaded();
		}
		newImage.src = "assets/"+imageName+".png";
		imagesDiv.appendChild(newImage);
		images[imageName] = newImage;
		images[imageName].isLoaded = false;
		images[imageName].alpha = 1.0;
	}
	
	// Adding all character icons and speech bubbles
	characters.forEach(function(character) {
		addImage(character);
		addImage(character+"Text");
	});
	
	addImage("map");
	

// Executed when all icons are loaded
function onAllImagesLoaded() {
	start();
}

function drawImage(imageName, x, y, w, h) {
	ctx.globalAlpha = images[imageName].alpha;
	ctx.drawImage(images[imageName], x, y, w, h);
}

function drawIcon(character) {
	drawImage(character, dialogueIcons[character].x, dialogueIcons[character].y, dialogueIcons[character].w, dialogueIcons[character].h);
}

function drawTextBubble(character) {
	drawImage(character+"Text", textBubbleRect.x, textBubbleRect.y, textBubbleRect.w, textBubbleRect.h);
}

function drawText(text, x, y) {
	ctx.fillText(text, x, y+(fontSize/2));
}

function drawMap() {
	drawImage("map", map.x, map.y, map.w, map.h);
}

// Draws the button for advancing dialogue
function drawDialogueButton() {
	setColour(dialogueButton.colour);
	ctx.fillRect(dialogueButton.x, dialogueButton.y, dialogueButton.w, dialogueButton.h);
	var text = "Next";
	// The last terms are just for fine-tuning, they can be freely changed
	var textX = dialogueButton.x + (dialogueButton.w/2) - ((text.length/2)*fontSize*fontRatio) - 8;
	var textY = dialogueButton.y + (dialogueButton.h/2) - (fontSize/2) + 4;
	setColour(textColour);
	drawText(text, textX, textY);
}

function setColour(colour) {
	ctx.fillStyle = "rgb("+colour+")";
	ctx.strokeStyle = "rgb("+colour+")";
}

function setAlpha(imageName, newAlpha) {
	images[imageName].alpha = newAlpha;
}
