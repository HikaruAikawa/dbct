// Initialization

//var dialogueText = "This is a test";
var dialogueLines = [];
// Delay should be in frames
var dialogueTimer = 0;
var dialogueDelay = 1;

// The cursor contains the current line and character position to be displayed
var dialogueCursor = {i: 0, j: 0};
dialogueCursor.iMax = Math.floor(dialogueRect.h / (fontSize*1.20));
dialogueCursor.jMax = Math.floor(dialogueRect.w / (fontSize*0.68)); // Literally just guessed on these ones
dialogueCursor.endReached = false;

dialogueCursor.next = function() {
	// Increases the counter only if it's not the last line OR it's not the last character of the last line
	if (this.i == dialogueLines.length - 1 && this.j == dialogueLines[this.i].length) {
		this.endReached = true;
	}
	else {
		this.j++;
		if (this.j >= this.jMax) {
			this.i++;
			this.j = 0;
		}
	}
}

function setDialogueText(newText) {
	var i = 0;
	dialogueCursor.endReached = false;
	dialogueCursor.i = 0;
	dialogueCursor.j = 0;
	var endReached = false;
	
	while (!endReached) {
		if (newText.length > dialogueCursor.jMax && i < dialogueCursor.iMax) {
			// Inserts the line into dialogueLines and removes it from newText
			dialogueLines[i] = newText.substring(0, dialogueCursor.jMax);
			newText = newText.substring(dialogueCursor.jMax, newText.length);
			i++;
		}
		else {
			dialogueLines[i] = newText.substring(0,dialogueCursor.jMax);
			endReached = true;
		}
	}
}

function drawDialogueText () {
	var i;
	var lineText;
	// Draws each row at its corresponding height
	for (i = 0; i <= dialogueCursor.i; i++) {
		// If it's the last row, draws only up to the cursor
		if (i == dialogueCursor.i) {
			lineText = dialogueLines[i].substring(0, dialogueCursor.j);
		}
		// Otherwise, draws the entire line
		else {
			lineText = dialogueLines[i];
		}
		drawText(lineText, dialogueRect.x, dialogueRect.y + (i*fontSize));
	}
	//var text = dialogueText.substring(0, dialogueCursor.i);
	//drawText(text, dialogueRect.x, dialogueRect.y);
}
