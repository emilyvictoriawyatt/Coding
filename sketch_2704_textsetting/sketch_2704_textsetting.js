var font1, words ;
var myText ='Like crunchy cornflakes, Gold leaves rustle underfoot, Beauty in decay';


function preload(){
  font1 = loadFont ('data/NewYork.otf');
  
}
  

function setup() {
  createCanvas(windowWidth, windowHeight);
  background (85);
  textFont (font1);
  words=myText.split (',');
  textSize (60);
  fill (255);
  textLeading (60*1.5);
  
}


function draw() {
  background (85);
  text (myText, width/20, height/20, 600, 500);

}
