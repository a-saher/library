window.onload = function(){
    var login_status = localStorage.getItem('login_status');
    if(login_status == 1)
        window.open("index.html", '_self');
};

function login(){
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    let users =  getAllUsers();

    users.forEach(item => {
        if(item.username == username && item.password == password){
            localStorage.setItem('login_status', 1);
            window.open("index.html", '_self');
        }
    });
}

function getAllUsers(){
    let users = [];
    data.forEach(item => {
        users.push(new User(item.username, item.password));
    });
    return users;
}