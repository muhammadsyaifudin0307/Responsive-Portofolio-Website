const hamburgerMenu = document.querySelector(".hamburger-menu");
const navbar = document.querySelector(".nav-list");

hamburgerMenu.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

document.addEventListener("click", (event) => {
  if (!navbar.contains(event.target) && !hamburgerMenu.contains(event.target)) {
    navbar.classList.remove("active");
  }
});
