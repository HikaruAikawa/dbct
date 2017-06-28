// Initialization

var dialogueText = "This is a test";
// The cursor contains the current line and character position to be displayed
var dialogueCursor = {i: 0, j: 0};

dialogueCursor.next = function() {
	this.i++;
}

// Delay should be in frames
var dialogueTimer = 0;
var dialogueDelay = 3;

// Retrieves the next character in the text buffer

/*function nextChar () {
	var ret = dialogueBuffer.substr(0,1);
	dialogueBuffer = dialogueBuffer.substr(1,dialogueBuffer.length-1);
	return ret;
}

function drawNextChar () {
	toDraw = nextChar();
	drawText(toDraw, dialogueCursor.x, dialogueCursor.y);
	dialogueCursor.i += i;
}*/

function drawDialogueText () {
	var text = dialogueText.substr(0, dialogueCursor.i);
	drawText(text, dialoguePosition.x, dialoguePosition.y);
}