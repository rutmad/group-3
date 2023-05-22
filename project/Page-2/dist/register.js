var UserData = /** @class */ (function () {
    function UserData(uid, userName, password, address, licensePlate, creditCard) {
        this.uid = uid;
        this.userName = userName;
        this.password = password;
        this.address = address;
        this.licensePlate = licensePlate;
        this.creditCard = creditCard;
    }
    return UserData;
}());
var userData = [];
function addUser(event) {
    event.preventDefault();
    var userNameInput = document.getElementById("user-name");
    var passwordInput = document.getElementById("password");
    var addressInput = document.getElementById("address");
    var licensePlateInput = document.getElementById("license-plate-number");
    var creditCardInput = document.getElementById("credit-card");
    var newUserData = {
        uid: Math.floor(Math.random() * 10000),
        userName: userNameInput.value,
        password: passwordInput.value,
        address: addressInput.value,
        licensePlate: Number(licensePlateInput.value),
        creditCard: Number(creditCardInput.value)
    };
    userData.push(newUserData);
    console.log(userData);
}
var form = document.getElementById("form");
form.addEventListener("submit", addUser);
