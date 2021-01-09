const $loginContainer = document.querySelector('.login_container');
const $gameboardContainer = document.querySelector('.gameboard_container');
const $loginForm = document.querySelector('.login_form');
const $nicknameInput = document.querySelector('.login_nickname');
const $passwordInput = document.querySelector('.login_password');
const $loginButton = document.querySelector('.login_button');
const $message = document.querySelector('.login_message');

const nickname = localStorage.getItem('nickname');
const password = localStorage.getItem('password');

function setNickname(nickname) {
    localStorage.setItem('nickname', nickname);
}

function setPassword(password) {
    localStorage.setItem('password', password);
}

function getInputValue() {
    const nickname = $nicknameInput.value;
    const password = $passwordInput.value;

    return {
        nickname,
        password,
    };
}

function handleLogin(e) {
    e.preventDefault();
    const inputObj = getInputValue();
    if (nickname && password) {
        if (nickname !== inputObj.nickname || password !== inputObj.password) {
            $message.textContent = 'Check your nickname or password 😱';
            return;
        }
    } else {
        setNickname(inputObj.nickname);
        setPassword(inputObj.password);
    }

    $loginContainer.classList.add('hidden');
    $gameboardContainer.classList.remove('hidden');
}

$loginForm.addEventListener('submit', handleLogin);
$loginButton.addEventListener('click', handleLogin);
