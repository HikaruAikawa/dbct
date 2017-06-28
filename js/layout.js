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
	icon.w = iconHeight;
	icon.active = false;
});

var textBubblePosition = {x: 587, y: 0, w: 437, h: 380};
var dialoguePosition = {x: textBubblePosition.x+48, y: textBubblePosition.y+64, w: textBubblePosition.w-48, h: textBubblePosition.h-64};