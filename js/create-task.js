var fques = 0;
var ques;
var check;
var t;
var seconds = 0;
var minutes = 0;
var hours = 0;
var score = 0;
var buttonClicked = 1;

function checkAns(x){
  if(buttonClicked == 0){
    if(x == check){
      document.getElementById("correct").innerHTML = "<br/>Answer:<br/>Correct!";
      score++;
      document.getElementById("ansCount").innerHTML = "<br/>Score:<br/>" + score;
    }else{
      document.getElementById("correct").innerHTML = "<br/>Answer:<br/>False!";
      score--;
      document.getElementById("ansCount").innerHTML = "<br/>Score:<br/>" + score;
    }
    buttonClicked = 1;
  }
}

function restart(){
  stopTimer();
  document.getElementById("time").innerHTML = "<br/>Time:<br/>00:00:00";
  document.getElementById("correct").innerHTML = "<br/>Answer<br/>-";
  document.getElementById("ansCount").innerHTML = "<br/>Score<br/>0";
  document.getElementById("start").innerHTML = "Start";
  document.getElementById("ans1").innerHTML = "";
  document.getElementById("ans2").innerHTML = "";
  document.getElementById("ans3").innerHTML = "";
  document.getElementById("ans4").innerHTML = "";
  document.getElementById("quest").innerHTML = "";
  score = 0;
  buttonClicked = 1;
  fques = 0;
}

function question(){
  if(nextClicked == 0){
    if(fques == 0){
      startTimer()
      genquest();
      genansw();
      document.getElementById("start").innerHTML = "Next Question";
      buttonClicked = 0;
      fques = 1;
    }else{
      genquest();
      genansw();
      buttonClicked = 0;
      document.getElementById("correct").innerHTML = "<br/>Answer<br/>-"
    }
  }else{

  }
}

function startTimer(){
  seconds = 0;
  minutes = 0;
  hours = 0;
  timer();
}
function stopTimer(){
  clearTimeout(t);
}

function timer(){
  document.getElementById("time").innerHTML = "<br/>Time:<br/>" + (hours ? (hours>9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes>9 ? minutes : "0" + minutes) : "00") + ":" + (seconds>9 ? seconds : "0" + seconds);;
  seconds++;
  if(seconds >= 60){
    seconds = 0;
    minutes++;
    console.log("oof");
  }
  if(minutes >= 60){
    minutes = 0;
    hours++;
    console.log("oof");
  }
  t = setTimeout(function(){ timer() }, 1000);
}

function genquest(){
  ques = genopp();
  document.getElementById("quest").innerHTML = ques;
}
function genansw(){
  let answer = eval(ques);
  let w = eval(genopp());
  let ans1 = (w != answer) ? w : w+1;
  let y = eval(genopp());
  let ans2 = (y != answer) ? y : y+8;
  let z = eval(genopp());
  let ans3 = (z != answer) ? z : z-6;
  let x = Math.floor(Math.random()*4);
  switch(x){
    case 0:
      document.getElementById("ans1").innerHTML = answer;
      document.getElementById("ans2").innerHTML = ans1;
      document.getElementById("ans3").innerHTML = ans2;
      document.getElementById("ans4").innerHTML = ans3;
      check = 1;
      break;
    case 1:
      document.getElementById("ans1").innerHTML = ans1;
      document.getElementById("ans2").innerHTML = answer;
      document.getElementById("ans3").innerHTML = ans2;
      document.getElementById("ans4").innerHTML = ans3;
      check = 2;
      break;
    case 2:
      document.getElementById("ans1").innerHTML = ans2;
      document.getElementById("ans2").innerHTML = ans1;
      document.getElementById("ans3").innerHTML = answer;
      document.getElementById("ans4").innerHTML = ans3;
      check = 3;
      break;
    case 3:
      document.getElementById("ans1").innerHTML = ans3;
      document.getElementById("ans2").innerHTML = ans1;
      document.getElementById("ans3").innerHTML = ans2;
      document.getElementById("ans4").innerHTML = answer;
      check = 4;
      break;
  }
}

function genopp(){
  do{
    let y;
    let x = Math.floor(Math.random()*4);
    switch(x){
      case 0:
        y = "+";
        break;
      case 1:
        y = "-";
        break;
      case 2:
        y = "*";
        break;
      case 3:
        y = "/";
        break;
    }
    let num1 = Math.floor(Math.random()*13);
    let num2 = Math.floor(Math.random()*13);
    var quest = num1 + y + num2;
  }while(!Number.isInteger(eval(quest)));
  return quest;
}
