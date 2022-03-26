const TubButton = document.querySelectorAll(".design-list__item");
const TubDescription = document.querySelectorAll(".design__descr");
const TubImages = document.querySelectorAll(".design-images");
const TubBlock = document.querySelectorAll(".design-block__img");


TubButton.forEach((element, index) => {
    element.addEventListener("click", () => {

        TubDescription.forEach((descr, index_descr) => {
            if (index === index_descr) {
                descr.classList.remove("hidden")
            } else {
                descr.classList.add("hidden")
            }
        })

        TubImages.forEach((images, index_images) => {
            if (index === index_images) {
                images.classList.remove("hidden")
            } else {
                images.classList.add("hidden")
            }
        })

        TubBlock.forEach((block, index_block) => {
            if (index === index_block) {
                block.classList.remove("hidden")
            } else {
                block.classList.add("hidden")
            }
        })


        TubButton.forEach((btn) => {
            if (element === btn) {
                btn.classList.add("design-list__item_active");
            } else {
                btn.classList.remove("design-list__item_active");
            }
        })
    })
})