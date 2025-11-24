// 最終課題を制作しよう

let x, y;
let vx, vy;
const g = 1;
let enemies;
let stars;
let s =0;




function setup(){
  createCanvas(windowWidth,windowHeight);
  vx=0;
  vy=0;
  x=width*0.3;
  y=height*0.5;
  enemies = [];
  stars = [];
  supers = [];

}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}


function draw(){
  background(160,192,255);
  const groundY = height * 0.7;
  fill(64, 192, 64);
  rect(0, groundY, width, height - groundY);


  const size = height*0.1;
  let speed = 7;

  if(keyIsDown(UP_ARROW)){speed += 5;}
  if(keyIsDown(DOWN_ARROW)){speed -= 5;}
  speed = constrain(speed,-10,100);

  if(keyIsDown("A".charCodeAt(0))){x -= 10;}
  if(keyIsDown("D".charCodeAt(0))){x += 10;}
  x = constrain(x,size/2,width-(size/2));
  y = constrain(y,0,height*0.6);

  x += vx;
  y += vy;
  vy += g;
  if(y > height*0.6){ 
    if(keyIsDown(" ".charCodeAt(0))){
      if(y <= height*0.2){
        vy = g*vy;
      }
      else
        {vy = -2*g * vy; 
      }
    }
  }
  else{vy += g;}

  vx = constrain(vx, -20, 20);
  vy = constrain(vy, -20, 20);
  x += vx;
  y += vy;


  fill(220,0,0);
  ellipse(x, y, size, size);




  for(let i=0; i<enemies.length; i++){
    let e = enemies[i];
    fill(0);
    ellipse(e.x,e.y,e.size);
    e.x -= e.vx;
  }
  if(frameCount % 40 === 0){
    let e = {x:width,y:random(height*0.3,groundY-15),vx:speed,vy:0,size:height*0.04};
    enemies.push(e);
  }
  
  const activeEnemies = [];
  for(let i = 0; i < enemies.length; i++){
    let e = enemies[i];
    let hit = false;
    const distance = dist(x,y,e.x,e.y);
    const radian = (size+e.size)/2;
    if(distance<radian){
      hit=true;
    }
    if(hit){s--;}
    if(!hit){activeEnemies.push(e);}
  }
  enemies = activeEnemies;

  


  for(let i=0; i<stars.length; i++){
    let st = stars[i];
    fill(250,250,0);
    ellipse(st.x,st.y,st.size);
    st.x -= st.vx;
  }
  if(frameCount % 40 === 0){
    let st = {x:width,y:random(height*0.3,groundY-15),vx:speed+2,vy:0,size:height*0.04};
    stars.push(st);
  }
  
  const activeStars = [];
  for(let i = 0; i < stars.length; i++){
    let st = stars[i];
    let hit = false;
    const distance = dist(x,y,st.x,st.y);
    const radian = (size+st.size)/2;
    if(distance<radian){
      hit=true;
    }
    if(hit){s++;}
    if(!hit){activeStars.push(st);}
  }
  stars = activeStars;




  for(let i=0; i<supers.length; i++){
    let e = supers[i];
    fill(0,0,230);
    ellipse(e.x,e.y,e.size);
    e.x -= e.vx;
  }
  if(frameCount % 80 === 0){
    let e = {x:width,y:random(height*0.3,groundY),vx:speed+10,vy:0,size:height*0.015};
    supers.push(e);
  }
  
  const activeSupers = [];
  for(let i = 0; i < supers.length; i++){
    let e = supers[i];
    let hit = false;
    const distance = dist(x,y,e.x,e.y);
    const radian = (size+e.size)/2;
    if(distance<radian){
      hit=true;
    }
    if(hit){s += 3;}
    if(!hit){activeSupers.push(e);}
  }
  supers = activeSupers;



  score(s,width*0.2,height*0.9);
  rule();

}



function score(s,x,y){
  push();
  textSize(width*0.03+height*0.03);
  textAlign(RIGHT, CENTER);
  fill(255);
  stroke(0,35,255);
  strokeWeight(8);
  text(s+"pt",x,y);
  pop();

  push();
  textSize(width*0.02+height*0.02);
  textAlign(LEFT, CENTER);
  fill(255);
  strokeWeight(6);
  if(s<10){
    stroke(120);
    text("RankE",x+(width*0.03),y);}
  if(s>=10 && s<30){
    stroke(0,130,60);
    text("RankD",x+(width*0.03),y);}
  if(s>=30 && s<50){
    stroke(255,220,0);
    text("RankC",x+(width*0.03),y);}
  if(s>=50 && s<70){
    stroke(0,50,210);
    text("RankB",x+(width*0.03),y);}
  if(s>=70 && s<100){
    stroke(220,0,0);
    text("RankA",x+(width*0.03),y);}
  if(s>=100 && s<500){
    stroke(230,180,34);
    text("RankS",x+(width*0.03),y);}
  if(s>=500 && s<1000){
    stroke(212);
    text("RankSS",x+(width*0.03),y);}
  if(s>=1000){
    stroke(170,0,255);
    text("RankZ",x+(width*0.03),y);}
  pop();
}



function rule(){
  push();
  textSize(width*0.02+height*0.02);
  textAlign(LEFT, CENTER);
  fill(255);
  text("+1pt",width*0.5,height*0.8);
  text("−1pt",width*0.5,height*0.85);
  text("+3pt",width*0.5,height*0.9);

  fill(250,250,0);
  ellipse(width*0.45,height*0.8,height*0.04);
  fill(0);
  ellipse(width*0.45,height*0.85,height*0.04);
  fill(0,0,230);
  ellipse(width*0.45,height*0.9,height*0.015);

  textSize(width*0.01+height*0.01);
  fill(255);
  text("A = ←",width*0.67,height*0.75);
  text("D = →",width*0.67,height*0.8);
  text("SPACE = Jump",width*0.67,height*0.85);
  text("Hold ↑ = Speed UP",width*0.67,height*0.9);
  text("Hold ↓ = Speed DOWN",width*0.67,height*0.95);
  pop();
}



