const mainForm = document.getElementById('popupForm');
const innerForm = document.getElementById('popup-form');
const popupAnswer = document.getElementById('');
const names = document.getElementById('name');
const email = document.getElementById('email');
const discountSection = document.querySelector('.discount');

const subscribeBtn = document.getElementById('discount-popup');
const popupCloseBtn = document.getElementById('popup-close-btn');
const overlay = document.getElementById('overlay');

subscribeBtn.addEventListener('click', function () {
    mainForm.classList.toggle('show');
    overlay.style.display = 'block';
});

popupCloseBtn.addEventListener('click', function () {
    mainForm.classList.toggle('show');
    overlay.style.display = 'none';
});

overlay.addEventListener('click', function () {
    mainForm.classList.toggle('show');
    overlay.style.display = 'none';
});


const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

innerForm.addEventListener('submit', e => {
    e.preventDefault();

    if(validateInputs()){
        showAnswer();
        closeDiscount();
    }
});

function showAnswer(){

}

function closeDiscount(){
    discountSection.classList.add('remove');
}

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const emailValue = email.value.trim();
    const nameValue = names.value.trim();

    if(validateEmail(emailValue) && validateName(nameValue)){ return true;}

    return false;
};

function validateEmail(emailValue){
    if(emailValue === '') {
        setError(email, 'Email is required');
        return false;
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
        return false;
    } else {
        setSuccess(email);
        return true;
    }
}

function validateName(nameValue){
    if(nameValue === '') {
        setError(names, 'Name is required');
        return false;
    } else if(nameValue.length < 3) {
        setError(names, 'Your name length must be 3 or greater');
        return false;
    } else {
        setSuccess(names);
        return false;
    }
}
