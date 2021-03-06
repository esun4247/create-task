var fques = 0;
var ques;
var check;
var t;
var timeCount = "00:00:00";
var sCount = 0;
var seconds = 0;
var minutes = 0;
var hours = 0;
var score = 0;
var buttonClicked = 1;
var nextClicked = 0;
var correctAns = 0;
var incorrectAns = 0;

function checkAns(x){
  if(buttonClicked == 0){
    if(x == check){
      document.getElementById("correct").innerHTML = "<br/>Answer:<br/>Correct!";
      score++;
      document.getElementById("ansCount").innerHTML = "<br/>Score:<br/>" + score;
      switch(x){
        case 1:
          document.getElementById("ans1").style.background = "#33ff33";
          break;
        case 2:
          document.getElementById("ans2").style.background = "#33ff33";
          break;
        case 3:
          document.getElementById("ans3").style.background = "#33ff33";
          break;
        case 4:
          document.getElementById("ans4").style.background = "#33ff33";
          break;
      }
      correctAns++;
    }else{
      document.getElementById("correct").innerHTML = "<br/>Answer:<br/>False!";
      score--;
      document.getElementById("ansCount").innerHTML = "<br/>Score:<br/>" + score;
      switch(x){
        case 1:
          document.getElementById("ans1").style.background = "#ff0000";
          break;
        case 2:
          document.getElementById("ans2").style.background = "#ff0000";
          break;
        case 3:
          document.getElementById("ans3").style.background = "#ff0000";
          break;
        case 4:
          document.getElementById("ans4").style.background = "#ff0000";
          break;
      }
      switch(check){
        case 1:
          document.getElementById("ans1").style.background = "#33ff33";
          break;
        case 2:
          document.getElementById("ans2").style.background = "#33ff33";
          break;
        case 3:
          document.getElementById("ans3").style.background = "#33ff33";
          break;
        case 4:
          document.getElementById("ans4").style.background = "#33ff33";
          break;
      }
      incorrectAns++;
    }
    buttonClicked = 1;
    nextClicked = 0;
  }
}

function finish(){
  alert("Results:\nCorrect Answers: " + correctAns + "\nIncorrect Answers: " + incorrectAns + "\nTotal Score: " + score + "\nTime: " + timeCount + "\nScore/Time Ratio: " + (score/sCount).toFixed(2));
  restart();
}

function restart(){
  stopTimer();
  document.getElementById("time").innerHTML = "<br/>Time:<br/>00:00:00";
  document.getElementById("correct").innerHTML = "<br/>Answer:<br/>-";
  document.getElementById("ansCount").innerHTML = "<br/>Score:<br/>0";
  document.getElementById("start").innerHTML = "Start";
  document.getElementById("ans1").innerHTML = "";
  document.getElementById("ans2").innerHTML = "";
  document.getElementById("ans3").innerHTML = "";
  document.getElementById("ans4").innerHTML = "";
  document.getElementById("quest").innerHTML = "";
  document.getElementById("ans1").style.background = "#00b300";
  document.getElementById("ans2").style.background = "#00b300";
  document.getElementById("ans3").style.background = "#00b300";
  document.getElementById("ans4").style.background = "#00b300";
  score = 0;
  buttonClicked = 1;
  nextClicked = 0;
  fques = 0;
  correctAns = 0;
  incorrectAns = 0;
  timeCount = "00:00:00"
  sCount = 0;
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
      document.getElementById("ans1").style.background = "#00b300";
      document.getElementById("ans2").style.background = "#00b300";
      document.getElementById("ans3").style.background = "#00b300";
      document.getElementById("ans4").style.background = "#00b300";
    }
    nextClicked = 1;
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
  timeCount = (hours ? (hours>9 ? hours : "0" + hours) : "00")+":"+(minutes ? (minutes>9 ? minutes : "0" + minutes) : "00")+":"+(seconds>9 ? seconds : "0" + seconds);
  document.getElementById("time").innerHTML = "<br/>Time:<br/>" + timeCount;
  seconds++;
  sCount++;
  if(seconds >= 60){
    seconds = 0;
    minutes++;
  }
  if(minutes >= 60){
    minutes = 0;
    hours++;
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
