const form = document.getElementById('popup-form');
const names = document.getElementById('name');
const email = document.getElementById('email');

document.getElementById('discount-popup').addEventListener('click', function () {
    document.getElementById('popupForm').classList.toggle('show');
    document.getElementById('overlay').style.display = 'block';
});

document.getElementById('popup-close-btn').addEventListener('click', function () {
    document.getElementById('popupForm').classList.toggle('show');
    document.getElementById('overlay').style.display = 'none';
});

document.getElementById('overlay').addEventListener('click', function () {
    document.getElementById('popupForm').classList.toggle('show');
    document.getElementById('overlay').style.display = 'none';
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

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const emailValue = email.value.trim();
    const nameValue = names.value.trim();

    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    if(nameValue === '') {
        setError(names, 'Name is required');
    } else if(usernameValue.length < 3) {
        setError(names, 'Your name length must be 3 or greater');
    } else {
        setSuccess(names);
    }
};
