let images = [
    "arboretum.jpg",
    "museum.jpg",
    "perot.jpg"
];

let index = 0;

function showSlide() {
    const slide = document.getElementById("slide");
    if (slide) {
        slide.src = images[index];
    }
}

function nextSlide() {
    index = (index + 1) % images.length;
    showSlide();
}

function prevSlide() {
    index = (index - 1 + images.length) % images.length;
    showSlide();
}

document.addEventListener("DOMContentLoaded", showSlide);

const favoriteSelect = document.getElementById("favorite");
const resultParagraph = document.getElementById("result");

if (favoriteSelect && resultParagraph) {
    favoriteSelect.addEventListener("change", function () {
        const choice = this.value;
        let message = "";

        if (choice === "Arboretum") {
            message = "Great choice! The Arboretum is perfect for nature lovers 🌿";
        } else if (choice === "Museum") {
            message = "Awesome! The Dallas Museum of Art is full of culture 🎨";
        } else if (choice === "Perot") {
            message = "Nice! The Perot Museum is super interactive 🔬";
        }

        resultParagraph.textContent = message;
    });
}
