const todoForm = document.querySelector('.todoForm');
const todoInput = document.querySelector('.todoForm .input');
const todoList = document.querySelector('.todoList');

const KEY_TODO = 'dotoItem'

let todoItmes = [];

function initSaveTodo(){
    localStorage.setItem(KEY_TODO, JSON.stringify(todoItmes));
}

function deleteTodo(e){
    const li = e.target.parentElement;
    li.remove();
    todoItmes = todoItmes.filter((element) => element.id !== parseInt(li.id));
    initSaveTodo();
}

function initSetTodo(setTodo){
    const li = document.createElement('li');
    li.id = setTodo.id;
    const span = document.createElement('span');
    span.innerText = setTodo.text;
    const button = document.createElement('button');
    button.addEventListener('click', deleteTodo);
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
    };
    todoItmes.push(setTodoObj);
    initSetTodo(setTodoObj);
    initSaveTodo();
}

todoForm.addEventListener('submit', initTodoList)

const initTodoItem = localStorage.getItem(KEY_TODO);

if(initTodoItem !== null){
    const parsedTodo = JSON.parse(initTodoItem);
    totoItem = parsedTodo;
    parsedTodo.forEach(initSetTodo);
}