const BtnFeatureLink = document.querySelectorAll(".feature__link");
const FeatureSub = document.querySelectorAll(".feature-sub");


BtnFeatureLink.forEach((element, index) => {
    element.addEventListener("click", () => {

        BtnFeatureLink.forEach((FeatureLink) => {
            if (element === FeatureLink && !FeatureLink.classList.contains('feature__link_active')) {
                FeatureLink.classList.add("feature__link_active");
            } else {
                FeatureLink.classList.remove("feature__link_active");
            }
        });

        FeatureSub.forEach((sub, index_sub) => {
            if (index === index_sub && sub.classList.contains('hidden')) {
                sub.classList.remove("hidden")
            } else {
                sub.classList.add("hidden")
            }
        });

    })
})