// 心臓の鼓動のようなアニメーション
const cycle = 100; // 1周期のフレーム数
let count; // 何フレーム目か
let size = 50;

function setup(){
  createCanvas(200, 200);
  count = 0;
}

function draw(){
  background(160, 192, 255);
  
  let speed; // アニメーションの速さ
  if(keyIsPressed){
    speed=2;  
  }
  else{speed=1;}
  count = (count + speed) % cycle;
  if(count < cycle/2){
    size = size+1;
  }
  else{
    size = size-1;
  }
  ellipse(width / 2, height / 2, size);
}
