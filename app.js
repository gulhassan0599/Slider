const slides = document.querySelectorAll(".slider");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");

window.addEventListener("DOMContentLoaded", () => {
    slides.forEach((slide, index) => {
        slide.style.left = `${index * 100}%`;
    });

    let counterIndex = 0;

    nextBtn.addEventListener("click", (e) => {
        counterIndex++;
        if (counterIndex > slides.length - 1) {
            counterIndex = 0;
        }
        slider();
    });

    prevBtn.addEventListener("click", (e) => {
        counterIndex--;
        if (counterIndex < 0) {
            counterIndex = slides.length - 1;
        }
        slider();
    });

    function slider() {
        slides.forEach((slide) => {
            slide.style.transform = `translateX(-${counterIndex * 100}%)`
        });

        if (counterIndex >= slides.length - 1) {
            nextBtn.style.display = "none";
        }
        else {
            nextBtn.style.display = "block"
        }

        if (counterIndex <= 0) {
            prevBtn.style.display = "none";
        }
        else {
            prevBtn.style.display = "block"
        }
    }

    prevBtn.style.display = "none";
});
