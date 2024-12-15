
const todoForm = document.querySelector('.todoForm');
const todoInput = todoForm.querySelector('.input');
const todoList = document.querySelector('.todoList');

const KEY_TOTOS = 'todos'

let todoItems = [];

function initSaveTodo(){
    localStorage.setItem(KEY_TOTOS, JSON.stringify(todoItems));
}

function initDelTodo(e){
    const li = e.target.parentElement;
    li.remove();
    todoItems = todoItems.filter((element)=>element.id !== parseInt(li.id));
    initSaveTodo();
}

function initSetTodo(setTodo){
    const li = document.createElement('li');
    li.id = setTodo.id;
    const span = document.createElement('span');
    span.innerText = setTodo.text;
    const button = document.createElement('button');
    button.addEventListener('click', initDelTodo);
    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
}

function initTodoList(e){
    e.preventDefault();
    const setTodo = todoInput.value;
    todoInput.value = '';
    const setTodoObj = {
        text : setTodo,
        id : Date.now(),
    }
    todoItems.push(setTodoObj);
    initSetTodo(setTodoObj);
    initSaveTodo();
}


todoForm.addEventListener('submit', initTodoList);

const initSavedTodo = localStorage.getItem(KEY_TOTOS);

if(initSavedTodo !== null){
    const parsedTodos = JSON.parse(initSavedTodo);
    todoItems = parsedTodos;
    parsedTodos.forEach(initSetTodo);
}