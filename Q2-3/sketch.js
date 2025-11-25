// // ギリシャ国旗（ほかの国旗に挑戦してもOK）
// function setup() {
//   createCanvas(270, 180);
//   //noStroke();
//   background(255);

//   const d = height / 9; // 縞1本の太さ
//   const blue = color(0, 51, 160);

//   // 縞を描く
//   for(let i = 0; i < 9; i++){
//     // BLANK[1] ヒント：縞の色を交互に変えるには2で割った余りを使おう
//     rect(0, i * d, width, (i + 1) * d);
//   }

//   // 十字を描く
//   const size = d * 5;
//   fill(blue);
//   rect(0, 0, size, size);
//   fill(255);
//   rect(d * 2, 0, d, size);
//   // BLANK[2] 十字を完成させよう
// }

//イギリス国旗(ユニオンジャック)
function setup(){
  createCanvas(270,150);
  background(0,0,100);


  const c = height / 30; //高さを30分割
  const d = width / 60; //幅を60分割
  const red = color(200,0,0);

  stroke(255);
  strokeWeight(30);
  line(0, 0, width, height);
  line(0,height,width,0);
  stroke(red);
  strokeWeight(10);
  line(0, 5, width, height-5);
  line(5,height,width-5,0);


  

// i=高さ　j=幅　の変数
  for(let i=0; i<30; i++){
    for(let j=0; j<60; j++){
      noStroke();
      // if(0<=i && i<=3 && 43<=j && j<=60){
      //   fill(255);
      //   quad(0,i*c, 0,(i+1)*c, width-(2*(60-j-2)*d),height, width-(2*(60-j)*d),height);
      // }
      if(9<=i && i<=20){
        fill(255);
        rect(0,i*c,width,c);
      }
      if(24<=j && j<=35){
        fill(255);
        rect(j*d,0,d,height);
      }
    }
  }

  for(let i=0; i<30; i++){
    for(let j=0; j<60; j++){
      noStroke();
        if(11<=i && i<=18){
        fill(red);
        rect(0,i*c,width,c);
      }
      if(26<=j && j<=33){
        fill(red);
        rect(j*d,0,d,height);
      } 
    }
  }
}