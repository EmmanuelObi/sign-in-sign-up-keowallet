const form = document.getElementById("form");
const email = document.getElementById("Email");
const fullName = document.getElementById("Fullname");
const phoneNumber = document.getElementById("Phone-number");
const password = document.getElementById("password");
const cPassword = document.getElementById("Cpassword");
const NIN = document.getElementById("NIN");

// show the error and success outlines
function showError(input, message) {
  const formGroup = input.parentElement;
  formGroup.className = "form-group error";
  const small = formGroup.querySelector("small");
  small.innerText = message;
}

function showSuccess(input) {
  const formGroup = input.parentElement;
  formGroup.className = "form-group success";
}

// check if email is valid

function checkEmail(input) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, "Email is not Valid");
  }
}

// check required inputs

function checkRequired(inputArr) {
  inputArr.forEach((input) => {
    if (input.value.trim() === "") {
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
}

// check length of inputs

function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(
      input,
      `${getFieldName(input)} must be at least ${min} characters`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFieldName(input)} must be less than ${max} characters`
    );
  } else {
    showSuccess(input);
  }
}
// check passwords

function checkPasswordsMatch(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, "Passwords do not match");
  }
}

// getFieldName

function getFieldName(input) {
  return input.id.charAt(0).toUppercase() + input.id.slice(1);
}

// Event Listeners
form.addEventListener("click", function (e) {
  e.preventDefault();
  checkRequired([fullName, email, phoneNumber, NIN, password, cPassword]);
  checkLength(fullName, 3, 15);
  checkLength(password, 6, 25);
  checkLength(NIN, 10, 10);
  checkEmail(email);
  checkPasswordsMatch(password, cPassword);
});
