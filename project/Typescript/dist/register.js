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
////////////////////////////page-4//////////////////////////////////////////
// const citySelect = document.getElementById("city") as HTMLSelectElement;
// const vehicleNumberInput = document.getElementById(
//   "number"
// ) as HTMLInputElement;
// const startParkingButton = document.getElementById(
//   "start-parking"
// ) as HTMLButtonElement;
// const endParkingButton = document.getElementById(
//   "end-parking"
// ) as HTMLButtonElement;
// const timerLabel = document.getElementById(
//   "timer-label"
// ) as HTMLParagraphElement;
// const timerDisplay = document.getElementById("timer") as HTMLParagraphElement;
// let timer: number;
// let seconds = 0;
// // Event listeners
// startParkingButton.addEventListener("click", startParking);
// endParkingButton.addEventListener("click", endParking);
// // Start parking
// function startParking() {
//   const selectedCity = citySelect.value;
//   const vehicleNumber = vehicleNumberInput.value;
//   if (selectedCity && vehicleNumber) {
//     // Disable city selection and vehicle number input
//     citySelect.disabled = true;
//     vehicleNumberInput.disabled = true;
//     // Enable end parking button
//     endParkingButton.disabled = false;
//     // Show timer
//     timerLabel.textContent = "Time elapsed:";
//     timerDisplay.textContent = "0 seconds";
//     if (timerDisplay.parentElement) {
//       timerDisplay.parentElement.hidden = false;
//     }
//     // Start timer
//     timer = setInterval(updateTimer, 1000);
//   }
// }
// // End parking
// function endParking() {
//   // Enable city selection and vehicle number input
//   citySelect.disabled = false;
//   vehicleNumberInput.disabled = false;
//   // Disable end parking button
//   endParkingButton.disabled = true;
//   // Hide timer
//   if (timerDisplay.parentElement) {
//     timerDisplay.parentElement.hidden = true;
//   }
//   // Stop timer
//   clearInterval(timer);
//   // Reset timer
//   seconds = 0;
// }
// // Update timer display
// function updateTimer() {
//   seconds++;
//   timerDisplay.textContent = `${seconds} seconds`;
// }
