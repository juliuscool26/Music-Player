var canvas= document.querySelector('canvas');
var c = canvas.getContext('2d');
c.lineWidth=5;

// loadBar
c.beginPath();
c.strokeStyle = "grey";
c.arc(canvas.width/2, canvas.height/2, 200, 0,Math.PI*2,false);
c.stroke();

// coverArt
// var image=new Image();
// image.src="img/logo.png";
// image.onload=function(){
//     var pat=c.createPattern(image,"no-repeat");
//     c.fillStyle=pat;
//     c.fill();
// }

// SeekBar
c.beginPath();
c.strokeStyle = "#4169e1";
c.arc(canvas.width/2, canvas.height/2, 200,Math.PI,Math.PI*3/2,false);
c.stroke();