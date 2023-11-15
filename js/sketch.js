var ellipseX = 400
var ellipseY = 400

function setup() {
    
    var canvas = createCanvas(800, 800);
    canvas.parent("p5container");

    //random gray
    frameRate(1)
    randomColor = color(random(255),random(255),random(255));
    background(randomColor);
    
}

function draw() {

    // colour for body
    colorMode(RGB, 100);
    c = color(75,49,25);
    fill(c);

    // front & back legs
    ellipse(320, 500, 45, 100);
    ellipse(490, 500, 45, 100);
    // body

    ellipse(400, 400, 350, 200);

    // head
    ellipse(220, 325, 175, 150);
     
    // nose
    colorMode(RGB, 100);
    c = color(210,29,25);
    fill(c);
    ellipse(220, 360, 75, 50);

    // left & right eyes
    colorMode(RGB, 100);
    c = color(0,0,0);
    fill(c);
    ellipse(180, 300, 15, 10);
    ellipse(255, 300, 15, 10); 

}