// 吹き出し
function setup(){
  createCanvas(400, 400);
  textSize(16);
}

function draw(){
  background(220);
  noStroke();
  balloon("関数は難しい？", 100, 100);
  balloon("関数は便利？", mouseX, mouseY);
}

function balloon(t, x, y){
  const w = textWidth(t); // テキストの幅
  const h = textAscent() + textDescent(); // テキストの高さ
  const p = 4; // 余白の大きさ (padding)

  push();

  // BLANK[1] 吹き出しの背景を先に描く
  fill(0,20,180);
  rect(x,y,w*1.1,h*1.2);

  // BLANK[2] 吹き出しの三角形を描く
  const x1 = x+(w/2);
  const x2 = x+(w*3/4);
  const x3 = x+w;
  const y3 = y+h+30;
  triangle(x1,h+y,x3,y3,x2,h+y);

  // 吹き出しのテキストを次に描く
  textAlign(LEFT, CENTER);
  fill(255);
  text(t, x + p, y + h / 2 + p);
  
  pop();
}