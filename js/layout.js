// Initialization

var dialogueIcons = {
	"detective" : {x: 523, y: 10},
	"widow" : {x: 523, y: 84},
	"butler" : {x: 523, y: 158},
	"nephew" : {x: 523, y: 232},
	"guest" : {x: 523, y: 306},
};

characters.forEach(function(character) {
	var icon = dialogueIcons[character];
	icon.w = iconWidth;
	icon.h = iconHeight;
	icon.active = false;
});

// Careful: The text bubble graphic is larger than the actual bubble
var textBubbleRect = {x: 587, y: 0, w: 437, h: 380};
var dialogueOffset = 32;
var dialogueRect = {x: textBubbleRect.x+dialogueOffset, y: textBubbleRect.y+dialogueOffset, w: textBubbleRect.w-(2*dialogueOffset), h: textBubbleRect.h-(2*dialogueOffset)};

var dialogueButton = {x: textBubbleRect.x, y: textBubbleRect.y+textBubbleRect.h, w: textBubbleRect.w, h: 32};
