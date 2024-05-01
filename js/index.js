let state = true;
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

function handleRegisterAndSignin(setActive, setPassive) {
  //   alert();
  let active = document.querySelector(`.${setActive}`);
  let passive = document.querySelector(`.${setPassive}`);
  active.style.display = "block";
  passive.style.display = "none";
}
