var imagesDiv = document.getElementById("imagesDiv");

// Load images

// Contains true if the icon is loaded
var isIconLoaded = {
	"detective" : false,
	"widow" : false
}
// Returns true if all icons are loaded
function areAllIconsLoaded() {
	var ret = true;
	for (key in isIconLoaded) {
		if (!isIconLoaded[key]) ret = false;
	}
	return ret;
}

// Detective icon
var detectiveIcon = new Image(64,64);
detectiveIcon.onload = function() {
	isIconLoaded["detective"] = true;
	if (areAllIconsLoaded()) onAllIconsLoaded();
};
detectiveIcon.src = "assets/detective.png";
imagesDiv.appendChild(detectiveIcon);

// Widow icon
var widowIcon = new Image(64,64);
widowIcon.onload = function() {
	isIconLoaded["widow"] = true;
	if (areAllIconsLoaded()) onAllIconsLoaded();
};
widowIcon.src = "assets/widow.png";
imagesDiv.appendChild(widowIcon);

// Executed when all icons are loaded
function onAllIconsLoaded() {
	ctx.drawImage(detectiveIcon,0,0);
	ctx.drawImage(widowIcon,0,64);
}

