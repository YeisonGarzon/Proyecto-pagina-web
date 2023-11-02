const icono = document.getElementById("icono_menu");
const menu = document.getElementById("menu_ul");

icono.addEventListener("click", () => {
    menu.classList.toggle("menu_ul-show");
})