"use strict";


/**
 * Created by luizcavalieri on 26/06/2016.
 */
var canvas = null;
var context = null;
var bufferCanvas = null;
var bufferCanvasCtx = null;
var lineArray = [];
var lineTimer = null;
var maxLine = 100; // Here you may set max flackes to be created
var colorLine = "#6FC3DF";

var lineDefaults = {
    //adjust movePos.x and linePos.x if you want to change the starting point of the line animating to the left
    movePos: {
        x: 1270,
        y: 80
    },
    linePos: {
        x: 1270,
        y: 80
    }
}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

function init() {
    canvas = document.getElementById('canvasBanner');
    context = canvas.getContext("2d");
    console.log("It is being called from initCanvasFile");

    bufferCanvas = document.createElement("canvas");
    bufferCanvasCtx = bufferCanvas.getContext("2d");
    bufferCanvasCtx.canvas.width = context.canvas.width;
    bufferCanvasCtx.canvas.height = context.canvas.height;

    // initialize the lines
    //lineTimer = setInterval(addLine, 200);

    //Draw();

    if (canvas && canvas.getContext) {
        console.log("It is being called from if statement");
        var ctx = canvas.getContext('2d');

        var vertY = getRandomArbitrary(10, 1270);
        var vertX = getRandomArbitrary(10, 1270);
        var vertXInit = getRandomArbitrary(10, 1270);
        var vertY = getRandomArbitrary(10, 1270);

        for(var i =0; i < 10; i++)
        {
            setInterval(function(){AnimateLine(vertY)}, 6000);
        }

    }


    function AnimateLine(vertY) {


        console.log('All good working INIT!')
        ctx.lineWidth = 2;
        ctx.strokeStyle = colorLine;
        ctx.lineCap = "butt";
        ctx.beginPath();
        ctx.moveTo(lineDefaults.movePos.x, vertY);
        ctx.lineTo(lineDefaults.linePos.x, vertY);
        ctx.stroke();
        ctx.closePath();
        console.log('All good working!')

        lineDefaults.linePos.x--;

        vertY = vertY + getRandomArbitrary(10, 1270);

        var end_of_line = getRandomArbitrary(80, 1200); //adjust this to where you want the line to end
        if (lineDefaults.linePos.x > end_of_line) {
            requestAnimationFrame(function () {
                AnimateLine(vertY);


            });
        }

    }

}