scenes[0] = [
	["talk", "detective", "This is a scene test."],
	["goto", 3],
	["talk", "butler", "This message is supposed to be skipped and should not be seen."],
	["animation", "moveMapIcon", "nephew", 60, {endPos: {x: 256, y: 128}}],
	["talk", "nephew", "And this is a moving test."],
	["talk", "widow", "Select a room."],
	["mapInput", {"room1": 7, "room2": 11}],
	["animation", "moveMapIcon", "widow", 30, {endPos: {x: 64, y: 256}}],
	["talk", "widow", "I move to the left."],
	["setEvent", "0-0-left"],
	["checkEvents", ["0-0-left", "0-0-right"], 15, 5],
	["animation", "moveMapIcon", "widow", 30, {endPos: {x: 448, y: 256}}],
	["talk", "widow", "I move to the right."],
	["setEvent", "0-0-right"],
	["goto", 10],
	["talk", "widow", "I have already moved to both sides."]
];
