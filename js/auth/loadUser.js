class userProfileObj {
    constructor(id, name, surname, image, birthday, gender, email, password, theme, description){
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.image = image;
        this.birthday = birthday;
        this.gender = gender;
        this.email = email;
        this.password = password;
        this.theme = theme;
        this.description = description;
    }
}

function updateAuthSection() {
    const authSection = document.getElementById("auth-section");
    const loggedIn = localStorage.getItem("loggedin");
    const userID = localStorage.getItem("activeUserId");

    if (loggedIn && userID != null) {
        authSection.innerHTML = `
        <a class="me-2" href="profile.html">
            ${placeImage(getUser(userID))}
        </a>
        `;
        setTheme(getUser(userID));
    } else {
        
        authSection.innerHTML = `
            <button class="btn btn-light me-2" onclick="window.location.href = 'registration.html';">Sign Up</button>
            <button class="btn btn-light me-4" onclick="window.location.href = 'login.html';">Log In</button>
        `;
        setThemeUnlogged();
    }
}

function setThemeUnlogged(){
    if(sessionStorage.getItem("unloggedTheme") == 'dark'){
        document.body.classList.toggle("dark-mode");
        icon.src = "pictures/dark_mode.png";
    }
}

function setTheme(userData){
    if(userData.theme === "dark"){
        document.body.classList.toggle("dark-mode");
        icon.src = document.body.classList.contains("dark-mode") ? "pictures/dark_mode.png" : "pictures/light_mode.png";
    }
}

function getUser(userID){
    let userList = JSON.parse(localStorage.getItem("userList"));

    if(userList === null || userList.length === 0) { return ""; }
    for(let i = 0; i < userList.length; i++){
        let userF = userList[i];
        if(userF.id == userID){
            return new userProfileObj(userID, userF.name, userF.surname, userF.image, userF.birthday, 
                userF.gender, userF.email, userF.password, userF.theme);
        }
    }

    return "";
};

function placeImage(userData){
    if(userData.image== "" || userData.image === null){
        return `<img class="profile-img" src="https://eu.ui-avatars.com/api/?name=${userData.name}&size=250" alt="profileImage">`
    } else{
        return `<img class="profile-img" src="${userData.image}" alt="profileImage">`
    }
};

document.addEventListener("DOMContentLoaded", updateAuthSection);