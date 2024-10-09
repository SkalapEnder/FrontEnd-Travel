document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission for validation

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const errorMsg = document.getElementById('errorMsg');

    // Simple validation
    if (name.trim() === "" || email.trim() === "") {
        errorMsg.textContent = "All necessary fields are need to filled!";
    } else if (password.length < 6) {
        errorMsg.textContent = "Password must be at least 6 characters long.";
    } else {
        errorMsg.textContent = "";
        alert("Form submitted successfully! Thanks you for contacting us!");
    }
});