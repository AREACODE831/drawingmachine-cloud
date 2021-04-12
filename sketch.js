let array = [];


function setup() {
  createCanvas(600, 600);
  background(167, 200, 242);

  strokeWeight(10);
  //noFill();
}

function draw() {
  //==false = !mouseIsPressed

  if (mouseIsPressed) {
    //line(mouseX, mouseY, pmouseX, pmouseY);
    background(255);
    array.push([mouseX, mouseY]);
    //grey scale random
    stroke(map(mouseX, 0, 600, 0, 255, true))
    // line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY);
    // line(mouseX, mouseY, pmouseX, pmouseY);
  }
}

function keyTyped() {
  //  console.log('key ${key} is being typed')
  console.log("key" + key + "is being typed")


  if (key === 's') {
    saveCanvas('fileName', 'png');
  } else if (key === 'd') {
    background(167, 200, 242);

    beginShape();
    for (let i = 0; i < array.length; i++) {
      //line(array[i][0], array[i][1], array[i + 1][0], array[i + 1][1]);
      curveVertex(array[i][0], array[i][1]);
    }
    endShape();
  }

  return false;

}
