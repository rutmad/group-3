const wrapper = document.querySelector(".wrapper");
const loginLink = document.querySelector(".login-link");

loginLink.addEventListener("click", () => {
  wrapper.classList.remove("active");
});
