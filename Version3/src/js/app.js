import axios from 'axios';

(function () {
  let todos = [];
  let status = 'all';

  const todoUl = document.querySelector('#todo-list');
  const inputTodo = document.querySelector('#input-todo');
  const chkAllComple = document.querySelector('#chk-allComplete');
  const selectTodo = document.querySelector('.nav');
  const searchTodo = document.querySelector('#search-todo');
  const removeCompleted = document.querySelector('#btn-removeCompletedTodos');

  // 완료된 할일 수 반환
  const countComplete = function () {
    let completCount = 0;

    todos.forEach(item => {
      if (item.completed === true) completCount += 1;
    });

    return completCount;
  };

  const selectActive = function () {
    selectTodo.children.all.removeAttribute('class');
    selectTodo.children.completed.removeAttribute('class');
    selectTodo.children.active.removeAttribute('class');
    document.querySelector(`#${status}`).setAttribute('class', 'active');
  };

  const getData = function () {
    const messageTodo = document.querySelector('#message-todo');
    let todoInner = '';
    let arrayName;

    // 완료 상태
    if (status === 'completed') {
      status = 'completed';
      selectActive();

      arrayName = todos.filter(item => item.completed === true);

      // 미완료 상태
    } else if (status === 'active') {
      status = 'active';
      selectActive(status);

      arrayName = todos.filter(item => item.completed === false);

      // 자동 검색
    } else if (status === 'search') {
      // 정규 표현식 사용
      const regexr = new RegExp(searchTodo.value, 'ig');

      arrayName = todos.filter(item => regexr.test(item.content));

      if (!searchTodo.value) arrayName = todos;
    } else {
      status = 'all';
      selectActive(status);

      arrayName = todos;
    }

    // 리스트가 없을 시 메세지 보여주기
    if (!arrayName.length) {
      messageTodo.style.display = 'block';
    } else {
      messageTodo.style.display = 'none';
    }

    // 리스트 목록 출력
    arrayName.forEach(item => {
      const checkId = (item.completed) ? 'checked' : '';

      todoInner += `<li class="list-group-item">
                    <div class="hover-anchor">
                      <a class="hover-action text-muted">
                        <span class="glyphicon glyphicon-remove-circle pull-right" data-id="${item.id}"></span>
                      </a>
                      <label class="i-checks" for="${item.id}">
                        <input type="checkbox" id="${item.id}" + ${checkId} + "><i></i>
                        <span class="${checkId}"> ${item.content} </span>
                      </label>
                    </div>
                  </li>`;
    });

    todoUl.innerHTML = todoInner;
    document.querySelector('#completedTodos').innerHTML = `완료된 할일 :  ${countComplete()} 개`;
    document.querySelector('#activeTodos').innerHTML = todos.length - countComplete();
  };

  // loadData
  const loadData = function () {
    axios.get('/todos')
      .then(({ data }) => {
        todos = data;
        console.log('[GET]\n', todos);
        getData();
      })
      .catch(err => console.log(err.response));
  };

  // ID값 얻기
  const getId = function () {
    return todos.length ? Math.max.apply(null, todos.map(item => item.id)) + 1 : 1;
  };

  // 할일 추가
  const addTodo = function (event) {
    axios.post('/todos', { id: getId(), content: event.target.value, completed: false })
      .then(({ data }) => {
        inputTodo.value = '';
        console.log('[[ADD DATA]]');
        loadData();
      })
      .catch(err => console.log(err));
  };

  // 체크박스시 completed 값 반전시키기
  const chkChange = function (event) {
    const { completed } = todos.find(item => item.id === +event.target.id);

    axios.patch(`/todos/id/${event.target.id}`, { completed: !completed }) // payload: { completed }
      .then(({ data }) => {
        loadData();
        console.log('[[CHANGE COMPLETED]]', todos);
      })
      .catch(err => console.log(err));
  };

  const deleteCompleted = function () {
    axios.delete('/todos/completed')
      .then(({ data }) => console.log('성공'))
      .catch(err => console.log(err));
  };

  // 전체 선택 및 전체 해제
  const checkAll = function () {
    let compleData;
    if (countComplete() !== todos.length) {
      compleData = true;
    } else {
      compleData = false;
    }
    axios.patch('/todos', { completed: compleData }) // payload: { completed }
      .then(({ data }) => {
        loadData();
        console.log('[[CHANGE ALL]]', todos);
      })
      .catch(err => console.log(err));
  };

  // 할일 삭제
  const deleteTodo = function (event) {
    axios.delete(`/todos/id/${event.target.dataset.id}`)
      .then(({ data }) => console.log('[[DELETE COMPLETED]]', todos))
      .catch(err => console.log(err));
  };

  window.addEventListener('load', loadData);

  inputTodo.addEventListener('keyup', event => {
    if (event.keyCode === 13 && event.target.value) {
      addTodo(event);
    }
  });

  todoUl.addEventListener('click', event => {
    if (event.target.parentNode.nodeName === 'A') {
      deleteTodo(event);
      loadData();
    }
    if (event.target.nodeName === 'INPUT') {
      chkChange(event);
    }
  });

  selectTodo.addEventListener('click', event => {
    status = event.target.parentNode.id;
    getData();
  });

  chkAllComple.addEventListener('click', () => {
    checkAll();
    getData();
  });

  removeCompleted.addEventListener('click', () => {
    deleteCompleted();
    loadData();
  });

  searchTodo.addEventListener('keyup', () => {
    status = 'search';
    loadData();
  });
}(axios));
