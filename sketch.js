
let im;
let im2;
//let im3;
let im4;
let im5;
let im6;
let im7;

function preload(){
  im =loadImage('1a.jpg');
  im2 =loadImage('2a.jpg');
  //im3 =loadImage('3a.jpg');
  im4 =loadImage('4a.jpg');
  im5 =loadImage('5a.jpg');
  im6 =loadImage('6a.jpg');
  im7 =loadImage('7a.jpg');
  
}


function setup() {
  createCanvas(1000, 800);
  fill(255,255,0);
  triangle(20,247,20,253,25,250);
  //im = loadImage('1a'.jpg);
  //image(im,0,0,0,0,200,1000);
  //image(im2,0,0);
  /*let p = createP('Click arrows ( <  > )');
  p.center();
  p.style('font-size', '20px');
  p.style('text-align', 'center');
  p.style('z-index', '-9999');*/
}

let n=0;

function draw() {


  image(im,0,0,0,0,n,0);
  image(im2,0,0,0,0,n-1000,0);
  image(im4,0,0,0,0,n-2000,0);
  image(im5,0,0,0,0,n-3000,0);
  image(im6,0,0,0,0,n-4000,0);
  image(im7,0,0,0,0,n-5000,0);
  image(im,0,0,0,0,n-6000,0);
  
  
  fill(0);
  triangle(40,240,40,260,20,250);
  fill(0);
  triangle(960,240,960,260,980,250);
  //fill(255,255,0);
  //triangle(n,247,n,253,n+2,250);

  if (mouseIsPressed === true && mouseX>0 && mouseX < 60 && mouseY > 0 && mouseY < 500){
  //n=1.005*n;
  n=n+3;
  n++;
  }   
  if (mouseIsPressed === true && mouseX > 940 && mouseX < 1000 &&  mouseY > 0 &&  mouseY < 500){
  n=n-5;
  n++;
  }
  
  n++;

  if(n>=6000){n=0;}
  if(n<=0){n=0;}      
  
  
  fill(50);
 // triangle(503,1212,503,1228,517,1220);
  textSize(22);
  text('Use arrows', 450, 750);

} 

