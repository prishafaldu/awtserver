function validateForm() {
  var fullName = document.getElementById("fullName").value;
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirmPassword").value;
  var gender = document.querySelector('input[name="gender"]:checked');
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;
  var state = document.getElementById("state").value;
  var agreement = document.getElementById("agreement").checked;
  var errorMessages = "";

  
  // Regular expressions for validation
  var name1 = /^[A-Za-z ]+$/;
  var username1 = /^[A-Za-z0-9]+$/;
  var password1 =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,10}$/;
  var phone1 = /^[5-9][0-9]{9}$/;
  var email1 = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!fullName.match(name1)) {
    errorMessages += "Invalid Full Name. ";
  }
  if (!username.match(username1)) {
    errorMessages += "Invalid Username. ";
  }
  if (!password.match(password1)) {
    errorMessages += "Invalid Password. ";
  }
  if (password !== confirmPassword) {
    errorMessages += "Passwords do not match. ";
  }
  if (!gender) {
    errorMessages += "Please select a gender. ";
  }
  if (!phone.match(phone1)) {
    errorMessages += "Invalid Phone No. ";
  }
  if (!email.match(email1)) {
    errorMessages += "Invalid Email. ";
  }
  if (state === "") {
    errorMessages += "Please select a state. ";
  }

  if (!agreement) {
    errorMessages += "Please accept the agreement. ";
  }

  var errorElement = document.getElementById("errorMessages");
  errorElement.innerHTML = errorMessages;

  if (errorMessages === "") {
    window.location.href = "login.html";
  }
}

module.exports = validateForm;
