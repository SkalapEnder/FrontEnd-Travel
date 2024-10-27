const popupForm = document.getElementById('popupForm');

const openButton = document.getElementById('popup-open-btn');
const closeButton = document.getElementById('popup-close-btn');
const formSteps = document.querySelectorAll('.form-step');
const nextBtns = document.querySelectorAll('.next-btn');
const prevBtns = document.querySelectorAll('.prev-btn');
const overlay = document.getElementById('overlay');

const popupAnswer = document.getElementById('popup-answer');
const popupAnswerClose = document.getElementById('popup-answer-close-btn');

let currentStep = 0;

// Function to show the popup
openButton.addEventListener('click', () => {
    popupForm.classList.add('show');
    overlay.classList.add('show');
    currentStep = 0;
    updateFormStep();
});

// Function to hide the popup
closeButton.addEventListener('click', () => {
    popupForm.classList.remove('show');
    overlay.classList.remove('show');
});

// Update form step display
function updateFormStep() {
    formSteps.forEach((step, index) => {
        step.classList.remove('form-step-active');
        if (index === currentStep) {
            step.classList.add('form-step-active');
        }
    });
}

// Navigate to the next step
nextBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        if (currentStep < formSteps.length - 1) {
            currentStep++;
            updateFormStep();
        }
    });
});

// Navigate to the previous step
prevBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        if (currentStep > 0) {
            currentStep--;
            updateFormStep();
        }
    });
});

// Clear form function
function clearForm() {
    document.getElementById('form').reset();
    currentStep = 0;
    updateFormStep();
}

function sendForm(){
    popupAnswer.classList.add('show');
}
