class userProfileObj {
    constructor(id, name, surname, image, birthday, gender, email, password, theme){
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.image = image;
        this.birthday = birthday;
        this.gender = gender;
        this.email = email;
        this.password = password;
        this.theme = theme;
    }
}

const icon = document.getElementById("icon");
const theme = document.getElementById('profile-theme');
const deletePopup = document.querySelector('.deleteQst');
const closePopup = document.getElementById('close-popup');
const overlay = document.getElementById('overlay');
const deleteBtn = document.getElementById('delete-Btn');

deleteBtn.addEventListener('click', () => {
    deletePopup.classList.add('show');
    overlay.style.display = 'block';
});

overlay.addEventListener('click', function () {
    deletePopup.classList.remove('show');
    overlay.style.display = 'none';
});

closePopup.addEventListener('click', () => {
    deletePopup.classList.remove('show');
    overlay.style.display = 'none';
});

document.addEventListener("DOMContentLoaded", () => {
    
    let activeUserProfile = loadActiveUserProfile();
    if (activeUserProfile != null) {
        createProfile(getUser(activeUserProfile));
        setTheme(getUser(activeUserProfile));
    } else{
        document.querySelector('main').innerHTML = `<div style="padding: 25%; align-items: center; font-size: 22px;">No active user or user list found.</div>`
    }
});

function createProfile(userData){
    document.getElementById('profile-img').innerHTML = placeImage(userData);
    document.getElementById('profile-name').innerText = userData.name;
    document.getElementById('profile-surname').innerText = userData.surname;
    document.getElementById('profile-gender').innerText = userData.gender == 1 ? 'Male' : 'Female';
    document.getElementById('profile-age').innerText = calculateAge(userData.birthday) + " year"
    document.getElementById('profile-bday').innerText = getRightDate(userData.birthday);
    document.getElementById('profile-email').innerText = userData.email;
    document.getElementById('profile-theme').innerText = userData.theme === "dark" ? 'Dark' : 'White';
};

function getUser(userID){
    let userList = JSON.parse(localStorage.getItem("userList"));

    if(userList[0] === null || userList.length === 0) { return null; }
    for(let i = 0; i < userList.length; i++){
        let userF = userList[i];
        if(userF.id === userID){
            return new userProfileObj(userID, userF.name, userF.surname, userF.image, userF.birthday, 
                                        userF.gender, userF.email, userF.password, userF.theme);
        }
    }
    return null;
}

function changeTheme(){
    let user = getUser(parseInt(localStorage.getItem("activeUserId")));

    document.body.classList.toggle("dark-mode");
    icon.src = document.body.classList.contains("dark-mode") ? "pictures/dark_mode.png" :  "pictures/light_mode.png" ;

    document.getElementById('profile-theme').innerText = user.theme === "dark" ? 'White' : 'Dark';
    user.theme = (user.theme === "dark" ? 'white' : 'dark');
    updateCurrentUser(user);
}

function setTheme(userData){
    if(userData.theme === "dark"){
        document.body.classList.toggle("dark-mode");
        icon.src = document.body.classList.contains("dark-mode") ? "pictures/dark_mode.png" : "pictures/light_mode.png";
    }
}

function placeImage(userData){
    if(userData.image== "" || userData.image === null){
        return `<img class="profile-img" src="https://eu.ui-avatars.com/api/?name=${userData.name}+${userData.surname}&size=250" alt="profileImage">`
    } else{
        return `<img class="profile-img" src=${userData.image} alt="profileImage">`
    }
};

function logoutUser() {
    localStorage.removeItem("activeUserId");
    localStorage.setItem("loggedin", false);

    window.location.href = "index.html";
}

function updateCurrentUser(User){
    let userList = JSON.parse(localStorage.getItem("userList"));
    for(let i = 0; i < userList.length; i++){
        if(User.id === userList[i].id){
            userList[i] = User;
            break;
        }
    }

    localStorage.setItem("userList", JSON.stringify(userList));
}

function getRightDate(dateString){
    const birthDate = new Date(dateString);
    return birthDate.toLocaleDateString();
}

function calculateAge(dateString) {
    const birthDate = new Date(dateString);
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    const dayDifference = today.getDate() - birthDate.getDate();

    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
        age--;
    }
    if(isNaN(age)) return "Not set"
    else return age;
};

function loadActiveUserProfile() {
    const isLogged = localStorage.getItem("loggedin");
    const activeUserId = localStorage.getItem("activeUserId");
    
    if (isLogged === 'true' && parseInt(activeUserId) != null) {
        return parseInt(activeUserId);
    } else {
        return null;
    }
}

function deleteAccount(){
    let user = getUser(parseInt(localStorage.getItem("activeUserId")));

    let userList = JSON.parse(localStorage.getItem("userList"));
    for(let i = 0; i < userList.length; i++){
        if(user.id === userList[i].id){
            delete userList[i];
            break;
        }
    }

    userList = userList.filter(element => element !== null);

    localStorage.setItem("userList", JSON.stringify(userList));

    logoutUser();
}

icon.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    icon.src = document.body.classList.contains("dark-mode") ? "pictures/light_mode.png" : "pictures/dark_mode.png";
    theme.innerText = theme.innerText === "Dark" ? "White" : "Dark";
});