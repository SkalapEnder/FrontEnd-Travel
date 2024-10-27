// Save input values to localStorage
document.querySelectorAll("input, select, textarea").forEach((element) => {
    element.addEventListener('input', () => {
        if (element.type === 'radio') {
            if (element.checked) {
                localStorage.setItem(element.name, element.value);
            }
        } else if (element.type === 'checkbox') {
            localStorage.setItem(element.id, element.checked);
        } else {
            localStorage.setItem(element.id, element.value);
        }
    });
});

// Populate form with saved values on page load
function populateForm() {
    document.querySelectorAll("input, select, textarea").forEach((element) => {
        if (element.type === 'radio') {
            const savedValue = localStorage.getItem(element.name);
            if (savedValue && element.value === savedValue) {
                element.checked = true;
            }
        } else if (element.type === 'checkbox') {
            const savedChecked = localStorage.getItem(element.id);
            element.checked = savedChecked === 'true';
        } else {
            const savedValue = localStorage.getItem(element.id);
            if (savedValue !== null) {
                element.value = savedValue;
            }
        }
    });
}

document.addEventListener('DOMContentLoaded', populateForm);
