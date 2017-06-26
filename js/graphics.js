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
	ctx.drawImage(images[character], iconPositions[character].x, iconPositions[character].y, iconWidth, iconHeight);
}

// Clears the text box and draws another one on it
function drawTextBubble(character) {
	ctx.clearRect(textBubblePosition.x, textBubblePosition.y, images[character+"Text"].width, images[character+"Text"].height);
	ctx.drawImage(images[character+"Text"], textBubblePosition.x, textBubblePosition.y);
}

// Draws text at the given position
function drawText(text, x, y) {
	ctx.fillText(text, x, y);
}
