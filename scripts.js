// const myApp = {}

// myApp.init = () => {

window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    console.log(currentScroll)
    if (currentScroll > 615) {
        document.querySelector('nav').classList.add('navFixed');
    } else if (currentScroll < 615) {
        document.querySelector('nav').classList.remove('navFixed');
    }
})

let slideIndex = 1; 

showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}
function showSlides(n) {
    let i; 
    const slides = document.getElementsByClassName("app");
    const dots = document.getElementsByClassName("dot");

    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++){
        slides[i].style.display = "none"
    }
    for (i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// }

// myApp.init()