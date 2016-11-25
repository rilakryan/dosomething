var todos = new Array();
var mode = 1;

  function todo(todoText ) {
    this.todoText = todoText;
    this.completed = false;
  }

  function addTodo (todoText) {
    todos.push(new todo(todoText));
  }

   function changeTodo(position, todoText) {
    todos[position].todoText = todoText;
    displayTodos();
  }

   function deleteTodo(position) {
    todos.splice(position, 1);
    displayTodos();
  }

   function toggleCompleted(position) {
    var todo = todos[position];
    todo.completed = !todo.completed;
    displayTodos();
  }

   function toggleAll() {
    var totalTodos = todos.length;
    var completedTodos = 0;
    // 計算todo完成的數量
    for (var i = 0; i < totalTodos; i++) {
      if (todos[i].completed === true) {
        completedTodos++;
      }
    }
    /*if (completedTodos === totalTodos) {
      for (var i = 0; i < totalTodos; i++) {
        todos[i].completed = false;
      }
    } else {
      for (var i = 0; i < totalTodos; i++) {
        todos[i].completed = true;
      }
    }*/
    //如果todo完成數與todo數量相同，若全部都是ture,則變成false
    //如果不是全部都true，就變成true
    for (var i = 0; i < totalTodos; i++ ) {
      if (completedTodos === totalTodos) {
        todos[i].completed = false;
      }
      else {
        todos[i].completed = true;
      }
    }
    displayTodos();
  }



  function displayTodos() {
    //檢查未完成的數量
   createItemLeftClearCompleted();
   //從local storage存入
   savetolocalStorage();
    //選擇ul放入li,div,checkbox textcontent deletebutton
    var todosUl = document.querySelector('ul');
    //接著清空ul，根據目前的mode判斷要顯示那些todo
    todosUl.innerHTML = '';
    for (var i = 0; i < todos.length; i++) {
      if (mode === 1) {//mode:1 是 show all
        var todoLi = document.createElement('li');
        todoLi.className = "clear";
        //新增label放入todotext
        var cTodotext = document.createElement("label");
        cTodotext.className = 'showtext';
        cTodotext.textContent = todos[i].todoText;
        //若是完成就給刪除線和透明度
          if (todos[i].completed === true) {
            cTodotext.style.textDecoration = 'line-through';
            cTodotext.style.opacity = '0.3';
          }
        //新增checkbox
        var togglecheckbox = document.createElement("button");
        togglecheckbox.className = 'togglecheckbox';
        //若是完成就給打勾的圖示
        if (todos[i].completed === true) {
          togglecheckbox.textContent="\u2714";
        }
        else {
          togglecheckbox.textContent="";
        }
        //Ul最外層，Li第二層，，Li0是checkbox，Li1是todotext，Li2是deletebutton
        todosUl.appendChild(todoLi);

        todoLi.appendChild(togglecheckbox);
        todoLi.appendChild(cTodotext);
        todoLi.appendChild(createDeleteButton());

        todoLi.id = i;
      }
      //mode:2是 show active completed = false 未完成的
      else if (mode == 2 && todos[i].completed == false) {
        var todoLi = document.createElement('li');
        todoLi.className = "clear";

        //新增label放入todotext
        var cTodotext = document.createElement("label");
        cTodotext.className = 'showtext';
        cTodotext.textContent = todos[i].todoText;
        //若是完成就給刪除線和透明度
        if (todos[i].completed === true) {
          cTodotext.style.textDecoration = 'line-through';
          cTodotext.style.opacity = '0.3';
          }
        //新增checkbox
        var togglecheckbox = document.createElement("button");
        togglecheckbox.className = 'togglecheckbox';
        //若是完成就給打勾的圖示
          if (todos[i].completed === true) {
            togglecheckbox.textContent="\u2714";
          }
          else {
            togglecheckbox.textContent="";
          }
        //Ul最外層，Li第二層，，Li0是checkbox，Li1是todotext，Li2是deletebutton
        todosUl.appendChild(todoLi);

        todoLi.appendChild(togglecheckbox);
        todoLi.appendChild(cTodotext);
        todoLi.appendChild(createDeleteButton());

        todoLi.id = i;
      }
      //mode:3是 show complete completed = true 已完成的
      else if (mode == 3 && todos[i].completed == true) {
        var todoLi = document.createElement('li');
        todoLi.className = "clear";

        //新增label放入todotext
        var cTodotext = document.createElement("label");
        cTodotext.className = 'showtext';
        cTodotext.textContent = todos[i].todoText;
        //若是完成就給刪除線和透明度
        if (todos[i].completed === true) {
          cTodotext.style.textDecoration = 'line-through';
          cTodotext.style.opacity = '0.3';
        }
        //新增checkbox
        var togglecheckbox = document.createElement("button");
        togglecheckbox.className = 'togglecheckbox';
        //若是完成就給打勾的圖示
        if (todos[i].completed === true) {
          togglecheckbox.textContent="\u2714";
        }
        else {
          togglecheckbox.textContent="";
        }
        //Ul最外層，Li第二層，，Li0是checkbox，Li1是todotext，Li2是deletebutton
        todosUl.appendChild(todoLi);

        todoLi.appendChild(togglecheckbox);
        todoLi.appendChild(cTodotext);
        todoLi.appendChild(createDeleteButton());

        todoLi.id = i;
      }
    }
  }
  /*********************************************************
  *
  * button 選擇 all active completed 切換mode，顯示為哪種模式
  ***********************************************************/
  function displayTodosAll() {
    document.getElementById('All').style.border = "2px solid rgba(255, 87, 34, 0.36)";
    document.getElementById('Active').style.border = "";
    document.getElementById('Completed').style.border = "";
    mode = 1 ;
    displayTodos();
  }

  function displayTodosActive() {
    document.getElementById('All').style.border = "";
    document.getElementById('Active').style.border = "2px solid rgba(255, 87, 34, 0.36)";
    document.getElementById('Completed').style.border = "";
    mode = 2 ;
    displayTodos();
  }

  function displayTodosCompleted() {
    document.getElementById('All').style.border = "";
    document.getElementById('Active').style.border = "";
    document.getElementById('Completed').style.border = "2px solid rgba(255, 87, 34, 0.36)";
    mode = 3 ;
    displayTodos();
  }
  /******************************
  *
  *   產生deletebutton 放入 DOM中
  *******************************/
  function createDeleteButton() {
    var deleteButton =document.createElement('button');
    deleteButton.textContent = '\u2716';
    deleteButton.className = 'deleteButton';
    return deleteButton;
  }
/******************
 * itemleft
 * clear completed
 *****************/
  function createItemLeftClearCompleted() {
    var itemLeft = document.querySelector('#itemLeft');
    var clearCompleted = document.querySelector("#clearCompleted");
    var toggleAllbutton = document.querySelector("#toggleAll");
    var countleft = 0;
    var countcompleted = 0;
    //顯示itemleft
    for (var i = 0; i < todos.length; i++) {
      if (todos[i].completed === false) {
        countleft++;
      }
      else {
        countcompleted++;
      }
    }
    itemLeft.textContent = countleft+' items left';
    //顯示clearCompleted
    if (countcompleted > 0) {
      clearCompleted.style.display = 'inline';
    }
    else {
     clearCompleted.style.display = 'none';
   //顯示toggleAllbutton完成的圖示
    }
    if ((todos.length ===0) ||(countcompleted !== todos.length)) {
      toggleAllbutton.textContent ="";
    }
    else {
      toggleAllbutton.textContent ="\u2714";
    }
  }

  /***********************************************************
  *刪除已完成todo
  *如果有刪除就不改變目前array[]，因為刪除會造成array[]值的變動
  ************************************************************/
  function createclearCompleted() {
    var position = 0;
    while(position < todos.length) {
      if(todos[position].completed === true) {
        deleteTodo(position);
      }
      else {
        position++;
      }
    }
  }
/************************************************
*
*滑鼠點擊checkbox，delete，新增todo，修改todo內容
* **********************************************/
  function setUpEventListeners() {
    var todosUl = document.querySelector('ul');
    todosUl.addEventListener('click', function(event) {
      //滑鼠點擊
      //console.log(event);
      var elementClicked = event.target;
      position =parseInt(elementClicked.parentNode.id);//string轉數字
      //點選刪除鍵，就刪除
      if(elementClicked.className === 'deleteButton') {
        deleteTodo(position);
      }
      //點選checkbox，就完成
      if(elementClicked.className ==='togglecheckbox') {
        toggleCompleted(position);
      }
    });
    //輸入
    var addTodoTextInput = document.querySelector('#addTodoTextInput');
    addTodoTextInput.addEventListener('keydown', function(event){
      //按Enter(keyCode:13)會輸入，並且string不是空白的才輸入
      if ((event.keyCode == 13) && (addTodoTextInput.value) !== '') {
        addTodo(addTodoTextInput.value); //addTodoTextInput.value輸入到array
        addTodoTextInput.value = '';  //輸入完後把addTodoTextInput清空為空白
      }
      displayTodos();
    });
    //滑鼠雙擊dblclick改變已存在的todo
    todosUl.addEventListener('dblclick', function(event) {
      var elementClicked = event.target;
      var position =parseInt(elementClicked.parentNode.id);
      if (elementClicked.className === 'showtext') {
        var edittext = document.createElement("input");
        edittext.className = 'edittext';
        edittext.value =  todos[position].todoText;
        elementClicked.parentNode.replaceChild(edittext, elementClicked.parentNode.childNodes[1]);//讓input text顯示出來
        edittext.focus();//要先focus才能blur
        //若輸入的值非空值，按下enter鍵或是滑鼠點選其他地方輸入框就會消失
        if (edittext.value!=='') {
          edittext.addEventListener('keydown', function(event) {
            if ((event.keyCode == 13) && (edittext.value) !== '') {//若不是空值，改變todo的內容
              changeTodo(position ,edittext.value);
            }
            else if ((event.keyCode == 13) && (edittext.value) == '') {//若是空值則刪除。
              deleteTodo(position);
            }
          });
          //按下點選非輸入框的區域後
          edittext.addEventListener('blur', function(event) {
            if (edittext.value!== '') {//若不是空值，改變todo的內容
              changeTodo(position ,edittext.value);
            }
            else if (edittext.value == '') {//若是空值則刪除。
              deleteTodo(position);
            }
          });
        }
      }
    });
  }
setUpEventListeners();
/*********************
*
*localStorage 儲存todo
 **********************/
window.addEventListener("load", function(event) {
  //load完之後判斷localStorage有沒有東西，如果有就載入，沒有就新增一個todos array
  if (localStorage.length === 0) {
    var todos = new Array();
  }
  else {
    loadtolocalStorage();
  }
  displayTodos();
});

//將todos存入localStorage，需轉為String
function savetolocalStorage() {
  var todosJson = JSON.stringify(todos);
  localStorage.setItem("todos", todosJson);
}
//從localStorage載入todos，從string轉回object
function loadtolocalStorage() {
  var newtodosJSON = localStorage.getItem("todos");
  var newtodosObject = JSON.parse(newtodosJSON);
  todos = newtodosObject;
}


