// Initialization

var iconPositions = {
	"detective" : {x: 523, y: 10},
	"widow" : {x: 523, y: 84},
	"butler" : {x: 523, y: 158},
	"nephew" : {x: 523, y: 232},
	"guest" : {x: 523, y: 306},
};

var textBubblePosition = {x: 587, y: 0, w: 437, h: 380};
var textPosition = {x: textBubblePosition.x+48, y: textBubblePosition.y+64, w: textBubblePosition.w-48, h: textBubblePosition.h-64};

var dialogueCursor = {x: textPosition.x, y: textPosition.y};