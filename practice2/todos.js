

var todoList = {
  todos: [],
  mode: 1,
  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
  },
  changeTodo: function(position, todoText) {
    this.todos[position].todoText = todoText;
    view.displayTodos();
  },
  deleteTodo: function(position) {
    this.todos.splice(position, 1);
    view.displayTodos();
  },
  //是否完成
  toggleCompleted: function(position) {
    var todo = this.todos[position];
    todo.completed = !todo.completed;
    view.displayTodos();
  },
  //全部完成
  toggleAll: function() {
    var totalTodos = this.todos.length;
    var completedTodos = 0;
    // 得到完成的數量
    for (var i = 0; i < totalTodos; i++) {
      if (this.todos[i].completed === true) {
        completedTodos++;
      }
    }
    //如果全部都是ture,就變成false
    if (completedTodos === totalTodos) {
      for (var i = 0; i < totalTodos; i++) {
        this.todos[i].completed = false;
      }
    //如果不是全部都true，就變成true
    } else {
      for (var i = 0; i < totalTodos; i++) {
        this.todos[i].completed = true;
      }
    }
    view.displayTodos();
  },
};

var view = {
  displayTodos: function() {
    /////檢查未完成的數量///////////////
   this.createItemLeftClearCompleted();
   //saveToStorage();
    /////////選擇ul放入li,div,checkbox textcontent deletebutton
    var todosUl = document.querySelector('ul');
    todosUl.innerHTML = '';
    for (var i = 0; i < todoList.todos.length; i++) {
      if (todoList.mode === 1){////////////////mode:1 是 show all
        var todoLi = document.createElement('li');
        todoLi.className = "clear";
        /////新增label放入todotext
        var cTodotext = document.createElement("label");
        cTodotext.className = 'showtext';
        cTodotext.textContent = todoList.todos[i].todoText;
        //若是完成就給刪除線和透明度
          if (todoList.todos[i].completed === true) {
            cTodotext.style.textDecoration = 'line-through';
            cTodotext.style.opacity = '0.3';
          }
        //新增checkbox
        var togglecheckbox = document.createElement("button");
        togglecheckbox.className = 'togglecheckbox';
        //若是完成就給打勾的圖示
        if(todoList.todos[i].completed === true){
          togglecheckbox.textContent="\u2714";
        }
        else{
          togglecheckbox.textContent="";
        }
        ///Ul最外層，Li第二層，，Li0是checkbox，Li1是todotext，Li2是deletebutton
        todosUl.appendChild(todoLi);

        todoLi.appendChild(togglecheckbox);
        todoLi.appendChild(cTodotext);
        todoLi.appendChild(this.createDeleteButton());

        todoLi.id = i;
      }
      else if(todoList.mode == 2 && todoList.todos[i].completed == false){//mode:2是 show active completed = false 未完成的
        var todoLi = document.createElement('li');
        todoLi.className = "clear";

        /////新增label放入todotext
        var cTodotext = document.createElement("label");
        cTodotext.className = 'showtext';
        cTodotext.textContent = todoList.todos[i].todoText;
        //若是完成就給刪除線和透明度
        if (todoList.todos[i].completed === true) {
          cTodotext.style.textDecoration = 'line-through';
          cTodotext.style.opacity = '0.3';
          }
        //新增checkbox
        var togglecheckbox = document.createElement("button");
        togglecheckbox.className = 'togglecheckbox';
        //若是完成就給打勾的圖示
          if(todoList.todos[i].completed === true){
            togglecheckbox.textContent="\u2714";
          }
          else{
            togglecheckbox.textContent="";
          }
        ///Ul最外層，Li第二層，，Li0是checkbox，Li1是todotext，Li2是deletebutton
        todosUl.appendChild(todoLi);

        todoLi.appendChild(togglecheckbox);
        todoLi.appendChild(cTodotext);
        todoLi.appendChild(this.createDeleteButton());

        todoLi.id = i;
      }
      else if(todoList.mode == 3 && todoList.todos[i].completed == true){//mode:3是 show complete completed = true 已完成的
        var todoLi = document.createElement('li');
        todoLi.className = "clear";

        /////新增label放入todotext
        var cTodotext = document.createElement("label");
        cTodotext.className = 'showtext';
        cTodotext.textContent = todoList.todos[i].todoText;
        //若是完成就給刪除線和透明度
        if (todoList.todos[i].completed === true) {
          cTodotext.style.textDecoration = 'line-through';
          cTodotext.style.opacity = '0.3';
        }
        //新增checkbox
        var togglecheckbox = document.createElement("button");
        togglecheckbox.className = 'togglecheckbox';
        //若是完成就給打勾的圖示
        if(todoList.todos[i].completed === true){
          togglecheckbox.textContent="\u2714";
        }
        else{
          togglecheckbox.textContent="";
        }
        ///Ul最外層，Li第二層，，Li0是checkbox，Li1是todotext，Li2是deletebutton
        todosUl.appendChild(todoLi);

        todoLi.appendChild(togglecheckbox);
        todoLi.appendChild(cTodotext);
        todoLi.appendChild(this.createDeleteButton());

        todoLi.id = i;
      }
    }
  },
  /************************************
  *
  * button 選擇 all active completed 切換 mode
   **************************************/
  displayTodosAll: function() {
    document.getElementById('All').style.border = "2px solid rgba(255, 87, 34, 0.36)";
    document.getElementById('Active').style.border = "";
    document.getElementById('Completed').style.border = "";
    todoList.mode = 1 ;
    view.displayTodos();
  },

  displayTodosActive: function() {
    document.getElementById('All').style.border = "";
    document.getElementById('Active').style.border = "2px solid rgba(255, 87, 34, 0.36)";
    document.getElementById('Completed').style.border = "";
    todoList.mode = 2 ;
    view.displayTodos();
  },

   displayTodosCompleted: function() {
    document.getElementById('All').style.border = "";
    document.getElementById('Active').style.border = "";
    document.getElementById('Completed').style.border = "2px solid rgba(255, 87, 34, 0.36)";
    todoList.mode = 3 ;
    view.displayTodos();
  },
  /*********************************
  *
  *   產生deletebutton 放入 DOM中
  ***********************************/
  createDeleteButton: function(){
    var deleteButton =document.createElement('button');
    deleteButton.textContent = '\u2716';
    deleteButton.className = 'deleteButton';
    return deleteButton;
  },
/***************************************
 * itemleft
 * clear completed
 *******************************/
  createItemLeftClearCompleted: function(){
    var itemLeft = document.querySelector('#itemLeft');
    var clearCompleted = document.querySelector("#clearCompleted");
    var toggleAllbutton = document.querySelector("#toggleAll");
    var countleft = 0 ;
    var countcompleted = 0 ;
    /*****************顯示itemleft**********************/
    for(var i = 0; i < todoList.todos.length; i++){
      if(todoList.todos[i].completed === false){
        countleft++;
      }
      else{
        countcompleted++;
      }
    }
    itemLeft.textContent = countleft+' items left';
    /***************顯示clearCompleted**********/
    if(countcompleted > 0){
      clearCompleted.style.display = 'inline';
    }
    else {
     clearCompleted.style.display = 'none';
   /******************顯示toggleAllbutton完成的圖示*********/
    }
    if((todoList.todos.length ===0) ||(countcompleted !== todoList.todos.length)){
      toggleAllbutton.textContent ="";
    }
    else{
      toggleAllbutton.textContent ="\u2714";
    }
  },
  /****找出需要刪除的完成todo*****/
  createclearCompleted: function(){
    var position = 0;
    while(position < todoList.todos.length){
      if(todoList.todos[position].completed === true){
        todoList.deleteTodo(position);
      }
      else{
        position++;
      }
    }
  },

  setUpEventListeners: function(){
    var todosUl = document.querySelector('ul');
    todosUl.addEventListener('click', function(event){
      //滑鼠點擊
      //console.log(event);
      var elementClicked = event.target;
      position =parseInt(elementClicked.parentNode.id);//string轉數字
      //點選刪除鍵，就刪除
      if(elementClicked.className === 'deleteButton'){
        todoList.deleteTodo(position);
      }
      //點選checkbox，就完成
      if(elementClicked.className ==='togglecheckbox'){
        todoList.toggleCompleted(position);
      }
    });
    /*************輸入*************************/
    var addTodoTextInput = document.querySelector('#addTodoTextInput');
    addTodoTextInput.addEventListener('keydown', function(event){
      //按Enter(keyCode:13)會輸入，並且string不是空白的才輸入
      if ((event.keyCode == 13) && (addTodoTextInput.value) !== '') {
        todoList.addTodo(addTodoTextInput.value); // addTodoTextInput.value輸入到array
        addTodoTextInput.value = '';        // 輸入完後把addTodoTextInput清空為空白
      }
      view.displayTodos();
    });
    /**********滑鼠雙擊dblclick改變已存在的todo**********************/
    todosUl.addEventListener('dblclick', function(event){
      var elementClicked = event.target;
      var position =parseInt(elementClicked.parentNode.id);
      if(elementClicked.className === 'showtext'){
        var edittext = document.createElement("input");
        edittext.className = 'edittext';
        edittext.value =  todoList.todos[position].todoText;
        elementClicked.parentNode.replaceChild(edittext, elementClicked.parentNode.childNodes[1]);//讓input text顯示出來
        edittext.focus();/****要先focus才能blur**************/
        if(edittext.value!==''){//若輸入的值非空值，按下enter鍵或是滑鼠點選其他地方輸入框就會消失
          edittext.addEventListener('keydown', function(event){
            if((event.keyCode == 13) && (edittext.value) !== ''){//若不是空值，改變todo的內容
              todoList.changeTodo(position ,edittext.value);
            }
            else if((event.keyCode == 13) && (edittext.value) == ''){//若是空值則刪除。
              todoList.deleteTodo(position);
            }
          });
          edittext.addEventListener('blur', function(event){//按下點選非輸入框的區域後
            if(edittext.value!== ''){//若不是空值，改變todo的內容
              todoList.changeTodo(position ,edittext.value);
            }
            else if(edittext.value == ''){//若是空值則刪除。
              todoList.deleteTodo(position);
            }
          });
        }
      }
    });
  }
};
view.setUpEventListeners();
