const form = document.getElementById("form");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const emailAddress = document.getElementById("emailAddress");
const password = document.getElementById("password");
const submitBtn = document.getElementById("submitBtn");
let errorFirst = document.querySelector(".first-name");
let errorLast = document.querySelector(".last-name");
let errorEmail = document.querySelector(".error-email");
let errorPassword = document.querySelector(".error-password");

form.addEventListener("submit", (e) => {
  // first name
  if (firstName.value === "" || firstName.value === null) {
    errorFirst.innerText = "First name cannot be empty";
    firstName.classList.add("error");
    e.preventDefault();
  } else {
    firstName.classList.add("success");
  }

  // last name
  if (lastName.value === "" || lastName.value === null) {
    errorLast.innerText = "Last name cannot be empty";
    lastName.classList.add("error");
    e.preventDefault();
  } else {
    firstName.classList.add("success");
  }

  // email address
  if (emailAddress.value === "" || emailAddress.value === null) {
    errorEmail.innerText = "Email cannot be empty";
    emailAddress.classList.add("error");
    e.preventDefault();
  } else if (emailAddress.value.includes("@") === false) {
    errorEmail.innerText = "Looks like this is not an email";
    emailAddress.classList.add("error");
    e.preventDefault();
  } else {
    emailAddress.classList.add("success");
  }

  // password
  if (password.value === "" || password.value === null) {
    errorPassword.innerText = "Password cannot be empty";
    password.classList.add("error");
    e.preventDefault();
  } else if (password.value.length <= 6) {
    errorPassword.innerText = "Password cannot be less than 6 characters";
    password.classList.add("error");
    e.preventDefault();
  } else {
    password.classList.add("success");
  }
});
let;
