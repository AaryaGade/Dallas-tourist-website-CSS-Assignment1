// SLIDESHOW
let images = [
    "images/arboretum.jpg",
    "images/museum.jpg",
    "images/perot.jpg"
];

let index = 0;

// Show the current slide
function showSlide() {
    const slide = document.getElementById("slide");
    if (slide) {
        slide.src = images[index];
    }
}

// Move to the next slide
function nextSlide() {
    index = (index + 1) % images.length;
    showSlide();
}

// Move to the previous slide
function prevSlide() {
    index = (index - 1 + images.length) % images.length;
    showSlide();
}

// Initialize first slide
document.addEventListener("DOMContentLoaded", showSlide);

// FAVORITE SELECTOR
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