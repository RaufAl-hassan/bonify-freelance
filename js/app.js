// UI variables
const togglerIcon = document.querySelector(".navbar-toggler-icon");
const navbar = document.querySelector(".navbar-left-right-links-wrapper");

// handle navbar toggle
togglerIcon.addEventListener("click", () => {
  console.log(123);
  navbar.classList.toggle("show-navbar-links");
});
