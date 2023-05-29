const citySelect = document.getElementById("city") as HTMLSelectElement;
const vehicleNumberInput = document.getElementById(
  "number"
) as HTMLInputElement;
const startParkingButton = document.getElementById(
  "start-parking"
) as HTMLButtonElement;
const endParkingButton = document.getElementById(
  "end-parking"
) as HTMLButtonElement;
const timerLabel = document.getElementById(
  "timer-label"
) as HTMLParagraphElement;
const timerDisplay = document.getElementById("timer") as HTMLParagraphElement;

let timer: number;
let seconds = 0;

// Event listeners
startParkingButton.addEventListener("click", startParking);
endParkingButton.addEventListener("click", endParking);

// Start parking
function startParking() {
  const selectedCity = citySelect.value;
  const vehicleNumber = vehicleNumberInput.value;

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
  timerDisplay.textContent = `${seconds} seconds`;
}
