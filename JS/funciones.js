document.addEventListener("DOMContentLoaded", function() {
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;

    // Verifica si hay un tema almacenado en localStorage
    if (localStorage.getItem("theme") === "dark") {
        body.classList.add("dark-theme");
        themeToggle.textContent = "☀️";
    }

    themeToggle.addEventListener("click", function() {
        if (body.classList.contains("dark-theme")) {
            body.classList.remove("dark-theme");
            body.classList.add("light-theme");
            themeToggle.textContent = "🌙";
            localStorage.setItem("theme", "light");
        } else {
            body.classList.remove("light-theme");
            body.classList.add("dark-theme");
            themeToggle.textContent = "☀️";
            localStorage.setItem("theme", "dark");
        }
    });

    // Carrusel de imágenes
    const carouselContainer = document.querySelector(".carousel-container");
    const images = document.querySelectorAll(".carousel img");
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");
    let index = 0;

    function updateCarousel() {
        carouselContainer.style.transform = `translateX(${-index * 100}%)`;
    }

    nextButton.addEventListener("click", function() {
        index = (index + 1) % images.length;
        updateCarousel();
    });

    prevButton.addEventListener("click", function() {
        index = (index - 1 + images.length) % images.length;
        updateCarousel();
    });
});