var analyzer;
var button ;
var skr;
var onScreenText = 'Start typing, then press play';
var songsk;

function preload() {
 skr = loadFont ('data/SkeletonsRegular.otf');
 skb = loadFont ('data/SkeletonsBold.otf');
 songsk = loadSound ('data/StevieWonderSkeletons.mp3');
}

function setup() {
  createCanvas (windowWidth, windowHeight);
  background(0);
  analyzer = new p5.Amplitude();
  analyzer.setInput(songsk);

  let col1 = color(44, 192, 183);
  
  button = createButton("Play Song");
  button.mousePressed(togglePlaying);
  button.position(10, 10);
  button.style('background-color', col1);

}

function draw() {
  background(0);
  var volume = analyzer.getLevel();

  push ();
  fill(255);
  textSize(30);
  textAlign(CENTER, CENTER);
  textFont (skr);
  text("We're all Skeletons out here", width/2, height/3);
  pop();
  
  push ();
  fill(255);
  translate(width/2, height/2);
  textAlign(CENTER);
  textFont (skb);

  if (songsk.isPlaying()) {
    textSize(volume*400);
  } else {
    textSize(30);
  }
  
  text(onScreenText, 0, 0);
  pop();
  
}

function togglePlaying(){
  if (songsk.isPlaying()) {
    button.html('Play Song');
    onScreenText = 'Start typing, then press play';
    songsk.stop();
    songsk.noloop();
  } else {
    songsk.play();
    songsk.loop();
    button.html('Reset');
  }
}

function keyTyped() {
  if (onScreenText == 'Start typing, then press play') {
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
