function setup() {
    createCanvas(1000, 1000);
    background("white");
  }
  
  function draw() {
    
    
    stroke("black");
    fill("darkblue");
    
   // console.log(mouseIsPressed);
   
    if (mouseIsPressed) {
      rect(mouseX, mouseY,25 ,25);
    }
  }