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

    this.timerModel.stopTimer();

    const totalTime = this.timerModel.getSecondsElapsed();

    this.displayParkingSummary(totalTime, "");
  }

  displayParkingSummary(totalTime, totalCost) {
    totalCost = totalTime * 0.01;

    this.parkingView.showPage("page4");

    const costElement = document.getElementById("cost");
    const timeElement = document.getElementById("time");

    costElement!.textContent = "Total cost: $" + totalCost.toFixed(2);
    timeElement!.textContent = this.timerView.getFormattedTime(totalTime);

    this.timerModel.resetTimer();
    this.parkingView.enableCitySelect();
    this.parkingView.enableVehicleNumberInput();
    this.parkingView.disableEndParkingButton();
  }

  updateTimer() {
    const secondsElapsed = this.timerModel.getSecondsElapsed();
    this.timerView.updateTimerDisplay(secondsElapsed);
    setTimeout(() => {
      this.updateTimer();
    }, 1000);
  }
}

//////////////////////////Register///////////////////////////////////
function addUser(event: Event) {
  event.preventDefault();
  const userNameInput = document.getElementById(
    "user-name"
  ) as HTMLInputElement;
  const passwordInput = document.getElementById("password") as HTMLInputElement;
  const addressInput = document.getElementById("address") as HTMLInputElement;
  const licensePlateInput = document.getElementById(
    "license-plate-number"
  ) as HTMLInputElement;
  const creditCardInput = document.getElementById(
    "credit-card"
  ) as HTMLInputElement;

  const newUserData: UserData = {
    uid: Math.floor(Math.random() * 10000),
    userName: userNameInput.value,
    password: passwordInput.value,
    address: addressInput.value,
    licensePlate: Number(licensePlateInput.value),
    creditCard: Number(creditCardInput.value),
  };
  userData.push(newUserData);
  localStorage.setItem("userData", JSON.stringify(userData));
}

const frm = document.getElementById("form") as HTMLFormElement;
frm.addEventListener("submit", addUser);

const btn = document.getElementById("register_button") as HTMLButtonElement;
btn.addEventListener("click", () => {
  window.location.href = "../page 1 login/login.html";
});
///////////////////////////////////////////////////////////////////////////////
