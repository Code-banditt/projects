///////webpage
const buttonSwitch = document.querySelector(".nav-icon");
const navigator = document.querySelector(".main-header");

//
const advertOne = document.querySelector(".Advert-section");

//
const arrowUp = document.querySelector("#footer-header-nav");

// side bar

buttonSwitch.addEventListener("click", function () {
  navigator.classList.toggle("nav-open");
});

//sticky nav

setTimeout(
  function () {
    window.addEventListener("", function () {
      advertOne.classList.toggle("advert-open");
    });
  } * 1000
);

// scroll up

arrowUp.addEventListener("click", function (e) {
  const cords = navigator.getBoundingClientRect();
  console.log(cords);

  console.log(e.target.getBoundingClientRect());

  console.log("currentScroll(X/Y)", window.pageXOffset, window.pageYOffset);
  navigator.scrollIntoView({ behavior: "smooth" });
});
