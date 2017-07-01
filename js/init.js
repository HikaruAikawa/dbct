// Global variables

var step = 1000/60;
//var step = 1000;

var gameState = 0;

var canvasRect = {w: 1024, h: 768};
var canvasWidth = 1024;
var canvasHeight = 768;
var iconWidth = 64;
var iconHeight = 64;
var font = "courier";
var fontSize = 16;

var testX = 0;
var testY = 0;

var characters = ["detective", "widow", "butler", "guest", "nephew"];

// Global references

var canvas = document.getElementById("mainCanvas");
var ctx = canvas.getContext("2d");

// Global initialization

function setGameState(state) {
	if (state == "loading") gameState = 1;
	else if (state == "dialogue") gameState = 2;
	else if (state == "dialogueInput") gameState = 3;
	else gameState = 0;
}

setGameState("loading");

canvas.width = canvasRect.w;
canvas.height = canvasRect.h;
ctx.font = "bold "+fontSize+"px "+font;

canvasRect.x = canvas.offsetLeft;
canvasRect.y = canvas.offsetTop;
