let array = [];
let randomIndex;
// let value = 0;
let strokeWidth = 1;
let backgroundColor = 100;
let noiseOffset = 0.0;

// let inconsolata;
// function preload() {
//   inconsolata = loadFont('assets/inconsolata.otf');
// }
let animating = false;
let cloud = [];
let imageCounter = 0;
let startRadomizerbutton;
let addMoreButton;
let cv;
let nameInputs = [];
let firstTime = true;

function preload() {
  //'assets/cat_${i}.jpeg'
  for (let i = 0; i <= 10; i++) {
    cloud[i] = loadImage("assets/cloud_" + i + ".jpeg")
  }
}

function setup() {
  cv = createCanvas(550, 550);
  cv.parent("#canvasDiv");
  background(107, 152, 242);

  //strokeWeight(8);
  noFill();
  textSize(14);
  imageMode(CENTER);
  frameRate(4);
  textFont()
  startRadomizerbutton = select("#rButton");
  startRadomizerbutton.mousePressed(buttonPressed);
}


function draw() {
  //==false = !mouseIsPressed
  // fill(value);
  if (mouseIsPressed) {
    //line(mouseX, mouseY, pmouseX, pmouseY);
    //background(255);
    colorMode(HSB);
    strokeWeight(strokeWidth);

    noiseOffset += 0.05;
    strokeWidth = noise(noiseOffset) * 10;


    if (mouseIsPressed) {
      //line(mouseX, mouseY, pmouseX, pmouseY);
      // backgroundColor -= 2;
      // background(backgroundColor);
      //stroke(map(mouseX, 0, 600, 0, 255, true))
      stroke((5 * frameCount) % 360, 40, 100);
      fill((5 * frameCount) % 360, 100, 100);
      strokeWeight(5);
      line(mouseX, mouseY, pmouseX, pmouseY);
    }
    // array.push([mouseX, mouseY]);
    //grey scale random
    // line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY);
    // line(mouseX, mouseY, pmouseX, pmouseY);
    // beginShape();
    // for (let i = 0; i < array.length; i++) {
    //   //line(array[i][0], array[i][1], array[i + 1][0], array[i + 1][1]);
    //   curveVertex(array[i][0], array[i][1]);
    // }
    // endShape();
    colorMode(RGB);
  }

  if (animating == true) {
    clear();
    image(cloud[imageCounter], width / 2, height / 2);

    if (imageCounter < cloud.length - 1) {
      imageCounter++;
      console.log(imageCounter);
    } else {
      imageCounter = 0;
    }
  }
}

function keyTyped() {
  //  console.log('key ${key} is being typed')
  console.log("key" + key + "is being typed")


  if (key === 's') {
    saveCanvas('fileName', 'png');
    // value = 0;
  } else if (key === 'c') {
    //background(167, 200, 242);
    clear();


  }

  return false;

}

function randomizer() {
  animating = false;

  if (names[0]) {
    clear();
    randomIndex = int(random(names.length));
    image(random(cloud), width / 2, height / 2);

  } else {
    background(242, 118, 107);
    text("Do you want another try?", 210, 250);
  }

}

function buttonPressed() {

  animating = true;
  setTimeout(randomizer, 800);

}

function mousePressed() {
  array = [];
  backgroundColor = 255;
}
