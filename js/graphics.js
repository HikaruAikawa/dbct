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
	
	// Adding all character icons
	addImage("detective");
	addImage("widow");
	addImage("butler");
	addImage("guest");
	addImage("nephew");

// Executed when all icons are loaded
function onAllImagesLoaded() {
	ctx.drawImage(images["detective"],0,0,iconWidth,iconHeight);
	ctx.drawImage(images["widow"],0,iconHeight,iconWidth,iconHeight);
}

