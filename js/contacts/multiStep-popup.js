const popupForm = document.getElementById('popupForm');
const overlay = document.getElementById('overlay');
const openButton = document.getElementById('popup-open-btn');
const closeButton = document.getElementById('popup-close-btn');

const formSteps = document.querySelectorAll('.form-step');
const nextBtns = document.querySelectorAll('.next-btn');
const prevBtns = document.querySelectorAll('.prev-btn');

const popupAnswer = document.getElementById('popup-answer');
const popupAnswerClose = document.getElementById('popup-answer-close-btn');

let currentStep = 0;

function updateFormStep() {
    formSteps.forEach((step, index) => {
        step.classList.remove('form-step-active');
        if (index === currentStep) {
            step.classList.add('form-step-active');
        }
    });
}

function clearForm() {
    document.querySelectorAll("input, select, textarea").forEach((element) => {
        localStorage.removeItem(element.id);
        element.value = ""; 
    });
    currentStep = 0;
    updateFormStep();
}

const sendBtn = document.getElementById('form-send-btn');
const username = document.getElementById('username');
const email = document.getElementById('email');
const textarea = document.getElementById('textarea');

sendBtn.addEventListener('click', (event) => {
    event.preventDefault();
    if(validateInputs()){
        popupAnswer.classList.add('show');
        clearForm();
    }
    else {
        updateFormStep();
    }
})


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

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const textareaValue = textarea.value.trim();
    
    if(validateEmail(emailValue) & validateName(usernameValue) & validateTexting(textareaValue)){ return true;}

    return false;
};

function isContainNumbers(usernameValue){
    return usernameValue.match(/\d+/);
}

function isContainSpecials(username){
    let specials = /[!@#$%^&*()\-+={}[\]:;"'<>,.?\/|\\]/;
    return specials.test(username);
}

function isNameCorrect(usernameValue){
    if(usernameValue.length < 3){
        setError(username, 'Write longer name')
        return false;
    }
    
    if (isContainNumbers(usernameValue)){
        setError(username, 'Remove numbers')
        return false;
    }
    
    if (isContainSpecials(usernameValue)){
        setError(username, 'Remove special symbols')
        return false;
    }

    return true;
}

function validateName(usernameValue){
    if(usernameValue === '') {
        currentStep = 0;
        setError(username, 'Username is required');
        return false;
    } else if(!isNameCorrect(usernameValue)) {
        currentStep = 0;
        return false;
    } else {
        removeError(username);
        return true;
    }
}

function validateEmail(emailValue){
    if(emailValue === '') {
        currentStep = currentStep < 1 ? 0 : 1;
        setError(email, 'Email is required');
        return false;
    } else if (!isValidEmail(emailValue)) {
        currentStep = currentStep < 1 ? 0 : 1;
        setError(email, 'Provide a valid email address');
        return false;
    } else {
        removeError(email);
        return true;
    }
}

function validateTexting(textareaValue){
    if(textareaValue === ''){
        setError(textarea, 'Please, write something');
        return false;
    } else {
        removeError(textarea);
        return true;
    }
}


openButton.addEventListener('click', () => {
    popupForm.classList.add('show');
    overlay.classList.add('show');
    currentStep = 0;
    updateFormStep();
});

closeButton.addEventListener('click', () => {
    popupForm.classList.remove('show');
    overlay.classList.remove('show');
});

nextBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        if (currentStep < formSteps.length - 1) {
            currentStep++;
            updateFormStep();
        }
    });
});

prevBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        if (currentStep > 0) {
            currentStep--;
            updateFormStep();
        }
    });
});

overlay.addEventListener('click', () =>{
    popupForm.classList.remove('show');
    overlay.classList.remove('show');
})

popupAnswerClose.addEventListener('click', () =>{
    popupAnswer.classList.remove('show');
    popupForm.classList.remove('show');
    overlay.classList.remove('show');
})