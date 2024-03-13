let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("product-slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (let i = slideIndex; i < slideIndex + 3; i++) {
        if (slides[i]) {
            slides[i].style.display = "block";
        }
    }

    slideIndex += 3;
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }

    setTimeout(showSlides, 3000); 
}

