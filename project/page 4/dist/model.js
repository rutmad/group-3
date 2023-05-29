//////////////////////////Register///////////////////////////////////
var UserData = /** @class */ (function () {
    function UserData(uid, userName, password, address, licensePlate, creditCard) {
        this.uid = uid;
        this.userName = userName;
        this.password = password;
        this.address = address;
        this.licensePlate = licensePlate;
        this.creditCard = creditCard;
    }
    return UserData;
}());
var userData = [];
///////////////////////////////////////////////////////////////////////////////
var TimerModel = /** @class */ (function () {
    function TimerModel() {
        this.seconds = 0;
        this.timer = 0;
        this.onUpdateCallback = function () { };
    }
    TimerModel.prototype.setOnUpdateCallback = function (callback) {
        this.onUpdateCallback = callback;
    };
    TimerModel.prototype.startTimer = function () {
        var _this = this;
        this.timer = setInterval(function () {
            _this.seconds++;
            _this.onUpdateCallback(_this.seconds);
        }, 1000);
    };
    TimerModel.prototype.stopTimer = function () {
        clearInterval(this.timer);
    };
    TimerModel.prototype.resetTimer = function () {
        this.seconds = 0;
        this.onUpdateCallback(this.seconds);
    };
    TimerModel.prototype.getSeconds = function () {
        return this.seconds;
    };
    TimerModel.prototype.getSecondsElapsed = function () {
        return this.seconds;
    };
    return TimerModel;
}());
var ParkingModel = /** @class */ (function () {
    function ParkingModel() {
        this.selectedCity = "";
        this.vehicleNumber = "";
    }
    ParkingModel.prototype.setSelectedCity = function (city) {
        this.selectedCity = city;
    };
    ParkingModel.prototype.setVehicleNumber = function (number) {
        this.vehicleNumber = number;
    };
    ParkingModel.prototype.getSelectedCity = function () {
        return this.selectedCity;
    };
    ParkingModel.prototype.getVehicleNumber = function () {
        return this.vehicleNumber;
    };
    return ParkingModel;
}());
