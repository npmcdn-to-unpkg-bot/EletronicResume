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

function Line() {
    var vertX = getRandomArbitrary(10, 1280);
    this.lineWidth = 2;
    this.strokeStyle = colorLine;
    this.lineCap = "butt";
    this.moveTo(getRandomArbitrary(10, 1270), vertX);
    this.lineTo(getRandomArbitrary(10, 1270), vertX);
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

    setInterval(addRandomLine, 30);

    if (canvas && canvas.getContext){
        console.log("It is being called from if statement");
        var ctx = canvas.getContext('2d');



        function addRandomLine(){
            if(ctx){

                var vertX = getRandomArbitrary(10, 1280);
                ctx.lineWidth = 2;
                ctx.strokeStyle= colorLine;
                ctx.lineCap="butt";
                ctx.beginPath();
                ctx.moveTo(getRandomArbitrary(10, 1270), vertX);
                ctx.lineTo(getRandomArbitrary(10, 1270), vertX);
                ctx.stroke();
            }
        }

    }

    for (var i = 0; i < 15; i++){
        setTimeout(addRandomLine, 6000);
    }


    lineTimer = setInterval(addLine, 200);

    console.log("It is being called from before Draw() function");


    setInterval(animate, 30);

}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}


function animate(){
    Update();
    Draw();
}

function addLine() {
    lineArray[lineArray.length] = new Line();
    if (lineArray.length == maxLine)
        clearInterval(lineTimer);
}

function blank() {
    //bufferCanvasCtx.fillStyle = "#330033";
    bufferCanvasCtx.fillRect(0,0,bufferCanvasCtx.canvas.width, bufferCanvasCtx.canvas.height);

}


