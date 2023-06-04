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
      this.parkingView.showPage("registrationPage");
    });

    const register_button = document.getElementById("register_button");
    register_button!.addEventListener("click", () => {
      this.parkingView.showPage("loginPage");
      this.addUser();
    });

    const Activity = document.getElementById("activityTimeButton");
    Activity!.addEventListener("click", () => {
      this.parkingView.showPage("activityTimePage");
    });

    const parkingPrice = document.getElementById("parkingPriceButton");
    parkingPrice!.addEventListener("click", () => {
      this.parkingView.showPage("parkingPriceListPage");
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
    console.log(selectedCity);

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
    const selectedCity = this.parkingView.citySelect.value;
    totalCost = totalTime * Number(selectedCity);

    this.parkingView.showPage("parkingSummaryPage");

    const costElement = document.getElementById("cost");
    const timeElement = document.getElementById("time");

    costElement!.textContent = "Total cost: $" + totalCost.toFixed(2);
    timeElement!.textContent =
      "Total time: " + this.timerView.getFormattedTime(totalTime);

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

  addUser() {
    const userNameInput = document.getElementById(
      "user-name"
    ) as HTMLInputElement;
    const passwordInput = document.getElementById(
      "user-password"
    ) as HTMLInputElement;
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
    const frm = document.getElementById("form") as HTMLFormElement;
    frm.addEventListener("submit", addUser);
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      userData = JSON.parse(storedUserData);
    }
    this.parkingView.showPage("loginPage");
  }

  handleLogin() {
    const storedUserData = localStorage.getItem("userData");
    const usernameInput = document.getElementById(
      "username"
    ) as HTMLInputElement;
    const passwordInput = document.getElementById(
      "password"
    ) as HTMLInputElement;
    const feedbackElement = document.getElementById("feedback");

    const username = usernameInput.value;
    const password = passwordInput.value;

    if (storedUserData) {
      const userData = JSON.parse(storedUserData);

      const foundUser = userData.find(
        (bobo: UserData) => bobo.userName === username
      );

      if (foundUser) {
        if (password === foundUser.password) {
          this.parkingView.showPage("parkingActivationPage");
        } else {
          feedbackElement!.textContent = "Incorrect password.";
        }
      } else {
        feedbackElement!.textContent = "User not found.";
      }
    } else {
      feedbackElement!.textContent =
        "Registration required. Please register on the registration page.";
    }
  }
}
