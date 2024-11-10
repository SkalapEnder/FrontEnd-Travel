document.addEventListener("DOMContentLoaded", function () {
    const icon = document.getElementById("icon");

    document.body.classList.contains("dark-mode") ? changeThemeCurrencyButtons() : 0;

    icon.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        icon.src = document.body.classList.contains("dark-mode") ? "pictures/dark_mode.png" :  "pictures/light_mode.png";
        sessionStorage.getItem("unloggedTheme") === 'dark' ? sessionStorage.setItem("unloggedTheme", 'white') : sessionStorage.setItem("unloggedTheme", 'dark');
        changeThemeCurrencyButtons();
    });

    function changeThemeCurrencyButtons() {
        const radios = document.querySelectorAll("input[type='radio']");
        if(radios){
            for(let i = 0; i < radios.length; i++){
                let label = radios[i].nextElementSibling;
                if(label.classList.contains('btn-outline-dark')){
                    label.classList.add('btn-outline-light');
                    label.classList.remove('btn-outline-dark');
                } else {
                    label.classList.add('btn-outline-dark');
                    label.classList.remove('btn-outline-light');
                }
            }
        }
    }


});