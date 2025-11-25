// カレンダーを描画しよう
function setup(){
  createCanvas(200, 200);
  drawCalendar(2025, 10);
}

function drawCalendar(y, m){

  for(let i = 0; i < 7; i++){
    const x = i * width / 7;
    const y = 20;
    stroke(255);
    text(dayOfWeekAsString(i), x, y);
  }

  let dow = dayOfWeek(y, m, 1);
  for(let d = 1; d <= daysInMonth(y, m); d++){
    // BLANK[3] まずは daysInYear, dayOfWeek を作ろう
    const w = dayOfWeek(y,m,d)*width/7;
    const h = (d-(dayOfWeek(y,m,d)-dow+1))/7 * (height-20)/6;
    if(dayOfWeek(y,m,d) == 0){fill(255,0,0);}
    else if(dayOfWeek(y,m,d) == 6){fill(0,0,255);}
    else{fill(0);}
    text(d, w, h+40);
  }
}

function isLeapYear(y){
  return (y % 4 == 0) && (y % 100 != 0) || (y % 400 == 0);
}

function daysInYear(y){
  // BLANK[1] hint: 閏年なら366日、そうでなければ365日
  if(isLeapYear(y)){return 366;}
  else{return 365;}

}

function daysInMonth(y, m){
  if(m == 2){
    return isLeapYear(y) ? 29 : 28;
  }
  else if(m == 4 || m == 6 || m == 9 || m == 11){
    return 30;
  }
  else{
    return 31;
  }
}

function dayOfYear(y, m, d){
  let count = 0;
  for(let i = 1; i < m; i++){
    count += daysInMonth(y, i);
  }
  return count + d;
}

function dayOfWeek(y, m, d){
  // BLANK[2] hint: 曜日がわかる日からの経過日数を求め7の剰余を取る　たとえば1970年1月1日木曜日
  // let pastdays = (y-1970)* daysInYear + (m-1)* daysInMonth + (d-1);
  // 閏年の計算方法は？
  let pastdays = 0 
  for(i=1970; i < y; i++){
    pastdays = pastdays + daysInYear(i)+1;
  }
  pastdays = pastdays + dayOfYear(y,m,d);

  if(pastdays % 7 == 0){return 4;}
  if(pastdays % 7 == 1){return 5;}
  if(pastdays % 7 == 2){return 6;}
  if(pastdays % 7 == 3){return 0;}
  if(pastdays % 7 == 4){return 1;}
  if(pastdays % 7 == 5){return 2;}
  if(pastdays % 7 == 6){return 3;}
}

function dayOfWeekAsString(dow){
  const a = ["日", "月", "火", "水", "木", "金", "土"];
  return a[dow];
}
