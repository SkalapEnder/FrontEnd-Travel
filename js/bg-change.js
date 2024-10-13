document.addEventListener("DOMContentLoaded", function () {
    const icon = document.getElementById("icon");

    icon.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        icon.src = document.body.classList.contains("dark-mode") ? "pictures/light_mode.png" : "pictures/dark_mode.webp";
    });
});