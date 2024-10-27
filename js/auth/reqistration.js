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

const form = document.getElementById('registrationForm');
const userName = document.getElementById('name');
const userSurname = document.getElementById('surname');
const birthDate = document.getElementById('birthday');
const gender = document.getElementById('gender');
const email = document.getElementById('email');
const password1 = document.getElementById('password1');
const password2 = document.getElementById('password2');


// Form validation code
form.addEventListener('submit', e => {
    e.preventDefault();

    if(validateInputs()){
        createUser();
        clearForm();
        window.location.href = "./profile.html";
        console.log("I'm here!")
    };
});

function createUser(){
    let newUser = new userProfileObj(getFreeID(), userName.value, userSurname.value, '', birthDate.value, gender.value, email.value, password1.value, "white");

    updateUsers(newUser);
    loginUser(newUser.id);
    setTimeout(() => window.location.href = "profile.html", 2000);
}

function getFreeID(){
    let userList = JSON.parse(localStorage.getItem("userList"));
    if(userList === null || userList[0] === null || userList.length === 0) { return 0; }
    for(let i = 0; i < userList.length; i++){
        if(userList[i].id != i){
            return i;
        }
    }
    return userList.length;
}

function updateUsers(newUser){
    let userList = JSON.parse(localStorage.getItem("userList"));
    
    if(userList === null || userList[0] === null || userList.length === 0){
        userList = [];
    } 
    userList.push(newUser);

    localStorage.setItem("userList", JSON.stringify(userList));
}

function loginUser(userId) {
    localStorage.setItem("activeUserId", userId);
    localStorage.setItem("loggedin", true);
}

function clearForm(){
    document.querySelectorAll("input, select, textarea").forEach((element) => {
    localStorage.removeItem(element.id);
    if (element.type === 'radio') { element.checked = false;}
    else if (element.type === 'checkbox') { element.checked = false;} 
    else { element.value = ""; }
    }
)};


const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const removeError = element =>{
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.remove('error');
}

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const userNameValue = userName.value.trim();
    const userSurnameValue = userSurname.value.trim();
    const emailValue = email.value.trim();
    const birthDateValue = new Date(birthDate.value);
    const genderValue = gender.value.trim();
    const password1Value = password1.value.trim();
    const password2Value = password2.value.trim();

    let nameB, surnameB, emailB, birthB, genderB, passwordB;

    if(userNameValue === '') {
        setError(userName, 'Name is required');
        nameB = false;
    } else if(userNameValue.length < 3) {
        setError(userName, 'Name length must be 3 or greater');
        nameB = false;
    } else {
        removeError(userName);
        nameB = true;
    }

    if(userSurnameValue === '') {
        setError(userSurname, 'Surname is required');
        surnameB = false;
    } else if(userSurnameValue.length < 3) {
        setError(userSurname, 'Surname length must be 3 or greater');
        surnameB = false;
    } else {
        removeError(userSurname);
        surnameB = true;
    }

    if(emailValue === '') {
        setError(email, 'Email is required');
        emailB = false;
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
        emailB = false;
    } else {
        removeError(email);
        emailB = true;
    }

    if(genderValue === ''){
        setError(gender, 'Choose gender');
        genderB = false;
    } else{
        removeError(gender);
        genderB = true;
    }

    if(isNaN(birthDateValue)){
        setError(birthDate, 'Set your birthdate!');
        birthB = false;
    } else if(!isUpper18(birthDateValue)){
        setError(birthDate, 'Sorry, only 18+ adults!');
        birthB = false;
    } else{
        removeError(birthDate);
        birthB = true;
    }


    if(password1Value === "" ){
        setError(password1, 'Write your password!');
        passwordB = false;
    } else if(password1Value !== password2Value){
        removeError(password1);
        setError(password2, 'Passwords are not equal!');
        passwordB = false;
    } else {
        removeError(password1);
        removeError(password2);
        passwordB = true;
    }

    if(nameB && surnameB && emailB && genderB && birthB && passwordB){
        return true;
    } else{
        return false;
    }
};

function isUpper18(dateString){
    const birthDate = new Date(dateString);
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    const dayDifference = today.getDate() - birthDate.getDate();

    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
        age--;
    }

    return age >= 18;
}