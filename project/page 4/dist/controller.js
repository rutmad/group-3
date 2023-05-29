//////////////////////////Register///////////////////////////////////
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
    localStorage.setItem("userData", JSON.stringify(userData));
}
var frm = document.getElementById("form");
frm.addEventListener("submit", addUser);
var btn = document.getElementById("register_button");
btn.addEventListener("click", function () {
    window.location.href = "../page 1 login/login.html";
});
///////////////////////////////////////////////////////////////////////////////
var ParkingController = /** @class */ (function () {
    function ParkingController() {
        var _this = this;
        this.parkingView = new ParkingView();
        this.timerModel = new TimerModel();
        this.parkingModel = new ParkingModel();
        this.timerView = new TimerView();
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
        this.parkingView.timerDisplay.parentElement.hidden = true;
        this.timerModel.stopTimer();
        var totalTime = this.timerModel.getSecondsElapsed();
        this.displayParkingSummary(totalTime, "");
    };
    ParkingController.prototype.displayParkingSummary = function (totalTime, totalCost) {
        totalCost = totalTime * 0.01;
        this.parkingView.showPage("page4");
        var costElement = document.getElementById("cost");
        var timeElement = document.getElementById("time");
        costElement.textContent = "Total cost: $" + totalCost.toFixed(2);
        timeElement.textContent = totalTime + " seconds";
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
    return ParkingController;
}());
