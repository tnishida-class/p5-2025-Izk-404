// 2D アニメーションゲームのようなインタラクション
let x, y;
let vx, vy;
const g = 1;

function setup(){
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
  vx = 0;
  vy = 0;
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function draw(){
  background(160, 192, 255);
  const size = height * 0.1; // キャラクターのサイズ

  // 地面を描く
  const groundY = height * 0.8;
  fill(64, 192, 64);
  rect(0, groundY, width, height - groundY);

  let gr = groundY-size;

  if(keyIsDown(LEFT_ARROW))
    if(keyIsDown(SHIFT)){x -= 20;}
    else{x -= 10;}
  if(keyIsDown(RIGHT_ARROW))    
    if(keyIsDown(SHIFT)){x += 20;}
    else{x += 10;}
  x = constrain(x,size/2,width-(size/2));
  y = constrain(y,height*0.3,gr);
  // BLANK[2] 重力とジャンプ
  x += vx;
  y += vy;
  // vy += g;
  if(y > gr){ 
    if(keyIsDown(" ".charCodeAt(0))){
      if(y < height*0.3){
        vy = g*vy;
      }
      else
        {vy = -2 * g * vy; 
      }
    }
  }
  else{vy += g;}

 

  // 速くなりすぎないように制限
  vx = constrain(vx, -15, 15);
  vy = constrain(vy, -15, 15);

  // 位置を更新
  x += vx;
  y += vy;

  // キャラクターを描く
  fill(0);
  ellipse(x, y, size, size);
}
