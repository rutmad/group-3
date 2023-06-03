var ParkingController = /** @class */ (function () {
    function ParkingController() {
        var _this = this;
        this.parkingView = new ParkingView();
        this.timerModel = new TimerModel();
        this.parkingModel = new ParkingModel();
        this.timerView = new TimerView();
        var goToRegisterButton = document.getElementById("goToRegister_button");
        goToRegisterButton.addEventListener("click", function () {
            _this.parkingView.showPage("registrationPage");
        });
        var register_button = document.getElementById("register_button");
        register_button.addEventListener("click", function () {
            _this.addUser();
            _this.parkingView.showPage("loginPage");
        });
        var loginButton = document.getElementById("submitBtn");
        loginButton.addEventListener("click", function () {
            _this.handleLogin();
        });
        this.parkingView.startParkingButton.addEventListener("click", function () {
            _this.startParking();
        });
        this.parkingView.endParkingButton.addEventListener("click", function () {
            _this.endParking();
        });
    }
    ParkingController.prototype.startParking = function () {
        var selectedCity = this.parkingView.citySelect.value;
        var vehicleNumber = this.parkingView.vehicleNumberInput.value;
        if (selectedCity && vehicleNumber) {
            this.parkingView.citySelect.disabled = true;
            this.parkingView.vehicleNumberInput.disabled = true;
            this.parkingView.endParkingButton.disabled = false;
            this.parkingView.timerLabel.textContent = "Time elapsed:";
            this.parkingView.timerDisplay.parentElement.hidden = false;
            this.timerModel.startTimer();
            this.updateTimer();
        }
    };
    ParkingController.prototype.endParking = function () {
        this.parkingView.citySelect.disabled = false;
        this.parkingView.vehicleNumberInput.disabled = false;
        this.parkingView.endParkingButton.disabled = true;
        this.timerModel.stopTimer();
        var totalTime = this.timerModel.getSecondsElapsed();
        this.displayParkingSummary(totalTime, "");
    };
    ParkingController.prototype.displayParkingSummary = function (totalTime, totalCost) {
        totalCost = totalTime * 0.01;
        this.parkingView.showPage("parkingSummaryPage");
        var costElement = document.getElementById("cost");
        var timeElement = document.getElementById("time");
        costElement.textContent = "Total cost: $" + totalCost.toFixed(2);
        timeElement.textContent =
            "Total time: " + this.timerView.getFormattedTime(totalTime);
        this.timerModel.resetTimer();
        this.parkingView.enableCitySelect();
        this.parkingView.enableVehicleNumberInput();
        this.parkingView.disableEndParkingButton();
    };
    ParkingController.prototype.updateTimer = function () {
        var _this = this;
        var secondsElapsed = this.timerModel.getSecondsElapsed();
        this.timerView.updateTimerDisplay(secondsElapsed);
        setTimeout(function () {
            _this.updateTimer();
        }, 1000);
    };
    ParkingController.prototype.addUser = function () {
        var userNameInput = document.getElementById("user-name");
        var passwordInput = document.getElementById("user-password");
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
        var frm = document.getElementById("form");
        frm.addEventListener("submit", addUser);
        var storedUserData = localStorage.getItem("userData");
        if (storedUserData) {
            userData = JSON.parse(storedUserData);
        }
        this.parkingView.showPage("loginPage");
    };
    ParkingController.prototype.handleLogin = function () {
        var storedUserData = localStorage.getItem("userData");
        var usernameInput = document.getElementById("username");
        var passwordInput = document.getElementById("password");
        var feedbackElement = document.getElementById("feedback");
        var username = usernameInput.value;
        var password = passwordInput.value;
        if (storedUserData) {
            var userData = JSON.parse(storedUserData);
            var foundUser = userData.find(function (bobo) { return bobo.userName === username; });
            if (foundUser) {
                if (password === foundUser.password) {
                    this.parkingView.showPage("parkingActivationPage");
                }
                else {
                    feedbackElement.textContent = "Incorrect password.";
                }
            }
            else {
                feedbackElement.textContent = "User not found.";
            }
        }
        else {
            feedbackElement.textContent =
                "Registration required. Please register on the registration page.";
        }
    };
    return ParkingController;
}());
