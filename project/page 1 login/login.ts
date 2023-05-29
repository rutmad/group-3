if (localStorage.getItem("user"))
  window.location.href = "http://localhost:5500/project/page-3/parking.html";

const currentData = JSON.parse(localStorage.getItem("users") || "[]");
const submitBtn = document.getElementById("submitBtn") as HTMLInputElement;
submitBtn.onclick = (e) => handleSubmit(e);
function login(userName, password) {
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

const hello = () => {
  console.log("hello");
};
function handleSubmit(e: Event) {
  e.preventDefault();
  const username = document.getElementById("username") as HTMLInputElement;
  const password = document.getElementById("password") as HTMLInputElement;
  const loginResult = login(username.value, password.value);
  if (loginResult.user) {
    localStorage.setItem("user", JSON.stringify(loginResult.user));
    window.location.href = "http://localhost:5500/project/page-3/parking.html";
  }
  const feedback = document.getElementById("feedback") as HTMLParagraphElement;
  feedback.innerText = loginResult.message;
}
