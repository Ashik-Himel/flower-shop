const navToggler = document.querySelector(".header-section .fa-bars");
const navMenu = document.querySelector(".header-section nav ul");
const navLink = document.querySelectorAll(".header-section nav ul a");
const heroSection = document.querySelector(".header-section .hero-section");

navToggler.addEventListener("click", ()=> {
  if (!(navMenu.classList.contains("active"))) {
    heroSection.style.marginTop = "260px";
    heroSection.style.transition = "margin-top 0.3s ease";
  }
  else {
    heroSection.style.marginTop = "0";
  }
  navMenu.classList.toggle("active");
})

navLink.forEach(n => n.addEventListener("click", ()=> {
  heroSection.style.marginTop = "0";
  navMenu.classList.remove("active");
}))