// Global variables

var step = 1000/60;
//var step = 1000;

var gameState;
var scenes = [];
var currentScene;
var currentMoment;

var canvasRect = {w: 1024, h: 768};
var iconWidth = 64;
var iconHeight = 64;
var mapIconWidth = 32;
var mapIconHeight = 32;
var font = "courier";
var fontSize = 16;
var fontRatio = 0.6; // This is the height-to-width ratio of the font

var animation = [];
var animationTimer = 0;

var mapChoices = {};

var sceneEvents = [];

var testX = 0;
var testY = 0;

var characters = ["detective", "widow", "butler", "guest", "nephew"];

// Global references

var canvas = document.getElementById("mainCanvas");
var ctx = canvas.getContext("2d");

// Global initialization

gameState = "loading";

// Updates the canvasRect with the global (page) coordinates of the canvas
function updateCanvasRect() {
	var rect = canvas.getBoundingClientRect();
	canvasRect.x = rect.left;
	canvasRect.y = rect.top;
}

canvas.width = canvasRect.w;
canvas.height = canvasRect.h;
ctx.font = "bold "+fontSize+"px "+font;

//canvasRect.x = canvas.offsetLeft;
//canvasRect.y = canvas.offsetTop;

// Utility functions

function lerp(start, end, pos) {
	return pos*end + (1-pos)*start;
}

function isPointInRect(p, rect) {
	return (p.x>rect.x && p.x<rect.x+rect.w && p.y>rect.y && p.y<rect.y+rect.h);
}
