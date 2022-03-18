const tabButtons = document.querySelectorAll('.design-list__item');
const tabDescriptions = document.querySelectorAll('.design__descr');
const tabImages = document.querySelectorAll('.design-images');
const blockImages = document.querySelectorAll('.design-block__img');
const tabTitle = document.querySelector('.design__title');
const tabHeader = document.querySelector('title');

tabHeader.innerHTML = tabTitle.innerHTML;

const changeContent = (array, value) => {
    array.forEach((elem) => {
        if (elem.dataset.tabsField === value) {
            elem.classList.remove('hidden');
        } else {
            elem.classList.add('hidden');
        }
    });
};

tabButtons.forEach((tabButton) => {
    tabButton.addEventListener("click", (event) => {
        
        const dataValue = tabButton.dataset.tabsHandler;

        changeContent(tabImages, dataValue);
        changeContent(tabDescriptions, dataValue);
        changeContent(blockImages, dataValue);
        
        tabButtons.forEach((btn) => {
            if (btn === event.target) {
                btn.classList.add('design-list__item_active');
            } else {
                btn.classList.remove('design-list__item_active');
            }
        })
    })
})


