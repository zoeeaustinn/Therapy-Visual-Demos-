let x;
let y;  

let r;
let g;
let b;

let input;
let button; let button2; let button3;
let toggleButton;
let gui;

let inputVisible = false; //hides text box, buttons, and toggles
let isMoving = true;

let state = 0 // 0; intro, 1; Drawing
let IntroPage;
let MoldPage;
let DrawPage;
let showMoldPage = true;

let speech;
let PeriodCheck = 0;
//popup = createDiv('welcome');


function setup() {

createCanvas(1300, 725);

speech = new p5.Speech(voiceReady);

//canvas on top 
MoldPage = createGraphics (1300, 725);
MoldPage.background (0);
//canvas underneath 
DrawPage = createGraphics (1300, 725);
DrawPage.background(245, 245, 220);
    

x = width / 2;
y = height / 2;


r = random(255);
g = random(255);
b = random(255);

    
pointSize = 50;//size of line

setupUI();

//popup = createDiv('welcome');
//popup.style(CENTER, CENTER);
///popup.style('font-size', '32px');
//popup.style('background', '(255, 255, 255, 0.9)');
//popup.style('display', 'none');


function setupUI(){
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
//
input.input(checkForPeriod);


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
button2.mousePressed(onButton2Press);
    // hides button
button2.hide();

//Creates edit button 
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

}

function voiceReady(){
  console.log(speech.voices);
}

function checkForPeriod(){
  let textInput = input.value();


  //checks if the last character is '.'
if (textInput.endsWith('.')&& textInput.length > PeriodCheck){
let newText = textInput.substring(PeriodCheck);
let sentences = newText.split('.');

for (let i = 0; i < sentences.length - 1; i++){
  let sentence = sentences[i].trim();
  if (sentence.length > 0){
  //adjusts the rate of voice
  speech.setRate(0.7); 
  speech.speak(sentence + '.');
 }
}
PeriodCheck = textInput.length;
  }
}

function startSpeaking(){
  let textInput = input.value();
}
}


function draw() {

switch (state){
  case 0:
    intro();
    break;
    case 1:
      drawing();
      break;
}
}


function intro(){
  background(245, 245, 220);
  fill(0);
  textSize(25);
  text("Welcome to Therapy , our mission is to create a safe space for you to journal and rant about anything", 90 , 260 );
  text("that has been bothering you. This website interacts with the keys you press and the words you type", 90, 290 );
  text("to create a unique piece of artwork. We strive to transform the emotions you are feeling and whatever you" , 90, 320 );
  text("are going through into something beautiful. Press dismiss and begin typing to start and when you are done" , 90 , 350 );
  text("press submit." , 90 , 380 );}

function drawing(){

  //drawing function on mold page
  if(showMoldPage){
    MoldPage.circle(random(width),random(height),10);
    MoldPage.fill(255);
  }


//pointSize = slider.value();

    if (isMoving){
  // adjust the rate of the speed of the point - i < 10
    for (let i = 0; i < 1; i++){
        step();
    }
    } else {

        DrawPage.stroke(r, g, b);
        DrawPage.strokeWeight(pointSize);
        DrawPage.point(x, y);
    
  
    }

    //displays the bottom canvas 
    image(DrawPage, 0, 0);
    //displays the top canvas(MoldPage), only if 'showMoldPage' is true
    if(showMoldPage){
    image(MoldPage, 0, 0);
    }
}

//
function onButtonPress() {
    //adds action to button presses
    console.log("button pressed");
}

//RESTART BUTTON 
function onButton2Press(){ 

  //displays the mold page
  showMoldPage = true;
  //clears page from previous drawings
  DrawPage.clear();
  //resets the background to original color
  DrawPage.background(245, 245, 220);
  //Allows point to restart moving again
  isMoving = true;
  input.value('');
  PeriodCheck = 0;
}

//when 🖍️ is pressed, editing sliders show
function onButton3Press(){ 
  slider.show();
  slider2.show();
  slider3.show();
}

//When any key is pressed, input box and buttons show
function keyPressed(){

    if (state ===0) {
      state = 1;
        input.show();
        button.show();
        button2.show();
        button3.show();
        toggleButton.show();
        
        inputVisible = true;
    }
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

// function for toggle button
function onTogglePress(){
    isMoving = false; //stops the point from moving
    showMoldPage = false; // hides the top canvas when the DONE button is pressed 
}










function step(){

    //Moves the point
    x += random (-50, 50);
    y += random (-50, 50);

    // Keeps line inside the canvas 
    x = constrain (x, 0, 1300);
    y = constrain (y, 0, 725);

    //Changes color of line randomly
    //r += random(-1, 1);
    //g += random(-1, 1);
    //b += random(-1, 1);

    //Keeps the colors in the range between 0-255
    //r = constrain (r, 0, 255);
    //g = constrain (g, 0, 255);
    //b = constrain (b, 0, 255);

    DrawPage.stroke(r, g, b);
    DrawPage.point (x, y);
    DrawPage.strokeWeight(pointSize);// Size of point
    
}


