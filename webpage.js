///////webpage
const buttonSwitch = document.querySelector(".nav-icon");
const navigator = document.querySelector(".main-header");
const stickynav = document.querySelector(".sticky-content");
//all section
const allsect = document.querySelectorAll("section");
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

//revealsection

const revealsect = function (entries, observer) {
  const [entry] = entries;
  console.log(entry);
  if (!entry.isIntersecting) return;
  entry.target.classList.add("sum2");
};

const sectReaveal = new IntersectionObserver(revealsect, {
  root: null,
  threshold: 0.15,
});

allsect.forEach(function (section) {
  sectReaveal.observe(section);
  section.classList.add("reveal");
  section.classList.add("sum3");
});

//sticky

const navheight = stickynav.getBoundingClientRect().height;

console.log(navheight);

const stickTO = function (entries) {
  const [entry] = entries;
  console.log(entry);
  if (entry.isIntersecting) stickynav.classList.add("sum3");
  else stickynav.classList.remove("sum3");
};

const interStick = new IntersectionObserver(stickTO, {
  root: null,
  threshold: 0.15,
  rootMargin: `-${navheight}px`,
});
interStick.observe(navigator);
