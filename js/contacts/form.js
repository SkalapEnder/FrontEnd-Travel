const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const textarea = document.getElementById('textarea');

// Form validation code
form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
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

    if(usernameValue === '') {
        setError(username, 'Username is required');
    } else if(usernameValue.length < 3) {
        setError(username, 'Username length must be 3 or greater');
    } else {
        removeError(username);
    }

    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        removeError(email);
    }

    if(textareaValue === ''){
        setError(textarea, 'Please, write something')
    } else {
        removeError(textarea);
    }
};

// Function to clear all input, textarea, and select elements
function clearForm() {
    const form = document.getElementById('form');

    // Clear all input fields
    const inputs = form.querySelectorAll('input[type="text"], input[type="email"], input[type="number"], input[type="checkbox"], input[type="radio"]');
    inputs.forEach(input => {
         // Clear text input
        if (input.type === 'checkbox' || input.type === 'radio') {
            input.checked = false; // Uncheck checkboxes and radio buttons
        } else {
            input.value = '';
        }
    });

    // Clear all textarea fields
    const textareas = form.querySelectorAll('textarea');
    textareas.forEach(textarea => {
        textarea.value = ''; // Clear textarea
    });

    // Reset all select elements
    const selects = form.querySelectorAll('select');
    selects.forEach(select => {
        select.selectedIndex = 0; // Reset to first option
    });
}
