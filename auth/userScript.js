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


function updateUsers(newUser){
    let userJSON = JSON.stringify(newUser);

    let oldList = localStorage.getItem("userList");
    let newList = oldList["users"].push(userJSON);
    localStorage.setItem("userList", newList);
}

function getFreeID(){
    let userList = localStorage.getItem("userList")["users"];

    if(userList.length === 0) { return 0; }
    for(let i = 0; i < userList.length; i++){
        if(userList[i] == null){
            return i;
        }
    }
    return userList.length;
}




function saveUsersToLocalStorage(users) {
    localStorage.setItem("userList", users);
    console.log("Users saved to localStorage.");
}






if(localStorage.getItem("userList")["users"] === ""){
    saveUsersToLocalStorage(users);
}
