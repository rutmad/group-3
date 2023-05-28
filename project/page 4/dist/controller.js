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