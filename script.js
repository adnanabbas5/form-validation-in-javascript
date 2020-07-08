const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

function success(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

function checkRequired(input) {
  input.forEach(function (inp) {
    if (inp.value.trim() === "") {
      showError(inp, inp.id + " is required");
    } else {
      success(inp);
    }
  });
}

function checkEmail(input) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    success(input);
  } else {
    showError(input, "Email is not valid");
  }
}

function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(input, " Password must be atleast " + min + " characters");
  } else if (input.value.length > max) {
    showError(input, " Password must be less than " + max + " characters");
  } else {
    success(input);
  }
}

function checkPasswordMatch(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, "Password do not match");
  }
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  checkRequired([username, email, password, password2]);
  checkEmail(email);
  checkLength(password, 8, 15);
  checkPasswordMatch(password, password2);
});
