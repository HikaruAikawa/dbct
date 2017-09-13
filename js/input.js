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
	else if (gameState == "mapInput") {
		// Checks if the click is in each of the rooms
		Object.keys(mapChoices).forEach(function(room) {
			// Only checks for the rooms that are in the mapChoices
			if (mapChoices[room]) {
				if (isPointInRect(clickPoint, map.sections[room])) {
					currentMoment = mapChoices[room]-1;
					nextMoment();
				}
			}
		});
		if (isPointInRect(clickPoint, map.sections["room1"])) {
			console.log("room1");
		}
		if (isPointInRect(clickPoint, map.sections["room2"])) {
			console.log("room2");
		}
	}
}
