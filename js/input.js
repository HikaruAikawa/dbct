// Initialization

document.addEventListener("click", clickHandler);

// Processes all click inputs
function clickHandler (e) {
	var clickX = e.clientX - canvasRect.x;
	var clickY = e.clientY - canvasRect.y;
	// Functions to check if the click is inside a given rectangle
	function clickInRect(rectX, rectY, rectW, rectH) {
		return clickX > rectX && clickX < rectX + rectW && clickY > rectY && clickY < rectY + rectH;
	}
	function clickInRect(rect) {
		return clickX > rect.x && clickX < rect.x + rect.w && clickY > rect.y && clickY < rect.y + rect.h;
	}
	//testX = clickX;
	//testY = clickY;
	if (gameState == "dialogueInput") {
		// If the click is inside the dialogue button
		if (clickInRect(dialogueButton)) {
			nextMoment();
		}
	}
}
