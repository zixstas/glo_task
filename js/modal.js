  const  modalButton = document.querySelectorAll(".more")
const modal = document.querySelector(".modal");
const overlay = modal.querySelector(".overlay");
const modalClose = modal.querySelector(".modal__close");;

modalButton.forEach((element) => {
    element.addEventListener("click", () => {
        modal.classList.remove("hidden");
    })
})

modalClose.addEventListener("click", () => {
    modal.classList.add("hidden");
})
overlay.addEventListener("click", () => {
    modal.classList.add("hidden");
})
