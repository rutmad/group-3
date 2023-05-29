if (localStorage.getItem("user"))
    window.location.href = "http://localhost:5500/project/page-3/parking.html";
var currentData = JSON.parse(localStorage.getItem("users") || "[]");
var submitBtn = document.getElementById("submitBtn");
submitBtn.onclick = function (e) { return handleSubmit(e); };
function login(userName, password) {
    var loggedInUser = currentData.filter(function (user) { return user.userName === userName && user.password === password; });
    console.log(loggedInUser);
    if (loggedInUser.length === 0) {
        return {
            message: "username or password is incorrect.",
            user: null
        };
    }
    return {
        message: "Logged in successfuly.",
        user: loggedInUser[0]
    };
}
var hello = function () {
    console.log("hello");
};
function handleSubmit(e) {
    e.preventDefault();
    var username = document.getElementById("username");
    var password = document.getElementById("password");
    var loginResult = login(username.value, password.value);
    if (loginResult.user) {
        localStorage.setItem("user", JSON.stringify(loginResult.user));
        window.location.href = "http://localhost:5500/project/page-3/parking.html";
    }
    var feedback = document.getElementById("feedback");
    feedback.innerText = loginResult.message;
}
