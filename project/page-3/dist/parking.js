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
