const successMessage = document.getElementById('success-message');
const checkinInput = document.getElementById('checkin');
const checkoutInput = document.getElementById('checkout');
const errorMessage = document.getElementById('error-message');
const form = document.getElementById('reservationForm');

// Function to validate the check-in and check-out dates
function validateDates() {
    const checkinDate = new Date(checkinInput.value);
    const checkoutDate = new Date(checkoutInput.value);

    if (checkoutDate <= checkinDate) {
        errorMessage.style.display = 'block';
        return false;
    } else {
        errorMessage.style.display = 'none';
        return true;
    }
}

function setCheckoutMinDate() {
    const checkinDate = checkinInput.value;
    if (checkinDate) {
        const nextDay = new Date(checkinDate);
        nextDay.setDate(nextDay.getDate() + 1);
        const nextDayISO = nextDay.toISOString().split('T')[0];
        checkoutInput.min = nextDayISO;
    }
}

checkinInput.addEventListener('change', () => {
    setCheckoutMinDate();
    validateDates();
});

checkoutInput.addEventListener('change', validateDates);
// Prevent form submission if the dates are not valid and show success alert
form.addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form submission to backends
    if (validateDates()) {
        successMessage.style.display = 'block';
        form.reset();  
        localStorage.clear();
        setTimeout(() => {
        successMessage.style.display = 'none';
    }, 3000);  // Adjust timing as needed
    }
});
