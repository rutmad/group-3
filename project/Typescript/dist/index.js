////////////////////////////page-2//////////////////////////////////////////
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
    //Pushing font results to the userData array
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
    localStorage.setItem("userData", JSON.stringify(userData));
}
var frm = document.getElementById("form");
frm.addEventListener("submit", addUser);
var storedUserData = localStorage.getItem("userData");
if (storedUserData) {
    userData = JSON.parse(storedUserData);
}
var btn = document.getElementById("register_button");
btn.addEventListener("click", function () {
    window.location.href = "../page 1 login/login.html";
});
////////////////////////////page-3//////////////////////////////////////////
var citySelect = document.getElementById("city");
var vehicleNumberInput = document.getElementById("number");
var startParkingButton = document.getElementById("start-parking");
var endParkingButton = document.getElementById("end-parking");
var timerLabel = document.getElementById("timer-label");
var timerDisplay = document.getElementById("timer");
var timer;
var seconds = 0;
// Event listeners
startParkingButton.addEventListener("click", startParking);
endParkingButton.addEventListener("click", endParking);
// Start parking
function startParking() {
    var selectedCity = citySelect.value;
    var vehicleNumber = vehicleNumberInput.value;
    if (selectedCity && vehicleNumber) {
        // Disable city selection and vehicle number input
        citySelect.disabled = true;
        vehicleNumberInput.disabled = true;
        // Enable end parking button
        endParkingButton.disabled = false;
        // Show timer
        timerLabel.textContent = "Time elapsed:";
        timerDisplay.textContent = "0 seconds";
        if (timerDisplay.parentElement) {
            timerDisplay.parentElement.hidden = false;
        }
        // Start timer
        timer = setInterval(updateTimer, 1000);
    }
}
// End parking
function endParking() {
    // Enable city selection and vehicle number input
    citySelect.disabled = false;
    vehicleNumberInput.disabled = false;
    // Disable end parking button
    endParkingButton.disabled = true;
    // Hide timer
    if (timerDisplay.parentElement) {
        timerDisplay.parentElement.hidden = true;
    }
    // Stop timer
    clearInterval(timer);
    // Reset timer
    seconds = 0;
}
// Update timer display
function updateTimer() {
    seconds++;
    timerDisplay.textContent = seconds + " seconds";
}
