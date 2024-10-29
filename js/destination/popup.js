const mainForm = document.getElementById('popupForm');
const innerForm = document.getElementById('popup-form');
const names = document.getElementById('name');
const email = document.getElementById('email');
const discountSection = document.querySelector('.discount');

const subscribeBtn = document.getElementById('discount-popup');
const popupCloseBtn = document.getElementById('popup-close-btn');
const overlay = document.getElementById('overlay');
const overlayAns = document.getElementById('overlay-ans');

const popupAnswer = document.getElementById('popup-answer');
const popupAnswerBtn = document.getElementById('popup-asnwer-close-btn');


const validateInputs = () => {
    const emailValue = email.value.trim();
    const nameValue = names.value.trim();

    if(validateEmail(emailValue) & validateName(nameValue)){ return true;}

    return false;
};

function showAnswer(){
    popupAnswer.classList.add('show');
    overlayAns.style.display = 'block';
 }

function closeDiscount(){
    discountSection.classList.add('remove');
}

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
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

function validateName(nameValue){
    if(nameValue === '') {
        setError(names, 'Name is required');
        return false;
    } else if(nameValue.length < 3) {
        setError(names, 'Your name length must be 3 or greater');
        return false;
    } else {
        removeError(names);
        return true;
    }
}


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

innerForm.addEventListener('submit', e => {
    e.preventDefault();
    if(validateInputs()){

        showAnswer();
    }
});

popupAnswerBtn.addEventListener('click', () => {
    popupAnswer.classList.remove('show');
    overlayAns.style.display = 'none';
    mainForm.classList.remove('show');
    overlay.style.display = 'none';
    closeDiscount();
});

overlayAns.addEventListener('click', () => {
    popupAnswer.classList.remove('show');
    overlayAns.style.display = 'none';
    mainForm.classList.remove('show');
    overlay.style.display = 'none';
    closeDiscount();
});

