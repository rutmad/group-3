"use strict";

window.addEventListener("DOMContentLoaded", function () {
  var urlParams = new URLSearchParams(window.location.search);
  var cost = urlParams.get("cost");
  var time = urlParams.get("time");
  var costElement = document.getElementById("cost");
  var timeElement = document.getElementById("time");

  if (costElement && timeElement) {
    costElement.textContent = "$".concat(cost);
    timeElement.textContent = "".concat(time, " seconds");
  }
});