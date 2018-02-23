var todos = [ { id: 0, content : 123, completed : true },
              { id: 1, content : 'qwer', completed: false },
              { id: 2, content : 'zcxv', completed: true },
              { id: 3, content : 1111, completed : true}];

var todoUl = document.querySelector('#todo-list');
var inputTodo = document.querySelector('#input-todo');
var buttonAll = document.querySelector('#button-todo');
var completeAll = document.querySelector('#count-all');
var selectTodo = document.querySelector('#select-todo');

window.addEventListener('load', function () {
  loadData();
});

inputTodo.addEventListener('keyup', function (event) {
  if (event.keyCode === 13) {
    addTodo(event);
    loadData();
  }
});

todoUl.addEventListener('click', function (event) {
  if (event.target.parentNode.nodeName === 'A') {
    deleteTodo(event);
    loadData();
  }
  if (event.target.nodeName === 'INPUT') {
    chkChange(event);
    if (selectTodo.value === 'comple') {
      loadData('comple');
    } else if ( selectTodo.value === 'uncomple' ) {
      (countComplete() === 0) ? loadData('comple') :loadData('uncomple');
    } else {
      loadData();
    }
  }
});

buttonAll.addEventListener('click', function(){
  checkAll();
  loadData();
});

selectTodo.addEventListener('click', function (event) {
  loadData(event.target.value);
});

function checkAll(){
  if (countComplete() !== todos.length) {
    todos.forEach(function (item) {
      return item.completed = true;
    });
  } else {
    todos.forEach(function (item) {
      return item.completed = false;
    });
  }
}

function countComplete(){
  var completCount = 0;

  todos.forEach(function (item) {
    if (item.completed === true) completCount++;
  });

  return completCount;
}


function loadData(filter){
  var todoInner = '';
  var arrayName;
  console.log(filter);

  if (filter === 'comple') {
    arrayName = todos.filter( function (item) {
      return item.completed === true;
    });
    selectTodo.value = 'comple';
  } else if (filter === 'uncomple') {
    arrayName = todos.filter(function (item) {
      return item.completed === false;
    });
    selectTodo.value = 'uncomple';
  } else {
    arrayName = todos;
    selectTodo.value = 'all';
  }

  arrayName.map(function (item) {
    var checkId = (item.completed) ? 'checked' : '';

    todoInner += '<li class="list-group-item">';
    todoInner += '<div class="hover-anchor">';
    todoInner += '<a class="hover-action text-muted">';
    todoInner += '<span class="glyphicon glyphicon-remove-circle pull-right" data-id="' + item.id +'"></span>';
    todoInner += '</a>';
    todoInner += '<label class="i-checks" for="' + item.id +'">';
    todoInner += '<input type="checkbox" id="' + item.id + '"' + checkId +'><i></i>';
    todoInner += '<span>' + item.content + '</span>';
    todoInner += '</label>';
    todoInner += '</div>';
    todoInner += '</li>';
  });

  todoUl.innerHTML = todoInner;
  completeAll.innerHTML = '완료된 할일 : ' + countComplete() + '개';
}

function getId(){
  return todos.length ? Math.max.apply(null, todos.map( function (item){
    return item.id;
  })) + 1 : 1;
}

function addTodo(event){
  todos = todos.concat([{ id: getId(), content: event.target.value, completed: false }]);
  inputTodo.value = '';
  console.log('[[ADD DATA]] :', todos);
}

function deleteTodo(event){
  todos = todos.filter(function (item) {
    return item.id !== Number.parseInt(event.target.dataset.id);
  });
  console.log('[[DELETE COMPLETED]]', todos);
}

function chkChange(event){
  todos.forEach(function (item) {
    if (item.id === Number.parseInt(event.target.id)) item.completed = !item.completed;
  });
  console.log('[[CHANGE COMPLETED]]', todos);
}


