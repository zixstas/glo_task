const burger = document.querySelector(".humburger-menu");
const menu = document.querySelector(".menu");

let open = true;

burger.addEventListener("click", () => {
    if (open) {
        menu.classList.add("menu-active");
        open = false;
    } else {
        menu.classList.remove("menu-active");
        open = true;
    }
});
document.addEventListener("click", (event) => {
    if (!(event.target.closest(".menu") || event.target.closest(".humburger-menu"))) {
        menu.classList.remove("menu-active");
    }
});