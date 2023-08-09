var logins = {
    admin: {
        username: "adminuser",
        password: "adminJR"
    },
    user1: {
        username: "testuser1",
        password: "testuser1"
    }
}
function signups() {
    var user = document.getElementById("username");
    var passw = document.getElementById("password");
    user = user.value;
    passw = passw.value;
    
    console.log(Object.keys(logins).length - 1);
    for(let i = 1; i <= (Object.keys(logins).length); i++) {
        let stringi = i.toString();
        let checkUser = "user" + stringi;
        if(logins[checkUser]== undefined) {
            logins[checkUser] = {
                username: user,
                password: passw
            }
            console.log(logins[checkUser]);
            break;
        }
    }
}