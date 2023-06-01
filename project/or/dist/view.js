var TimerView = /** @class */ (function () {
    function TimerView(timerLabel, timerDisplay) {
        this.timerLabel = timerLabel;
        this.timerDisplay = timerDisplay;
        this.timerLabel = document.getElementById("timer-label");
        this.timerDisplay = document.getElementById("timer");
    }
    TimerView.prototype.showTimer = function () {
        var _a;
        this.timerLabel.textContent = "Time elapsed:";
        this.timerDisplay.textContent = "0 seconds";
        (_a = this.timerDisplay.parentElement) === null || _a === void 0 ? void 0 : _a.hidden = false;
    };
    TimerView.prototype.hideTimer = function () {
        var _a;
        (_a = this.timerDisplay.parentElement) === null || _a === void 0 ? void 0 : _a.hidden = true;
    };
    TimerView.prototype.updateTimerDisplay = function (seconds) {
        this.timerDisplay.textContent = seconds + " seconds";
    };
    TimerView.prototype.getFormattedTime = function (seconds) {
        var minutes = Math.floor(seconds / 60);
        var remainingSeconds = seconds % 60;
        return minutes + " minutes " + remainingSeconds + " seconds";
    };
    return TimerView;
}());
var ParkingView = /** @class */ (function () {
    function ParkingView() {
        this.citySelect = document.getElementById("city");
        this.vehicleNumberInput = document.getElementById("number");
        this.startParkingButton = document.getElementById("start-parking");
        this.endParkingButton = document.getElementById("end-parking");
        this.timerLabel = document.getElementById("timer-label");
        this.timerDisplay = document.getElementById("timer");
    }
    ParkingView.prototype.disableCitySelect = function () {
        this.citySelect.disabled = true;
    };
    ParkingView.prototype.enableCitySelect = function () {
        this.citySelect.disabled = false;
    };
    ParkingView.prototype.disableVehicleNumberInput = function () {
        this.vehicleNumberInput.disabled = true;
    };
    ParkingView.prototype.enableVehicleNumberInput = function () {
        this.vehicleNumberInput.disabled = false;
    };
    ParkingView.prototype.disableEndParkingButton = function () {
        this.endParkingButton.disabled = true;
    };
    ParkingView.prototype.enableEndParkingButton = function () {
        this.endParkingButton.disabled = false;
    };
    ParkingView.prototype.getSelectedCity = function () {
        return this.citySelect.value;
    };
    ParkingView.prototype.getVehicleNumber = function () {
        return this.vehicleNumberInput.value;
    };
    ParkingView.prototype.showPage = function (pageId) {
        var pages = document.querySelectorAll(".page");
        pages.forEach(function (page) {
            if (page.id === pageId) {
                page.style.display = "block";
            }
            else {
                page.style.display = "none";
            }
        });
    };
    return ParkingView;
}());
