"use strict";

const input = document.querySelector(".email-input");
const errorMsg = document.querySelector(".error-message");
const notifyBtn = document.querySelector(".notify-btn");

const validEmail =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
notifyBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (input.value.length === 0) {
    console.log(`Hey`);
    errorMsg.textContent = "Whoops! It looks like you forgot to add your email";
    errorMsg.classList.add("active");
    input.classList.add("error-border");
  } else {
    if (!input.value.match(validEmail)) {
      errorMsg.textContent = "Please provide a valid email address";
      errorMsg.classList.add("active");
      input.classList.add("error-border");
    } else {
      input.classList.remove("error-border");
      errorMsg.classList.remove("active");
    }
  }
});
