const navbar = document.querySelector("nav");
const openmenu = document.getElementById("menu-button");
const closemenu = document.getElementById("menu-close");
const body = document.getElementById("body")
openmenu.addEventListener("click", () => {
    navbar.classList.add("open")
    navbar.style.display="block"
    openmenu.style.display="none"
   body.style.backgroundColor="rgba(38, 38, 38, 0.296)"
});
closemenu.addEventListener("click", () => {
    navbar.classList.add("open")
    navbar.style.display="none"
    openmenu.style.display="block"
    body.style.backgroundColor="white"
});
