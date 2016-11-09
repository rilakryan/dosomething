  var temp = 0;
  var num1 = 0;
  var input = true;
  var operator = '+';
  var equalop = '+';
  var answer = 0;

function number(numbtn) {
  if(input){//若為true 則第一個數字進來  ex:9
    document.getElementById("result").value = numbtn;
  } else{// false 9.9
    document.getElementById("result").value = document.getElementById("result").value + numbtn;
  }
  input = false;//若有第一個數字就改為false
}

 function dot() {
    temp=document.getElementById("result").value
    if (temp.indexOf('.')==-1){ //若沒有 . 則可以輸入 .
      document.getElementById("result").value=document.getElementById("result").value+".";
    }
  }
/**************
*運算輸入
* 1.若第一次輸入運算，且運算輸入的不是等號，把目前顯示的值為num1 ex 9 與 ans = 0  做一次相加，得到ans，輸入的opbtn運算符號交給operator準備做運算，input變為true可輸入數字。
* 2.因為answer有值，所以使用operator做運算
* ------
* 若第一次輸入為等號則強制使用預設operator做加法得到ans的值。
* --------
* 若輸入等號則使用上次輸入的運算符號 opbtn-->operator-->equalop  做運算。算完清空ans 和改變input。
* ********************/
function opButton(opbtn) {
   if(input === false){
      num1 =  document.getElementById("result").value;
      answer = answer +'';
      if((opbtn != '=') ) {
        if(answer == '') {
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
