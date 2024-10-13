// Save input values to localStorage
document.querySelectorAll('input, select, textarea').forEach((element) => {
    element.addEventListener('input', () => {
        localStorage.setItem(element.id, element.value);
    });
});

// Populate form with saved values on page load
function populateForm() {
    document.querySelectorAll('input, select, textarea').forEach((element) => {
        if (localStorage.getItem(element.id)) {
            element.value = localStorage.getItem(element.id);
        }
    });
}

document.addEventListener('DOMContentLoaded', populateForm);