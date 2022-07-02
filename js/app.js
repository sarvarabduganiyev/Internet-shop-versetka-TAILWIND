const callToActionBtns = document.querySelectorAll(".button-current");
const paginator = document.querySelectorAll(".paginator");
const menus = document.querySelector(".menus");
const burgerBtn = document.querySelector(".burgerBtn");
const body = document.querySelector("body");

callToActionBtns.forEach((btn, _, AllBtn) => {
  btn.onclick = (e) => {
    if (btn.classList.toggle("button__active"))
      AllBtn.forEach((btx) =>
        btx.classList.toggle("button__active", btx === btn)
      );
  };
});
paginator.forEach((btn, _, AllBtn) => {
  btn.onclick = (e) => {
    if (btn.classList.toggle("paginator__active"))
      AllBtn.forEach((btx) =>
        btx.classList.toggle("paginator__active", btx === btn)
      );
  };
});
burgerBtn.addEventListener("click", () => {
  menus.classList.toggle("menus__active");
  body.classList.toggle("overflow-hidden");
});
// ranege js
var elm = document.querySelector("input");
var container = elm.parentNode;
var values = elm.getAttribute("data-values").split(" ");

values.forEach(function (value, i, values) {
  var rangePart = elm.cloneNode();
  rangePart.type = "range";
  rangePart.removeAttribute("data-values");
  rangePart.value = value;
  rangePart = container.insertBefore(rangePart, elm);
});

elm.remove();
// range js

function openCity(evt, cityName = "London") {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}
