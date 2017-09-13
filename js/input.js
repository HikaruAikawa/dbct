// Initialization

document.addEventListener("click", clickHandler);

// Processes all click inputs
function clickHandler (e) {
	var clickX = e.clientX - canvasRect.x;
	var clickY = e.clientY - canvasRect.y;
	var clickPoint = {x: clickX, y: clickY};
	//testX = clickX;
	//testY = clickY;
	if (gameState == "dialogueInput") {
		if (isPointInRect(clickPoint, dialogueButton)) {
			nextMoment();
		}
	}
}
