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

/* ================  ================== */
