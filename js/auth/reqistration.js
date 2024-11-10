class userProfileObj {
    constructor(id, name, /*surname,*/ image, birthday, gender, email, password, theme){
        this.id = id;
        this.name = name;
        /*this.surname = surname;*/
        this.image = image;
        this.birthday = birthday;
        this.gender = gender;
        this.email = email;
        this.password = password;
        this.theme = theme;
    }
}

// Get elements from page
const form = document.getElementById('registrationForm');
const userName = document.getElementById('name');
// const userSurname = document.getElementById('surname');
const birthDate = document.getElementById('birthday');
const gender = document.getElementById('gender');
const email = document.getElementById('email');
const password1 = document.getElementById('password1');
const password2 = document.getElementById('password2');
const errorMessage = document.getElementById("error-message");

// Form validation code
form.addEventListener('submit', e => {
    e.preventDefault();

    if(validateInputs()){
        if(!findSameEmail(email)){
            createUser();
            clearForm();
            window.location.href = "./profile.html";
        } else {
            errorMessage.style.display = 'block';
            setTimeout(() => { errorMessage.style.display = 'none'; }, 3500);
        }
    }
});

// Validate input section
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
    // const userSurnameValue = userSurname.value.trim();
    const emailValue = email.value.trim();
    const birthDateValue = new Date(birthDate.value);
    const genderValue = gender.value.trim();
    const password1Value = password1.value.trim();
    const password2Value = password2.value.trim();

    let nameB, /*surnameB,*/ emailB, birthB, genderB, passwordB;

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

    // if(userSurnameValue === '') {
    //     setError(userSurname, 'Surname is required');
    //     surnameB = false;
    // } else if(userSurnameValue.length < 3) {
    //     setError(userSurname, 'Surname length must be 3 or greater');
    //     surnameB = false;
    // } else {
    //     removeError(userSurname);
    //     surnameB = true;
    // }

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
        if(password2Value === ""){
            setError(password2, 'Write password!');
        } else if(password2Value !== "") {
            setError(password2, 'Passwords are not equal!');
        }
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

    if(nameB /*&& surnameB*/ && emailB && genderB && birthB && passwordB){
        return true;
    } else{
        return false;
    }
};



// New user functions
function createUser(){
    sortingList();

    let image = `https://eu.ui-avatars.com/api/?name=${userName.value}&size=250`
    let newUser = new userProfileObj(getFreeID(), userName.value, /*userSurname.value,*/ image, birthDate.value, 
                                    gender.value, email.value, password1.value, "white");
    updateUsers(newUser);
    loginUser(newUser.id);
    setTimeout(() => window.location.href = "profile.html", 2000);
}

function getFreeID(){
    let userList = JSON.parse(localStorage.getItem("userList"));
    let j = 0;
    if(userList === null || userList.length === 0) { return 0; }
    for(let i = 0; i < userList.length; i++){
        if(userList[i].id != j){
            return j;
        } else ++j;
    }
    return userList.length;
}

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

function findSameEmail(email){
    let userList = JSON.parse(localStorage.getItem("userList"));
    
    if(userList === null || userList.length === 0){
        return false;
    } else {
        for(let i = 0; i < userList.length; i++){
            let user = userList[i];
            if(email.value === user.email){
                return true;
            }
        }
        
        return false;
    }
}

// Sorting section
function sortingList(){
    let userList = JSON.parse(localStorage.getItem("userList"));

    if(userList === null || userList.length === 0) return;

    userList.sort(sort_by_id());
    localStorage.setItem("userList", JSON.stringify(userList));
}

function sort_by_id() {
    return function (elem1, elem2) {
      if (elem1.id < elem2.id) {
        return -1;
      } else if (elem1.id > elem2.id) {
        return 1;
      } else {
        return 0;
      }
    };
  }

// Section with localStorage
function updateUsers(newUser){
    let userList = JSON.parse(localStorage.getItem("userList"));
    
    if(userList === null || userList.length === 0){
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
    else if (element.type === 'email' | element.type === 'text' | element.type === 'password'){ 
        element.value = ""; 
    }
    else { element.value = ""; }
    }
)};



