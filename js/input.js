// Initialization

document.addEventListener("click", clickHandler);

function clickHandler (e) {
	var clickX = e.clientX - canvasRect.x;
	var clickY = e.clientY - canvasRect.y;
	//testX = clickX;
	//testY = clickY;
	if (gameState == "dialogueInput") {
		// If the click is inside the dialogue button
		if (clickX > dialogueButtonRect.x && clickX < dialogueButtonRect.x + dialogueButtonRect.w && clickY > dialogueButtonRect.y && clickY < dialogueButtonRect.y + dialogueButtonRect.h) {
			setDialogueText("And this is a test to see if the \"Next\" button works.");
			dialogueCharacter = "detective";
		}
	}
}
