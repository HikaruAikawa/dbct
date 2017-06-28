// Global variables

var step = 1000/60;
//var step = 100;

var canvasWidth = 1024;
var canvasHeight = 768;
var iconWidth = 64;
var iconHeight = 64;
var fontSize = 16;

var characters = ["detective", "widow", "butler", "guest", "nephew"];

// Global references

var canvas = document.getElementById("mainCanvas");
var ctx = canvas.getContext("2d");

// Global initialization

canvas.width = canvasWidth;
canvas.height = canvasHeight;
ctx.font = "bold "+fontSize+"px courier";
