// Initialization

var imagesDiv = document.getElementById("imagesDiv");
ctx.imageSmoothingEnabled = false;

// Loading images

	// Contains true if the icon is loaded
	var isIconLoaded = {
		"detective" : false,
		"widow" : false,
		"butler" : false,
		"guest" : false,
		"nephew" : false
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
	var detectiveIcon = new Image();
	detectiveIcon.onload = function() {
		isIconLoaded["detective"] = true;
		if (areAllIconsLoaded()) onAllIconsLoaded();
	};
	detectiveIcon.src = "assets/detective.png";
	imagesDiv.appendChild(detectiveIcon);

	// Widow icon
	var widowIcon = new Image();
	widowIcon.onload = function() {
		isIconLoaded["widow"] = true;
		if (areAllIconsLoaded()) onAllIconsLoaded();
	};
	widowIcon.src = "assets/widow.png";
	imagesDiv.appendChild(widowIcon);
	
	// Butler icon
	var butlerIcon = new Image();
	butlerIcon.onload = function() {
		isIconLoaded["butler"] = true;
		if (areAllIconsLoaded()) onAllIconsLoaded();
	};
	butlerIcon.src = "assets/butler.png";
	imagesDiv.appendChild(butlerIcon);
	
	// Guest icon
	var guestIcon = new Image();
	guestIcon.onload = function() {
		isIconLoaded["guest"] = true;
		if (areAllIconsLoaded()) onAllIconsLoaded();
	};
	guestIcon.src = "assets/guest.png";
	imagesDiv.appendChild(guestIcon);
	
	// Nephew icon
	var nephewIcon = new Image();
	nephewIcon.onload = function() {
		isIconLoaded["nephew"] = true;
		if (areAllIconsLoaded()) onAllIconsLoaded();
	};
	nephewIcon.src = "assets/nephew.png";
	imagesDiv.appendChild(nephewIcon);

// Executed when all icons are loaded
function onAllIconsLoaded() {
	ctx.drawImage(detectiveIcon,0,0,iconWidth,iconHeight);
	ctx.drawImage(widowIcon,0,iconHeight,iconWidth,iconHeight);
}

