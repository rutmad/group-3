class TimerModel {
  constructor(
    private seconds: number,
    private timer: number,
    private onUpdateCallback: (seconds: number) => void
  ) {
    this.seconds = 0;
    this.timer = 0;
    this.onUpdateCallback = () => {};
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
  constructor(private selectedCity: string, private vehicleNumber: string) {
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

////////////////////////////////////LOGIN////////////////////////////////////////
function login(userName, password) {
  console.log(userName + password);
  const loggedInUser = currentData.filter(
    (user) => user.userName === userName && user.password === password
  );
  console.log(loggedInUser);
  if (loggedInUser.length === 0) {
    return {
      message: "username or password is incorrect.",
      user: null,
    };
  }
  return {
    message: "Logged in successfully.",
    user: loggedInUser[0],
  };
}
//////////////////////////////////////////////////////////////////////////////////
