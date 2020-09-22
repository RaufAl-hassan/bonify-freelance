// UI variables
const togglerIcon = document.querySelector(".navbar-toggler-icon");
const mainNavbarLinksWrapper = document.querySelector(
  ".navbar-left-right-links-wrapper"
);
const mainNavbar = document.querySelector(".main-navbar");
const mainHeader = document.querySelector(".main-header");
const sliders = document.querySelectorAll(
  ".fade-out-left, .fade-out-right, .fade-out-middle"
);

// handle navbar toggle
togglerIcon.addEventListener("click", () =>
  mainNavbarLinksWrapper.classList.toggle("show-navbar-links")
);

// navbar intersection Observer
const mainNavbarInterSectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        mainNavbar.classList.add("main-navbar-section-observer");
      } else {
        mainNavbar.classList.remove("main-navbar-section-observer");
      }
    });
  },
  {
    rootMargin: "-300px 0px 0px 0px",
  }
);
mainNavbarInterSectionObserver.observe(mainHeader);

// sliders
const sliderIntersectionObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("fade-in");
      observer.observe(entry.target);
    });
  },
  { rootMargin: "-200px 0px -100px 0px" }
);
sliders.forEach((slider) => {
  sliderIntersectionObserver.observe(slider);
});
