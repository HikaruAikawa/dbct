// Initialization

//var dialogueText = "This is a test";
var dialogueLines = [];
// Delay should be in frames
var dialogueTimer = 0;
var dialogueDelay = 3;
// The character that is currently speaking
var dialogueCharacter;

// The cursor contains the current line and character position to be displayed
var dialogueCursor = {i: 0, j: 0};
dialogueCursor.iMax = Math.floor(dialogueRect.h / (fontSize*1));
dialogueCursor.jMax = Math.floor(dialogueRect.w / (fontSize*0.6)); // Literally just guessed on these ones
dialogueCursor.endReached = false;

dialogueCursor.next = function() {
	// Increases the counter only if it's not the last line OR it's not the last character of the last line
	if (this.i == dialogueLines.length - 1 && this.j == dialogueLines[this.i].length - 1) {
		this.j++;
		this.endReached = true;
		gameState = "dialogueInput";
	}
	else {
		this.j++;
		if (this.j >= dialogueLines[this.i].length) {
			this.i++;
			this.j = 0;
		}
	}
}

function setDialogueText(newText) {
	var i = 0;
	var j; // j is used to locate the last blank space in the line
	dialogueCursor.endReached = false;
	dialogueCursor.i = 0;
	dialogueCursor.j = 0;
	var endReached = false;
	
	gameState = "dialogue";
	dialogueLines = [];
	
	while (!endReached) {
		// Inserts the line into dialogueLines and removes it from newText
		if (newText.length > dialogueCursor.jMax && i < dialogueCursor.iMax) {
			dialogueLines[i] = newText.substring(0, dialogueCursor.jMax);
			j = dialogueLines[i].lastIndexOf(" ");
			// If there is a space, splits the line at the last one
			if (j != -1) {
				newText = newText.substring(j+1, newText.length);
				dialogueLines[i] = dialogueLines[i].substring(0,j);
			}
			// Otherwise, saves the entire line
			else {
				newText = newText.substring(dialogueCursor.jMax, newText.length);
			}
			i++;
		}
		else {
			dialogueLines[i] = newText.substring(0,dialogueCursor.jMax);
			newText = "";
			endReached = true;
		}
	}
}

function drawDialogueText () {
	var i;
	var lineText;
	setColour("0,0,0");
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
}
