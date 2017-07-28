scenes[0] = [
	["talk", "detective", "This is a scene test."],
	["talk", "nephew", "If you're seeing this, it means that the scene system works."],
	["goto", 4],
	["talk", "butler", "This message is supposed to be skipped and should not be seen."],
	["talk", "widow", "And this is a filler message, longer than the others, just to check that the text is still correctly split across lines."],
	["animation", "fadeIn", "guest", 60],
	["talk", "guest", "Surprise! This is a fading animation test."],
	["animation", "moveMapIcon", "nephew", 60, {startPos: {x: 256, y: 64}, endPos: {x: 256, y: 128}}],
	["talk", "nephew", "Look at me! I moved!"]
];
