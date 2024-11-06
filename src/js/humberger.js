const hamburgerMenu = document.querySelector(".hamburger-menu");
const navbar = document.querySelector(".nav-list");

hamburgerMenu.addEventListener("click", () => {
  navbar.classList.toggle("active");
});
