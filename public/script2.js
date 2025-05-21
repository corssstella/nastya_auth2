let login = document.getElementById('login-input');
let password = document.getElementById('password-input');
let under_password = document.getElementById('under_password-error');
let under_login = document.getElementById('under_login-error');
let auth_error = document.getElementById('auth-error_top');
let button = document.getElementById('auth-button_btn');
console.log(login, password)

let flag = true;


function error_windowVisible(){
    auth_error.innerText = 'Вы неправильно ввели логин или пароль'
    auth_error.style.backgroundColor = 'red'
    auth_error.style.opacity = '1';
}

function error_windowUnvisible(){
    auth_error.style.opacity = '0';
}

function succesful_authVisible(){
    auth_error.innerText = 'Вы успешно авторизованы.'
    auth_error.style.backgroundColor = 'green';
    auth_error.style.opacity = '1';
}

function succesful_authUnvisible(){
    auth_error.style.opacity = '0';
}

function clearValue(){
    login.value=''
    password.value=''
}

const errors = {
    login_error: false,
    password_error: false,
    auth_wrong: false
}

function validate(){
    if (errors.login_error){
        under_login.innerText='Вы не ввели логин.'
    }else{
        under_login.innerText=''
    }
    if (errors.password_error){
        under_password.innerText='Вы не ввели пароль.'
    }else{
        under_password.innerText=''
    }
    if(errors.auth_wrong){
        error_windowVisible()
        setTimeout(error_windowUnvisible, 2000);

    }else{
        succesful_authVisible()
        setTimeout(succesful_authUnvisible, 2000);
        clearValue()
        setTimeout(function() {
            window.location.href = '/second';
        }, 2000);
    }
    errors.login_error = false
    errors.password_error = false
    errors.auth_wrong = false
    log_flag = false
}


button.addEventListener('click', loginbtn)
let log_flag = false
function loginbtn(){
    console.log(login.value, password.value)
    if(login.value === ''){
        errors.login_error = true
    }
    if(password.value === ''){
        errors.password_error = true
    }
    for(let user of users){
        if(user.login === login.value && user.password === password.value){
            errors.auth_wrong = false
            log_flag = true
        }else{
            if(!log_flag){
            errors.auth_wrong = true
            }
        }
    }

    validate()
}