const burger = document.querySelector(".nav__burger");
const links = document.querySelector(".nav__list");
const nav = document.querySelector(".nav");
const social = document.querySelector(".social--mid");
const slide = document.querySelector(".reviews__slide");
const prev = document.querySelector(".reviews__prev");
const next = document.querySelector(".reviews__next");
let auto = true;

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

const inViewport = (element) => {
  let bb = element.getBoundingClientRect();
  return !(bb.top > innerHeight || bb.bottom < 0);
};

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

let index = 0;
let slideInternal;

const nextSlide = () => {
  if (index === 0) {
    index++;
    slide.style.transform = "translate(-100%)";
    console.log(index);
  } else {
    index--;
    slide.style.transform = "translate(0%)";
    console.log(index);
  }
};

const prevSlide = () => {
  if (index === 1) {
    slide.style.transform = "translate(0)";
    index--;
  } else {
    slide.style.transform = "translate(-100%)";
    index++;
  }
};

if (auto) {
  slideInternal = setInterval(nextSlide, 2000);
}

next.addEventListener("click", (e) => {
  nextSlide();
  if (auto) {
    clearInterval(slideInternal);
    slideInternal = setInterval(nextSlide, 2000);
  }
});
prev.addEventListener("click", (e) => {
  prevSlide();
  if (auto) {
    clearInterval(slideInternal);
    slideInternal = setInterval(nextSlide, 2000);
  }
});
