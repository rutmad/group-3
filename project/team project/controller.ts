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

    const goToRegisterButton = document.getElementById("goToRegister_button");
    goToRegisterButton!.addEventListener("click", () => {
      const vehicleNumber = this.parkingView.getVehicleNumber();
      this.parkingView.showPage("page2");
      const vehicleNumberInput = document.getElementById(
        "license-plate-number"
      ) as HTMLInputElement;
      vehicleNumberInput.value = vehicleNumber;
    });

    const register_button = document.getElementById("register_button");
    register_button!.addEventListener("click", () => {
      this.parkingView.showPage("page1");
    });

    const loginButton = document.getElementById("submitBtn");
    loginButton!.addEventListener("click", () => {
      this.handleLogin();
    });

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

  handleRegistration() {
    const usernameInput = document.getElementById(
      "user-name"
    ) as HTMLInputElement;
    const passwordInput = document.getElementById(
      "password"
    ) as HTMLInputElement;
    const addressInput = document.getElementById("address") as HTMLInputElement;
    const licensePlateInput = document.getElementById(
      "license-plate-number"
    ) as HTMLInputElement;
    const creditCardInput = document.getElementById(
      "credit-card"
    ) as HTMLInputElement;

    const username = usernameInput.value;
    const password = passwordInput.value;

    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    this.parkingView.showPage("page1");
  }

  handleLogin() {
    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");

    const usernameInput = document.getElementById(
      "username"
    ) as HTMLInputElement;
    const passwordInput = document.getElementById(
      "password"
    ) as HTMLInputElement;
    const feedbackElement = document.getElementById("feedback");

    const username = usernameInput.value;
    const password = passwordInput.value;

    if (username === storedUsername) {
      if (password === storedPassword) {
        this.parkingView.showPage("page3");
      } else {
        feedbackElement!.textContent = "Incorrect password.";
      }
    } else {
      feedbackElement!.textContent =
        "Registration required. Please register on the registration page.";
    }
  }
}
