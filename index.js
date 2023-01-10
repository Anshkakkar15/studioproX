let body = document.getElementsByTagName("body");
let navigation = document.querySelector(".circle");
let Navigatinbutton = document.querySelector(".Navigatinbutton");
let navLinks = document.querySelector(".ulLinks");

navigation.addEventListener("click", function () {
  Navigatinbutton.classList.toggle("active");
  navLinks.classList.toggle("navActive");
});

let line = document.querySelector(".line");
let line1 = document.querySelector("#line1");
let line2 = document.querySelector("#line2");
line.addEventListener("click", function () {
  line1.classList.toggle("line1");
  line2.classList.toggle("line2");
});

window.addEventListener("load", function () {
  document.querySelector("body").classList.add("loaded");
});

let banner = document.querySelector(".banner");
let leftBanner = document.querySelector(".left-banner");
let rightBanner = document.querySelector(".right-banner");
let partners = document.querySelector(".partners");
let containerCard = document.querySelector(".container");
let team = document.querySelector(".team");
let teamImg = document.querySelector(".team-img");
let process = document.querySelector(".process");
let slider1 = document.querySelector(".main-container");

function interSectionObserver(component, className) {
  const observer = new IntersectionObserver(
    (entries) => {
      const ent = entries[0];
      ent.isIntersecting ? component.classList.add(className) : null;
    },
    {
      root: null,
      threshold: 0,
    }
  );
  observer.observe(component);
}
interSectionObserver(banner, "bannerIntersection");
interSectionObserver(leftBanner, "leftObserver");
interSectionObserver(rightBanner, "rightObserver");
interSectionObserver(partners, "partnerObserver");
interSectionObserver(containerCard, "containerCardObserver");
interSectionObserver(team, "teamObserver");
interSectionObserver(teamImg, "teamImgObserver");
interSectionObserver(process, "processIntersection");
interSectionObserver(process, "processIntersection");
interSectionObserver(slider1, "main-container-intersection");



const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  slidesPerView: 1,
  spaceBetween: 10,
});