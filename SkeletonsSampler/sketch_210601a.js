var analyzer;
var skr;
var songsk;
var songTime;
var togglePlaying;
const letters = `abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*1234567890`;
var listLength;


function preload() {
 skr = loadFont ('data/SkeletonsRegular.otf');
 skb = loadFont ('data/SkeletonsBold.otf');
 songsw = loadSound ('data/StevieWonderSkeletons.mp3');
 songsk = loadSound ('data/Skeletons.mp3');
}

function setup() {
  createCanvas (windowWidth, windowHeight);
  background(0);
  analyzer = new p5.Amplitude();
  analyzer.setInput(songsk);
  songsk.setVolume(0.5);
  listLength=letters.length;
}



function draw() {
  background(0);
  

  
  if (songsk.isPlaying() == false){
     textSize(20);
    textFont(skb);
    noStroke();
    fill(255);
    textAlign(CENTER, CENTER);
    text("Warning: Sound and strobe lights", width/2, height/2);
  }
      else {
      }

  
  var volume = analyzer.getLevel();
  songTime = songsk.currentTime();

  for (let x = 0; x <= width; x += 250) {
  for (let y = 0; y <= height; y += 100) {

    
  if ((songTime > 0) && (songTime < 4))  {
    push();
    noStroke();
    strokeWeight(3);
    textFont (skb);
    textSize(volume*200);
    fill(random(255), random(255), 255);
    frameRate(5);
    text('-----------', random (width), random (height)); 
    pop();
}   
    
  if ((songTime > 4) && (songTime < 6))  {
    push();
    background (random(255));
    frameRate(10);
    noStroke();
    textFont (skb);
    textSize(random(5, 30));
    fill(random(255));
    textAlign (CENTER, CENTER);
    text("i think i can hear something...", width/2, height/2); 
    pop();
}   
    
  if ((songTime > 6) && (songTime < 9))  {
    push();
    background (random(255));
    frameRate(10);
    noStroke();
    textFont (skb);
    textSize(random(5, 30));
    fill(random(255));
    textAlign (CENTER, CENTER);
    text("in there, in the closet", width/2.7, height/2.7);   
    pop();
}   

  if ((songTime > 9) && (songTime < 12.5))  {
    push();
    background (random(255));
    frameRate(10);
    noStroke();
    textFont (skb);
    textSize(random(0, 30));
    fill(random(255));
    textAlign (CENTER, CENTER);
    text("help me", width/1.8, height/2.6);   
    pop();
}   

  if ((songTime > 12.5) && (songTime < 16))  {
    push();
    background (random(255), random(255), 255);
    songsk.setVolume(2);
    frameRate(10);
    strokeWeight(5);
    noFill();
    stroke(255);
    ellipse(random (x), random (y), random(width));
    pop();
}   

  if ((songTime > 16) && (songTime < 19))  {
    push();
    rand = int(random (0,listLength-1));
    songsk.setVolume(2);
    textFont (skb);
    textSize(volume*100);
    fill (random(255), random(255), 255);
    noStroke();
    frameRate(5);
    text(letters[rand], random(width), random(height));   
    pop();
}   

  if ((songTime > 19) && (songTime < 22))  {
    push();
    noStroke();
    textFont (skb);
    textSize(random (5, 30));
    fill(random(255), random(255), 255);
    frameRate(5);
    text('?', x, y); 
    pop();
}   

  if ((songTime > 22) && (songTime < 24))  {
    push();
    background(0);
    noStroke();
    textFont (skb);
    textSize (volume*70);
    fill(random(255), random(255), 255);
    frameRate(5);
    text('Skeletons in your closet', width/2, height/2); 
    pop();

}

  if ((songTime > 24) && (songTime < 25.5)) {
    push();
    fill(random(200), random(200), 255);
    textFont (skb);
    textSize (30, 100);
    text('*', random (width), random (height));
    pop();
}

  if ((songTime > 25.5) && (songTime < 28))  {
    push();
    fill(random(200), random(200), 255);
    textFont (skb);
    textSize (30, 100);
    text('*', random (width), random (height));
    pop();
    
    push();
    noStroke();
    textFont (skb);
    textSize (volume*70);
    fill(255);
    frameRate(5);
    text("Itchin' to come outside", width/2, height/2);
    pop();
}

  if ((songTime > 28) && (songTime < 32))  {
    push();
    background (random(255), random(255), 255);
    songsk.setVolume(2);
    frameRate(5);
    strokeWeight(5);
    noFill();
    stroke(255);
    rect(random (x), random (y), random(width), random(height));
    pop();
}  

  if ((songTime > 32) && (songTime < 35))  {
    songsk.setVolume(2);
    frameRate(5);
    strokeWeight(5);
    stroke(random(200), random(200), 255);
    noFill();
    rect(random (x), random (y), random(width), random(height));
    noStroke();
    textFont (skb);
    textSize (volume*70);
    fill(255);
    frameRate(5);
    rotate(volume);
    textAlign(CENTER, CENTER);
    text("Messin' with your conscience", width/2, height/2); 
   
}  

  if ((songTime > 35) && (songTime < 41)) {
    push();
    noStroke();
    textFont (skb);
    textSize(random (5, 30));
    fill(random(255), random(255), 255);
    frameRate(5);
    text("In a way your face can't hide", x, y); 
    pop();
    } 
   }
 }
}

function togglePlaying(){
}

function mousePressed(){
    if (songsk.isPlaying()) {
    songsk.pause();
  } else {
    songsk.play();
  }
}


function windowResized(){
  resizeCanvas (windowWidth, windowHeight);
  
}

// this sampler was inspired by https://editor.p5js.org/anniezhengg/sketches/xaaDdu3NW
// Made with p5.js
