const form = document.getElementById('loginForm');
const email = document.getElementById('email');
const password = document.getElementById('password1');
const errorMessage = document.getElementById('error-message');

form.addEventListener('submit', e => {
    e.preventDefault();
    let popupTimeout = 4000;

    if(validateInputs()){
        let res = checkUser(email.value, password.value);

        if(res >= 0){
            loginUser(res);
            window.location.href = "profile.html";
        } else{
            let msg;

            if(res === -1){ msg = "<h3>User not found! Please, sign up!</h3>" }
            else if(res === -2){ msg = "<h3>Invalid login or password!</h3>" }
            else { msg = "<h3>Unknown error!</h3>" }

            errorMessage.style.display = 'block';
            errorMessage.innerHTML = msg;
            setTimeout(() => { errorMessage.style.display = 'none'; }, popupTimeout);
        }
    }
});

const validateInputs = () => {
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if(validateEmail(emailValue) & validatePassword(passwordValue)){ return true;}

    return false;
};

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
}

const removeError = element =>{
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.remove('error');
}

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function validateEmail(emailValue){
    if(emailValue === '') {
        setError(email, 'Email is required');
        return false;
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
        return false;
    } else {
        removeError(email);
        return true;
    }
}

function validatePassword(passwordValue){
    if(passwordValue === '') {
        setError(password, 'Write password');
        return false;
    } else {
        removeError(password);
        return true;
    }
}

function loginUser(userId) {
    localStorage.setItem("activeUserId", userId);
    localStorage.setItem("loggedin", true);
    clearForm();
}


function checkUser(email, password){
    let userList = JSON.parse(localStorage.getItem("userList"));
    

    if(userList === null || userList.length === 0){
        return -1; // User is not found!
    } else {
        for(let i = 0; i < userList.length; i++){
            let user = userList[i];
            if(email === user.email){
                if(password !== user.password){
                    return -2; // Invalid password
                } else {return user.id;}
            } 
        }
        return -1; // User is not found!
    }
}

function clearForm(){
    document.querySelectorAll("input").forEach((element) => {
        localStorage.removeItem(element.id);
        element.value = "";
    }
)};