const loginForm = document.querySelector('.loginForm');
const loginInput = document.querySelector('.loginForm .input');
const userName = document.querySelector('.userName');

const CLASSNAME_HIDDEN = 'hidden';
const KEY_USERNAME = 'userName';

function initLogin(e){
    e.preventDefault();
    loginForm.classList.add(CLASSNAME_HIDDEN);
    const userVal = loginInput.value;
    localStorage.setItem(KEY_USERNAME, userVal);
    initUserName(userVal);

}

function initUserName(userVal){
    userName.innerText = `${userVal}! Have a Good day :)`
    userName.classList.remove(CLASSNAME_HIDDEN);
}

const initHasUserName = localStorage.getItem(KEY_USERNAME);

if(initHasUserName !== null){
    initUserName(initHasUserName);
}else{
    loginForm.classList.remove(CLASSNAME_HIDDEN);
    loginForm.addEventListener('submit', initLogin);
}
