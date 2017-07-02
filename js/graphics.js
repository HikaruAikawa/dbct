// Initialization

var imagesDiv = document.getElementById("imagesDiv");
var images = {};

ctx.imageSmoothingEnabled = false;

function setColour(colour) {
	ctx.fillStyle = "rgb("+colour+")";
	ctx.strokeStyle = "rgb("+colour+")";
}

// Loading images

	// Will contain true if the image is loaded
	var isImageLoaded = {};
	
	// Returns true if all images are loaded
	function areAllImagesLoaded() {
		var ret = true;
		for (key in isImageLoaded) {
			if (!isImageLoaded[key]) ret = false;
		}
		return ret;
	}
	
	// Adds an image by image name
	function addImage(imageName) {
		var newImage = new Image();
		newImage.onload = function() {
			isImageLoaded[imageName] = true;
			if (areAllImagesLoaded()) onAllImagesLoaded();
		}
		newImage.src = "assets/"+imageName+".png";
		imagesDiv.appendChild(newImage);
		images[imageName] = newImage;
		isImageLoaded[imageName] = false;
	}
	
	// Adding all character icons and speech bubbles
	characters.forEach(function(character) {
		addImage(character);
		addImage(character+"Text");
	});
	

// Executed when all icons are loaded
function onAllImagesLoaded() {
	start();
}

// Draws the icon of the given character
function drawIcon(character) {
	ctx.drawImage(images[character], dialogueIcons[character].x, dialogueIcons[character].y, iconWidth, iconHeight);
}

// Draws the text box
function drawTextBubble(character) {
	ctx.drawImage(images[character+"Text"], textBubbleRect.x, textBubbleRect.y);
}

// Draws text at the given position
function drawText(text, x, y) {
	ctx.fillText(text, x, y+(fontSize/2));
}

// Draws the button for advancing dialogue
function drawDialogueButton() {
	setColour("255,255,255");
	ctx.fillRect(dialogueButtonRect.x, dialogueButtonRect.y, dialogueButtonRect.w, dialogueButtonRect.h);
	var text = "Next";
	// The last terms are just for fine-tuning, they can be freely changed
	var textX = dialogueButtonRect.x + (dialogueButtonRect.w/2) - ((text.length/2)*fontSize*fontRatio) - 8;
	var textY = dialogueButtonRect.y + (dialogueButtonRect.h/2) - (fontSize/2) + 4;
	setColour("0,0,0");
	drawText(text, textX, textY);
}
