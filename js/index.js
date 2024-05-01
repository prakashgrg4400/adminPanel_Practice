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
