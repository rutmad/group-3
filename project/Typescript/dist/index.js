////////////////////////////page-2//////////////////////////////////////////
// class UserData {
//   constructor(
//     public uid: number,
//     public userName: string,
//     public password: string,
//     public address: string,
//     public licensePlate: number,
//     public creditCard: number
//   ) {}
// }
// const userData: UserData[] = [];
// function addUser(event: Event) {
//   //Pushing font results to the userData array
//   event.preventDefault();
//   const userNameInput = document.getElementById(
//     "user-name"
//   ) as HTMLInputElement;
//   const passwordInput = document.getElementById("password") as HTMLInputElement;
//   const addressInput = document.getElementById("address") as HTMLInputElement;
//   const licensePlateInput = document.getElementById(
//     "license-plate-number"
//   ) as HTMLInputElement;
//   const creditCardInput = document.getElementById(
//     "credit-card"
//   ) as HTMLInputElement;
//   const newUserData: UserData = {
//     uid: Math.floor(Math.random() * 10000),
//     userName: userNameInput.value,
//     password: passwordInput.value,
//     address: addressInput.value,
//     licensePlate: Number(licensePlateInput.value),
//     creditCard: Number(creditCardInput.value),
//   };
//   userData.push(newUserData);
//   localStorage.setItem("userData", JSON.stringify(userData));
// }
// const frm = document.getElementById("form") as HTMLFormElement;
// frm.addEventListener("submit", addUser);
// const storedUserData = localStorage.getItem("userData");
// if (storedUserData) {
//   userData = JSON.parse(storedUserData);
// }
// const btn = document.getElementById("register_button") as HTMLButtonElement;
// btn.addEventListener("click", () => {
//   window.location.href = "../page 1 login/login.html";
// });
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
