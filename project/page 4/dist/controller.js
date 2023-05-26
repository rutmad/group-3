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
        window.location.href =
            "parkingSummary.html" +
                "?cost=" +
                totalTime * 0.01 +
                "&time=" +
                totalTime;
    };
    ParkingController.prototype.updateTimer = function () {
        var _this = this;
        var secondsElapsed = this.timerModel.getSecondsElapsed();
        this.timerView.updateTimerDisplay(secondsElapsed);
        setTimeout(function () {
            _this.updateTimer();
        }, 1000);
    };
    ParkingController.prototype.displayParkingSummary = function () {
        var urlParams = new URLSearchParams(window.location.search);
        var totalCost = urlParams.get("cost");
        var totalTime = urlParams.get("time");
        var costElement = document.querySelector(".parking__cost");
        var timeElement = document.querySelector(".parking__time");
        costElement.textContent = "Total cost: $" + totalCost;
        timeElement.textContent =
            "Time in the parking lot: " + totalTime + " hours";
    };
    return ParkingController;
}());
// class ParkingController {
//   private timerModel: TimerModel;
//   private parkingModel: ParkingModel;
//   private timerView: TimerView;
//   private parkingView: ParkingView;
//   constructor() {
//     this.timerModel = new TimerModel();
//     this.parkingModel = new ParkingModel();
//     this.timerView = new TimerView();
//     this.parkingView = new ParkingView();
//     this.parkingView.disableEndParkingButton();
//     this.parkingView.startParkingButton.addEventListener("click", () => {
//       this.startParking();
//     });
//     this.parkingView.endParkingButton.addEventListener("click", () => {
//       this.endParking();
//     });
//     this.timerModel.setOnUpdateCallback((seconds: number) => {
//       this.updateTimerDisplay(seconds);
//     });
//   }
//   startParking() {
//     const selectedCity = this.parkingView.getSelectedCity();
//     const vehicleNumber = this.parkingView.getVehicleNumber();
//     if (selectedCity && vehicleNumber) {
//       this.parkingModel.setSelectedCity(selectedCity);
//       this.parkingModel.setVehicleNumber(vehicleNumber);
//       this.parkingView.disableCitySelect();
//       this.parkingView.disableVehicleNumberInput();
//       this.parkingView.enableEndParkingButton();
//       this.timerView.showTimer();
//       this.timerModel.startTimer();
//     }
//   }
//   endParking() {
//     this.parkingView.enableCitySelect();
//     this.parkingView.enableVehicleNumberInput();
//     this.parkingView.disableEndParkingButton();
//     this.timerView.hideTimer();
//     this.timerModel.stopTimer();
//     this.timerModel.resetTimer();
//   }
//   updateTimerDisplay(seconds: number) {
//     this.timerView.updateTimerDisplay(seconds);
//   }
// }
