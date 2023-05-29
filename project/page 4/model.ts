//////////////////////////Register///////////////////////////////////
class UserData {
  constructor(
    public uid: number,
    public userName: string,
    public password: string,
    public address: string,
    public licensePlate: number,
    public creditCard: number
  ) {}
}

let userData: UserData[] = [];
///////////////////////////////////////////////////////////////////////////////

class TimerModel {
  private seconds: number;
  private timer: number;
  private onUpdateCallback: (seconds: number) => void;

  constructor() {
    this.seconds = 0;
    this.timer = 0;
    this.onUpdateCallback = () => {};
  }

  setOnUpdateCallback(callback: (seconds: number) => void) {
    this.onUpdateCallback = callback;
  }

  startTimer() {
    this.timer = setInterval(() => {
      this.seconds++;
      this.onUpdateCallback(this.seconds);
    }, 1000);
  }

  stopTimer() {
    clearInterval(this.timer);
  }

  resetTimer() {
    this.seconds = 0;
    this.onUpdateCallback(this.seconds);
  }

  getSeconds(): number {
    return this.seconds;
  }

  getSecondsElapsed() {
    return this.seconds;
  }
}

class ParkingModel {
  private selectedCity: string;
  private vehicleNumber: string;

  constructor() {
    this.selectedCity = "";
    this.vehicleNumber = "";
  }

  setSelectedCity(city: string) {
    this.selectedCity = city;
  }

  setVehicleNumber(number: string) {
    this.vehicleNumber = number;
  }

  getSelectedCity(): string {
    return this.selectedCity;
  }

  getVehicleNumber(): string {
    return this.vehicleNumber;
  }
}
