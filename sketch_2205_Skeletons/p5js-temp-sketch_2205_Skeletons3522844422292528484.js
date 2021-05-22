var song; //initiating our variable
var analyzer;
var button ;
var skr;
var onScreenText = 'Start typing';

function preload() {
 song = loadSound ('data/Juanita.mp3');
 skr = loadFont ('data/SkeletonsRegular.otf');
 skb = loadFont ('data/SkeletonsBold.otf');
}

function setup() {
  createCanvas (windowWidth, windowHeight);
  background(0);
  analyzer = new p5.Amplitude();
  analyzer.setInput(song);

  let col1 = color(44, 192, 183);
  
  button = createButton("Play Song");
  button.mousePressed(togglePlaying);
  button.position(0, 0);
  button.style('background-color', col1);

}

function draw() {
  background(0);
  var volume = analyzer.getLevel();

  push ();
  fill(255);
  textSize(30);
  translate(width/2,height/20);
  textAlign(CENTER, CENTER);
  //textFont (skr);
  text('volume = ' + str(volume), 0, 0);
  pop();
  
  push ();
  fill(255);
  translate(width/2, height/2);
  textAlign(CENTER);
  //textFont (skb);

  if (song.isPlaying()) {
    textSize(volume*1600);
  } else {
    textSize(30);
  }
  
  text(onScreenText, 0, 0);
  pop();
  
}

function togglePlaying(){
  if (song.isPlaying()) {
    button.html('Play Song');
    onScreenText = 'Start typing';
    song.stop();
    song.noloop();
  } else {
    song.play(); //using pause, but song is stopping, text won't keep moving after the first pause
    song.loop();
    button.html('Reset');
  }
}

function keyTyped() {
  if (onScreenText == 'Start typing') {
    onScreenText = key;
  } else {
    onScreenText += key;
  }
}

function keyPressed() {
  if (keyCode === BACKSPACE) {
    onScreenText = onScreenText.substring(0, onScreenText.length - 1);
  } 
}

function windowResized(){
  resizeCanvas (windowWidth, windowHeight);
  
}
