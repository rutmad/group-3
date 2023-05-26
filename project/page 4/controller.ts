class ParkingController {
  parkingView: ParkingView;
  timerModel: TimerModel;
  parkingModel: ParkingModel;
  timerView: TimerView;

  constructor() {
    this.parkingView = new ParkingView();
    this.timerModel = new TimerModel();
    this.parkingModel = new ParkingModel();
    this.timerView = new TimerView();

    this.parkingView.startParkingButton.addEventListener("click", () => {
      this.startParking();
    });

    this.parkingView.endParkingButton.addEventListener("click", () => {
      this.endParking();
    });
  }

  startParking() {
    const selectedCity = this.parkingView.citySelect.value;
    const vehicleNumber = this.parkingView.vehicleNumberInput.value;

    if (selectedCity && vehicleNumber) {
      this.parkingView.citySelect.disabled = true;
      this.parkingView.vehicleNumberInput.disabled = true;

      this.parkingView.endParkingButton.disabled = false;

      this.parkingView.timerLabel.textContent = "Time elapsed:";
      this.parkingView.timerDisplay.parentElement!.hidden = false;

      this.timerModel.startTimer();
      this.updateTimer();
    }
  }

  endParking() {
    this.parkingView.citySelect.disabled = false;
    this.parkingView.vehicleNumberInput.disabled = false;

    this.parkingView.endParkingButton.disabled = true;

    this.parkingView.timerDisplay.parentElement!.hidden = true;

    this.timerModel.stopTimer();

    const totalTime = this.timerModel.getSecondsElapsed();

    window.location.href =
      "parkingSummary.html" +
      "?cost=" +
      totalTime * 0.01 +
      "&time=" +
      totalTime;
  }

  updateTimer() {
    const secondsElapsed = this.timerModel.getSecondsElapsed();
    this.timerView.updateTimerDisplay(secondsElapsed);
    setTimeout(() => {
      this.updateTimer();
    }, 1000);
  }

  displayParkingSummary() {
    const urlParams = new URLSearchParams(window.location.search);
    const totalCost = urlParams.get("cost");
    const totalTime = urlParams.get("time");

    const costElement = document.querySelector(".parking__cost");
    const timeElement = document.querySelector(".parking__time");

    costElement!.textContent = "Total cost: $" + totalCost;
    timeElement!.textContent =
      "Time in the parking lot: " + totalTime + " hours";
  }
}
