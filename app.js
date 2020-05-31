const burger = document.querySelector(".burger");
const links = document.querySelector(".list");
const nav = document.querySelector(".nav");
const social = document.querySelector(".social-mid");
const slide = document.querySelector(".slide");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const mq = window.matchMedia("(max-width: 768px)");
const form = document.querySelector(".contact-form");
const submit = document.querySelector(".submit");
const inputs = document.querySelectorAll("input");
const success = document.querySelector(".success");
const error = document.querySelectorAll(".error");
let index = 0;
let transCount;
let slideInternal;
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

const nextSlide = () => {
  if (!mq.matches && index > 2) {
    index = -1;
  }
  mq.matches ? (transCount = -100) : (transCount = -33.3);
  index < 5 ? index++ : (index = 0);
  slide.style.transform = `translate(${index * transCount}%)`;
};

const prevSlide = () => {
  if (!mq.matches && index === 0) {
    index = 4;
  }
  mq.matches ? (transCount = -100) : (transCount = -33.3);
  index > 0 ? index-- : (index = 5);
  slide.style.transform = `translate(${index * transCount}%)`;
};

if (auto) {
  slideInternal = setInterval(nextSlide, 2000);
}

const sendMessage = () => {
  inputs.forEach((input, i) => {
    if (input.value === "") {
      success.classList.remove("show");
      error[i].classList.add("show");
      setTimeout(() => {
        error[i].classList.remove("show");
      }, 3000);
    } else {
      success.classList.add("show");
    }
  });
};

window.addEventListener("scroll", fixNav);

burger.addEventListener("click", toggleLinks);

document.addEventListener("scroll", (e) => {
  if (inViewport(social)) {
    social.classList.add("show-icon");
    setTimeout(() => {
      social.classList.remove("show-icon");
    }, 1000);
  }
});

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

form.addEventListener("submit", (e) => {
  e.preventDefault();
  sendMessage();
});
