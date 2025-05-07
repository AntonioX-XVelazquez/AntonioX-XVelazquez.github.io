let canvas;
function setup() {
    canvas = createCanvas(400, 400);
  
    background(220);
  
    strokeWeight(15);
  
    colorMode(HSB);
    canvas.parent('canvas');
  }
  
  function mouseDragged(){}
  
  function draw() {
    background(220);
    
    let lineHue = mouseX - mouseY;
    //stroke(lineHue, 90, 90);
    line(pmouseX, pmouseY, mouseX, mouseY);
    if (mouseIsPressed){
      ellipse(mouseX, mouseY, 180);
      stroke(lineHue, 90, 90);
      
    }
    line(pmouseX, pmouseY, mouseX, mouseY);
    if (mouseDragged){fill(mouseX, mouseY, mouseX, mouseY);}
  }