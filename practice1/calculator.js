  var temp = 0;
  var num1 = 0;
  var input = true;
  var operator = '+';
  var equalop = '+';
  var answer = 0;

function number(numbtn) {
  if(input){
    document.getElementById("result").value = numbtn;
  } else{
    document.getElementById("result").value = document.getElementById("result").value + numbtn;
  }
  input = false;
}

 function dot() {
    temp=document.getElementById("result").value
      if (temp.indexOf('.')==-1){
        document.getElementById("result").value=document.getElementById("result").value+".";
    }
  }

function opButton(opbtn) { 
   if(input === false){
      num1 =  document.getElementById("result").value;
      answer = answer +'';
      if((opbtn != '=') ){
        if(answer == ''){
          answer =eval('answer+num1');
          document.getElementById("result").value = answer;
        } else {
          answer =eval(answer + operator + num1);
          document.getElementById("result").value = answer;
        }
        operator = opbtn;
        input = true;
    } else if(opbtn === '=')  {
        answer =eval(answer + equalop + num1);
        document.getElementById("result").value = answer;
        answer = '';
        input = false;
      }
   }
  equalop = operator;
  operator = opbtn;
}

function clearall(){
  num1 = 0;
  operator = '+';
  equalop = '+';
  answer = 0;
  clearone();
}

function clearone(){
  document.getElementById("result").value='0';
  input=true;
}
