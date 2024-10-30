function loginUser(userId) {
    localStorage.setItem("activeUserId", userId);
    localStorage.setItem("loggedin", true);
}


function checkUser(email, password){
    let userList = JSON.parse(localStorage.getItem("userList"));
    
    if(userList === null || userList[0] === null || userList.length === 0){
        return -1;
    } else {
        for(let i = 0; i < userList.length; i++){
            let user = userList[i];
            if(email === user.email && password === user.password){
                return user.id;
            }
        }
        return -1;
    }
}

const form = document.getElementById('loginForm');
const email = document.getElementById('email');
const password = document.getElementById('password1');
const error = document.getElementById('error-message');

form.addEventListener('submit', e => {
    e.preventDefault();

    let res = checkUser(email.value, password.value);

    if(res != -1){
        loginUser(res);
        window.location.href = "profile.html";
    } else{
        errorMessage();
    }
});

function errorMessage(){
    error.innerHTML = `<h4>No user found!</h4>`
}