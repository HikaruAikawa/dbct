// Initialization

var textBuffer = "This is a test";

// Delay should be in frames
var dialogueTimer = 0;
var dialogueDelay = 4;

// Retrieves the next character in the text buffer

function nextChar () {
	var ret = textBuffer.substr(0,1);
	textBuffer = textBuffer.substr(1,textBuffer.length-1);
	return ret;
}

function drawNextChar () {
	toDraw = nextChar();
	drawText(toDraw, dialogueCursor.x, dialogueCursor.y);
	dialogueCursor.x += fontSize/2;
}
