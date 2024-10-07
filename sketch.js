let x;
let y;  

let r;
let g;
let b;

let input;
let button; let button2; let button3;
let toggleButton;
let gui;
//let slider; let slider2; let slider3;

//let topCanvas;
//let showTopCanvas = true;



let inputVisible = false; //hides text box, buttons, and toggles
let isMoving = true;


function setup() {

// canvas underneath
createCanvas(1400, 725);
    

//canvas on top 
//topCanvas = createGraphics(1400, 725);


x = width / 2;
y = height / 2;


r = random(255);
g = random(255);
b = random(255);



background(245, 245, 220);
    
pointSize = 50;//size of line




    //creates input (TEXT BOX)
input = createInput('Please Type Here'); 
    //where the input box is located
input.position(0, 750);
    //size of input box
input.size (1100, 150); 
    //size of font in input.
input.style('font-size', '50px');
    //hides input
input.hide(); 


//creates INFO button
button = createButton('INFO');
    //where the button is positioned 
button.position (1125, 825);
    //button size
button.size(115, 75);
    //button "submit" text size
button.style('font-size', '25px');
    //adds mousepress to button
button.mousePressed(onTogglePress);
    //hide button
button.hide();


//creates RESTART button
button2 = createButton('RESTART');
    //where the button is positioned 
button2.position (1250, 825);
    //button size
button2.size(115, 75);
    //button "submit" text size
button2.style('font-size', '25px');
    //adds mousepress to button
button2.mousePressed(onButtonPress);
    // hides button
button2.hide();


button3 = createButton('🖍️');
    //where the button is positioned 
button3.position (1125, 740);
    //button size
button3.size(115, 75);
    //button text size
button3.style('font-size', '25px');
    //adds mousepress to button
button3.mousePressed(onButton3Press);
    // hides button
button3.hide();


    // creates DONE toggle
toggleButton = createButton ('DONE');
    //position of toggle
toggleButton.position (1250, 740);
    // set toggle size
toggleButton.size(115, 75);
    //set toggle font size
toggleButton.style('font-size','25px');
    //event for toggle
toggleButton.mousePressed(onTogglePress);
    //adds mousepress to toggle 
toggleButton.hide();


slider = createSlider("Slider",128, 32, 0, 1);
slider.position (1400, 0);
slider.size (250,55);
slider.hide();

slider2 = createSlider("Slider",128, 32, 0, 1);
slider2.position (1400, 100);
slider2.size (250,55);
slider2.hide();


slider3 = createSlider("Slider",128, 32, 0, 1);
slider3.position (1400, 200);
slider3.size (250,55);
slider3.hide();



}





function draw() {

//pointSize = slider.value();


    if (isMoving){
  // adjust the rate of the speed of the point - i < 10
    for (let i = 0; i < 1; i++){
        step();
    }
    } else {

        stroke(r, g, b);
        strokeWeight(pointSize);
        point(x, y);
    }
    
    //if (showTopCanvas){
      //topCanvas.background(255, 200, 200, 150);
     // topCanvas.fill(0);
      //topCanvas.textSize(32);
      //topCanvas.text('Top Canvas Working', 100, 100);

     // image(topCanvas, 0, 0);
   /// }

}

function onButtonPress() {
    //adds action to button presses
    console.log("button pressed");
}

function onButton3Press(){ 
  slider.show();
  slider2.show();
  slider3.show();
}


function keyPressed(){
    if (!inputVisible) {
        input.show();
        button.show();
        button2.show();
        button3.show();
        toggleButton.show();
        
        inputVisible = true;
    }


//when '' key is pressed, colors will change on the canvas
if (key === 'a'){ r = 255; g = 255; b = 255; // white
}else if (key === 'e'){r = 255; g = 0; b = 0; // 
}else if (key === 'i'){r = 255; g = 128; b = 0; // 
}else if (key === 'o'){r = 255; g = 255; b = 0; //
}else if (key === 'u'){r = 128; g = 255; b = 0; // 
}else if (key === 'h'){r = 0; g = 255; b = 0; //  
}else if (key === 't'){r = 0; g = 255; b = 128; //
}else if (key === 'b'){r = 0; g = 252; b = 255; // 
}else if (key === 'r'){r = 0; g = 125; b = 255; // 
}else if (key === 's'){r = 3; g = 0; b = 255; // 
}else if (key === 'm'){r = 131; g = 0; b = 255; //
}else if (key === 'n'){r = 255; g = 0; b = 252; //
}else if (key === 'l'){r = 255; g = 0; b = 125; // 
} else {
//If any other key is pressed it will change to random colors.
r = random(255);
g = random(255);
b = random(255);

}
}
// function for toggle button
function onTogglePress(){
    isMoving = false; //stops the point from moving
    //showTopCanvas = false; 
}


function step(){

    //Moves the point
    x += random (-20, 20);
    y += random (-20, 20);

    // Keeps line inside the canvas 
    x = constrain (x, 0, 1400);
    y = constrain (y, 0, 725);

    //Changes color of line randomly
    //r += random(-1, 1);
    //g += random(-1, 1);
    //b += random(-1, 1);

    //Keeps the colors in the range between 0-255
    //r = constrain (r, 0, 255);
    //g = constrain (g, 0, 255);
    //b = constrain (b, 0, 255);

    stroke(r, g, b);
    point (x, y);
    strokeWeight(pointSize);// Size of point
    
}


