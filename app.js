const burger = document.querySelector(".nav__burger");
const links = document.querySelector(".nav__list");
const nav = document.querySelector(".nav");
const social = document.querySelector(".social--mid");

const fixNav = () => {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    nav.classList.add("shrink");
  } else {
    nav.classList.remove("shrink");
  }
};

const toggleLinks = () => {
  links.classList.toggle("active");
  burger.classList.toggle("toggle");
};

function inViewport(element) {
  let bb = element.getBoundingClientRect();
  return !(bb.top > innerHeight || bb.bottom < 0);
}

window.addEventListener("scroll", fixNav);

burger.addEventListener("click", toggleLinks);

document.addEventListener("scroll", (e) => {
  if (inViewport(social)) {
    social.classList.add("show--icon");
    setTimeout(() => {
      social.classList.remove("show--icon");
    }, 1000);
  }
});
