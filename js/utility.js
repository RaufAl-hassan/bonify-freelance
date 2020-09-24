// UI variables
const togglerIcon = document.querySelector(".navbar-toggler-icon");
const NavbarLinksWrapper = document.querySelector(".navbar-links-wrapper");

// handle navbar toggle
togglerIcon.addEventListener("click", () =>
  // mainNavbarLinksWrapper.classList.toggle("show-navbar-links") ||
  NavbarLinksWrapper.classList.toggle("show-navbar-links")
);
