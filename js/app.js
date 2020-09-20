// UI variables
const togglerIcon = document.querySelector(".navbar-toggler-icon");
const mainNavbarLinksWrapper = document.querySelector(
  ".navbar-left-right-links-wrapper"
);
const mainNavbar = document.querySelector(".main-navbar");
const mainHeader = document.querySelector(".main-header");

// handle navbar toggle
togglerIcon.addEventListener("click", () =>
  mainNavbarLinksWrapper.classList.toggle("show-navbar-links")
);

// navbar intersection Observer
const mainNavbarSectionObserver = new IntersectionObserver(
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
    rootMargin: "-100px 0px 0px 0px",
  }
);

mainNavbarSectionObserver.observe(mainHeader);
