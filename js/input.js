// Initialization

document.addEventListener("click", clickHandler);

function clickHandler (e) {
	var clickX = e.clientX - canvasRect.x;
	var clickY = e.clientY - canvasRect.y;
	//testX = clickX;
	//testY = clickY;
	if (gameState == "dialogueInput") {
		// If the click is inside the dialogue button
		if (clickX > dialogueButton.x && clickX < dialogueButton.x + dialogueButton.w && clickY > dialogueButton.y && clickY < dialogueButton.y + dialogueButton.h) {
			nextMoment();
		}
	}
}
