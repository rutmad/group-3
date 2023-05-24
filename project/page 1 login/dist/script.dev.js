"use strict";

var wrapper = document.querySelector(".wrapper");
var loginLink = document.querySelector(".login-link");
loginLink.addEventListener("click", function () {
  wrapper.classList.remove("active");
});