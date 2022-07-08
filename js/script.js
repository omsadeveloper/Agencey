/* ================ add scrolled effect on nav-bar ================== */

var myNav = document.getElementById("nav-bar");

window.onscroll = function () {
  "use strict";
  if (
    document.body.scrollTop >= 120 ||
    document.documentElement.scrollTop >= 120
  ) {
    myNav.classList.add("scrolled");
  } else {
    myNav.classList.remove("scrolled");
  }
};

/* ================ show navbar on tablet and mobile ================== */
const bar = document.getElementById("bar");
const nav = document.getElementById("rs-nav");
var toggle = document.getElementsByClassName("toggle");

if (bar) {
  bar.addEventListener("click", () => {
    if (toggle[0].style.display != "none") {
      nav.classList.remove("hide-nav");
      toggle[0].style.display = "none";
      toggle[1].style.display = "inline-block";
    } else {
      nav.classList.add("hide-nav");
      toggle[0].style.display = "inline-block";
      toggle[1].style.display = "none";
    }
  });
}
