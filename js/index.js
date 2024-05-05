let state = true;

// registerBtn.addEventListener("click", (event) => {
//   event.target.style.backgroundColor = "rgb(68, 68, 122)";
//   event.target.style.color = "white";
//   signinBtn.style.backgroundColor = "white";
//   signinBtn.style.color = "black";
// });
// signinBtn.addEventListener("click", (event) => {
//   event.target.style.backgroundColor = "rgb(68, 68, 122)";
//   event.target.style.color = "white";
//   registerBtn.style.backgroundColor = "white";
//   registerBtn.style.color = "black";
// });

function toggle() {
  state = !state;
  let sideNav = document.querySelector(".side-bar");
  let topNav = document.querySelector(".top-navbar");
  let section = document.querySelector(".section");
  console.log(section);
  if (state) {
    sideNav.style.width = "250px";
    section.style.marginLeft = "250px";
    section.style.width = "calc(100% - 250px)";
    topNav.style.width = "calc(100% - 250px)";
    topNav.style.left = "250px";
  } else {
    sideNav.style.width = "0";
    section.style.marginLeft = "0";
    section.style.width = "100%";
    topNav.style.left = "0";
    topNav.style.width = "100%";
  }
}

function handleRegisterAndSignin(setActive, setPassive, btnActive, btnPassive) {
  //   alert();
  let active = document.querySelector(`.${setActive}`);
  let btn1 = document.getElementById(btnActive);
  console.log(btn1);
  active.style.display = "block";
  btn1.setAttribute("class", "active");
  console.log(btnPassive);

  let passive = document.querySelector(`.${setPassive}`);
  let btn2 = document.getElementById(btnPassive);
  console.log(btn2);
  passive.style.display = "none";
  btn2.setAttribute("class", "");
}

function handleSubmit(event) {
  event.preventDefault();
  //!==> We can select a form directly using "document.forms" , which will give us the a list of forms present in our html file inside a "HTMLCollection" . Now if you give "name" attribute to each form than we can directly select each form as shown below by directly writing the value present inside "name" attribut with the help of "document.forms.nae_attribute_value_here" .   The elements gives us all the "html element" present inside
  let registerForm = document.forms.registerForm;
  let elements = document.forms.registerForm.elements;
  let user = {};

  let name = elements.name;
  let nameMessage = document.getElementById("name-message");

  let email = elements.email;
  let emailMessage = document.getElementById("email-message");

  let password = elements.password;
  let passwordMessage = document.getElementById("password-message");

  if (name.value.trim().length == 0) {
    name.style.border = "1px solid red";
    nameMessage.textContent = "Name is required !";
    nameMessage.style.color = "red";
    nameMessage.style.display = "block";
  } else if (email.value.trim().length == 0) {
    email.style.border = "1px solid red";
    emailMessage.style.color = "red";
    emailMessage.textContent = "Email required !";
    emailMessage.style.display = "block";
  } else if (password.value.trim().length == 0) {
    password.style.border = "1px solid red";
    passwordMessage.style.color = "red";
    passwordMessage.textContent = "Password required !";
    passwordMessage.style.display = "block";
  } else if (password.value.length < 8) {
    password.style.border = "1px solid red";
    passwordMessage.style.color = "red";
    passwordMessage.textContent = "Password length must be atleast 8 letters";
    passwordMessage.style.display = "block";
  } else {
    user.name = name.value.trim();
    user.email = email.value.trim();
    user.password = password.value.trim();
    console.log(user);
  }
}

function handleInput(inputElement, errorMessageId) {
  let errorMessage = document.getElementById(errorMessageId);
  inputElement.style.border = "1px solid grey";
  errorMessage.style.textContent = "";
  errorMessage.style.color = "black";
  errorMessage.style.display = "none";
}

function handlePassword(password, icon) {
  let passwordIcon = document.getElementById(icon);
  console.log(passwordIcon);
  let passwordField = document.getElementById(password);
  if (passwordField.type == "password") {
    passwordField.type = "text";
    passwordIcon.className = "fa fa-eye-slash";
  } else if (passwordField.type == "text") {
    passwordField.type = "password";
    passwordIcon.className = "fa fa-eye";
  }
}

function handleSignin(event) {
  event.preventDefault();
  let form = document.forms.signinForm;

  let email = form.elements.email;
  let emailMessage = document.getElementById("signin-email-message");

  let password = form.elements.password;
  let passwordMessage = document.getElementById("signin-password-message");

  if (email.value.trim().length == 0) {
    email.style.border = "1px solid red";
    emailMessage.textContent = "Email required !";
    emailMessage.style.color = "red";
    emailMessage.style.display = "block";
  } else if (password.value.trim().length == 0) {
    password.style.border = "1px solid red";
    passwordMessage.style.color = "red";
    passwordMessage.textContent = "Password is required !";
    passwordMessage.style.display = "block";
  } else if (password.value.trim().length < 8) {
    passwordMessage.style.color = "red";
    passwordMessage.textContent = "Password should be atleast 8 character";
    password.style.border = "1px solid red";
    passwordMessage.style.display = "block";
  }
}
