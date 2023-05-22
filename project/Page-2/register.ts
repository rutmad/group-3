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

const userData: UserData[] = [];

function addUser(event: Event) {
  event.preventDefault();
  const userNameInput = document.getElementById(
    "user-name"
  ) as HTMLInputElement;
  const passwordInput = document.getElementById("password") as HTMLInputElement;
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
  console.log(userData);
}

const form = document.getElementById("form") as HTMLFormElement;
form.addEventListener("submit", addUser);
