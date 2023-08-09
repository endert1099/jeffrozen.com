fetch('https://jsonkeeper.com/b/KG6L')
    .then((response) => response.json())
    .then((json) => console.log(json));
/*function checkLogin() {
    var user = document.getElementById("username");
    var passw = document.getElementById("password");
    user = user.value;
    passw = passw.value;

    if(user == logins.admin.username && passw == logins.admin.password) {
        window.open("index.html", "_self");
    }
}*/