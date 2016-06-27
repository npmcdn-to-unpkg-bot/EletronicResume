/**
 * Created by luizcavalieri on 25/06/2016.
 */
var canvas=document.getElementById("canvas");
var ctx=canvas.getContext("2d");
var cw=canvas.width;
var ch=canvas.height;
function reOffset(){
    var BB=canvas.getBoundingClientRect();
    offsetX=BB.left;
    offsetY=BB.top;
}
var offsetX,offsetY;
reOffset();
window.onscroll=function(e){ reOffset(); }
window.onresize=function(e){ reOffset(); }

var radius=50;

var cover=document.createElement('canvas');
var cctx=cover.getContext('2d');
var size=radius*2+10;
cover.width=size;
cover.height=size;
cctx.fillRect(0,0,size,size);
var radialGradient = cctx.createRadialGradient(size/2, size/2, 1, size/2, size/2, radius);
radialGradient.addColorStop(0, 'rgba(0,0,0,1)');
radialGradient.addColorStop(.65, 'rgba(0,0,0,1)');
radialGradient.addColorStop(1, 'rgba(0,0,0,0)');
cctx.beginPath();
cctx.arc(size/2,size/2,size/2,0,Math.PI*2);
cctx.fillStyle=radialGradient;
cctx.globalCompositeOperation='destination-out';
cctx.fill();

var img=new Image();
img.onload=function(){
    $("#canvas").mousemove(function(e){handleMouseMove(e);});
    ctx.fillRect(0,0,cw,ch);
}
img.src='../../images/banner_mod.png'


function drawCover(cx,cy){
    var s=size/2;
    ctx.clearRect(0,0,cw,ch);
    ctx.drawImage(img,0,0);
    ctx.drawImage(cover,cx-size/2,cy-size/2);
    ctx.fillStyle='black';
    ctx.fillRect(0,0,cx-s,ch);
    ctx.fillRect(0,0,cw,cy-s);
    ctx.fillRect(cx+s,0,cw-cx,ch);
    ctx.fillRect(0,cy+s,cw,ch-cy);
}

function handleMouseMove(e){

    // tell the browser we're handling this event
    e.preventDefault();
    e.stopPropagation();

    mouseX=parseInt(e.clientX-offsetX);
    mouseY=parseInt(e.clientY-offsetY);

    drawCover(mouseX,mouseY);
}