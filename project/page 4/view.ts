class TimerView {
  constructor(
    private timerLabel: HTMLParagraphElement,
    private timerDisplay: HTMLParagraphElement
  ) {
    this.timerLabel = document.getElementById(
      "timer-label"
    ) as HTMLParagraphElement;
    this.timerDisplay = document.getElementById(
      "timer"
    ) as HTMLParagraphElement;
  }

  showTimer() {
    this.timerLabel.textContent = "Time elapsed:";
    this.timerDisplay.textContent = "0 seconds";
    this.timerDisplay.parentElement?.hidden = false;
  }

  hideTimer() {
    this.timerDisplay.parentElement?.hidden = true;
  }

  updateTimerDisplay(seconds: number) {
    this.timerDisplay.textContent = `${seconds} seconds`;
  }

  getFormattedTime(seconds: number) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes} minutes ${remainingSeconds} seconds`;
  }
}

class ParkingView {
  citySelect: HTMLSelectElement;
  vehicleNumberInput: HTMLInputElement;
  startParkingButton: HTMLButtonElement;
  endParkingButton: HTMLButtonElement;
  timerLabel: HTMLParagraphElement;
  timerDisplay: HTMLParagraphElement;

  constructor() {
    this.citySelect = document.getElementById("city") as HTMLSelectElement;
    this.vehicleNumberInput = document.getElementById(
      "number"
    ) as HTMLInputElement;
    this.startParkingButton = document.getElementById(
      "start-parking"
    ) as HTMLButtonElement;
    this.endParkingButton = document.getElementById(
      "end-parking"
    ) as HTMLButtonElement;
    this.timerLabel = document.getElementById(
      "timer-label"
    ) as HTMLParagraphElement;
    this.timerDisplay = document.getElementById(
      "timer"
    ) as HTMLParagraphElement;
  }

  disableCitySelect() {
    this.citySelect.disabled = true;
  }

  enableCitySelect() {
    this.citySelect.disabled = false;
  }

  disableVehicleNumberInput() {
    this.vehicleNumberInput.disabled = true;
  }

  enableVehicleNumberInput() {
    this.vehicleNumberInput.disabled = false;
  }

  disableEndParkingButton() {
    this.endParkingButton.disabled = true;
  }

  enableEndParkingButton() {
    this.endParkingButton.disabled = false;
  }

  getSelectedCity(): string {
    return this.citySelect.value;
  }

  getVehicleNumber(): string {
    return this.vehicleNumberInput.value;
  }

  showPage(pageId) {
    const pages = document.querySelectorAll(".page");
    pages.forEach((page) => {
      if (page.id === pageId) {
        page.style.display = "block";
      } else {
        page.style.display = "none";
      }
    });
  }
}

/////////////////////////////register//////////////////////////////////////////////
const storedUserData = localStorage.getItem("userData");
if (storedUserData) {
  userData = JSON.parse(storedUserData);
}
////////////////////////////////////////////////////////////////////////////////////
