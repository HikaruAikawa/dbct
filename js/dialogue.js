// Initialization

var textBuffer = "This is a test";

// Retrieves the next character in the text buffer

function nextChar () {
	var ret = textBuffer.substr(0,1);
	textBuffer = textBuffer.substr(1,textBuffer.length-1);
	return ret;
}