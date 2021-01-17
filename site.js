$(function () {
  AOS.init();
});

var hamburger;
var mobile_menu;
var header;

$(document).ready(function () {
  hamburger = document.querySelector(".header .nav-bar .nav-list .hamburger");
  mobile_menu = document.getElementById("hamburger-list");
  header = document.querySelector(".header.container");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mobile_menu.classList.toggle("active");
  });

  document.addEventListener("scroll", () => {
    var scroll_position = window.scrollY;
    if (scroll_position > 250) {
      header.style.backgroundColor = "#29323c";
    } else {
      header.style.backgroundColor = "transparent";
    }
  });
});

function toggleHamburger() {
  hamburger.classList.toggle('active');
  mobile_menu.classList.toggle("active");
}
