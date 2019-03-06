var fques = 0;
var ques;
var check;

function checkAns(x){
  if(x == check){
    document.getElementById("correct").innerHTML = "Correct!";
  }else{
    document.getElementById("correct").innerHTML = "False!";
  }
}

function question(){
    if(fques == 0){
      genquest();
      genansw();
      fques = 1;
    }else{

    }
}

function timer(){
}

function genquest(){
  ques = genopp();
  document.getElementById("quest").innerHTML = ques;
}

function genansw(){
  let answer = eval(ques);
  let ans1 = eval(genopp());
  let ans2 = eval(genopp());
  let ans3 = eval(genopp());
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
