document.addEventListener("DOMContentLoaded", function () {
    const icon = document.getElementById("icon");

    const groups = document.getElementById('button-groups');

    icon.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        icon.src = document.body.classList.contains("dark-mode") ? "pictures/dark_mode.png" :  "pictures/light_mode.png";
        changeThemeCurrencyButtons();
    });

    function changeThemeCurrencyButtons() {
        const radios = document.querySelectorAll("input[type='radio']");
        
        for(let i = 0; i < radios.length; i++){
            let label = radios[i].nextElementSibling;
            if(label.classList.contains('btn-outline-dark')){
                label.classList.add('btn-outline-light');
                label.classList.remove('btn-outline-dark');
            } else{
                label.classList.add('btn-outline-dark');
                label.classList.remove('btn-outline-light');
            }
        }

        return null;
    }
});