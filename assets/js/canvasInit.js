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

// function Line() {
//     var vertX = getRandomArbitrary(10, 1280);
//     this.lineWidth = 2;
//     this.strokeStyle = colorLine;
//     this.lineCap = "butt";
//     this.moveTo(getRandomArbitrary(10, 1270), vertX);
//     this.lineTo(getRandomArbitrary(10, 1270), vertX);
// }

function init() {
    canvas = document.getElementById('canvasBanner');
    context = canvas.getContext("2d");
    console.log("It is being called from initCanvasFile");

    bufferCanvas = document.createElement("canvas");
    bufferCanvasCtx = bufferCanvas.getContext("2d");
    bufferCanvasCtx.canvas.width = context.canvas.width;
    bufferCanvasCtx.canvas.height = context.canvas.height;

    
    var startY = getRandomArbitrary(10, 1270);
    //var endX = getRandomArbitrary(10, 1270);
    var endY = getRandomArbitrary(10, 1270);
    var amount = 0;


    //setInterval(addRandomLine, 30);

    if (canvas && canvas.getContext){
        console.log("It is being called from if statement");
        var ctx = canvas.getContext('2d');

        function addRandomLine(){
            if(ctx){

                var vertY = getRandomArbitrary(10, 1270);
                var endY = vertY;
                var endX = getRandomArbitrary(10, 1270);
                var startX = getRandomArbitrary(10, 1270);
                ctx.lineWidth = 2;
                ctx.strokeStyle= colorLine;
                ctx.lineCap="butt";
                ctx.beginPath();
                ctx.moveTo(startX, endY);
                ctx.lineTo(endX, vertY);
                ctx.stroke();

                ctx.closePath();
                console.log('All good working!')

                endX--;


                var end_of_line = 26; //adjust this to where you want the line to end
                if (endX < end_of_line) {
                    requestAnimationFrame(function () {
                        addRandomLine();
                    });
                }
            }
        }

    }

    for (var i = 0; i < 5; i++){
        setInterval(addRandomLine, 6000);

    }

}


function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}


// function animate(){
//     Update();
//     Draw();
// }
//
// function addLine() {
//     lineArray[lineArray.length] = new Line();
//     if (lineArray.length == maxLine)
//         clearInterval(lineTimer);
// }
//
// function blank() {
//     //bufferCanvasCtx.fillStyle = "#330033";
//     bufferCanvasCtx.fillRect(0,0,bufferCanvasCtx.canvas.width, bufferCanvasCtx.canvas.height);
//
// }


