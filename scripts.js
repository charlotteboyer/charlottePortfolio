const myApp = {}

myApp.init = () => {
// hamburger menu @ 420 px 

myApp.menu = document.querySelector("ul")

myApp.menuButton = document.querySelector("button"); 

myApp.menuButton.addEventListener('click', function(){
    myApp.menu.classList.toggle('show')
})


//Scroll nav bar code 
window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll > 615) {
        document.querySelector('nav').classList.add('navFixed');
    } else if (currentScroll < 615) {
        document.querySelector('nav').classList.remove('navFixed');
    }
})

//PORFOLIO CAROUSEL CODE 

    let slideIndex = 1;

    const prevButton = document.querySelector(".prev");

    const nextButton = document.querySelector(".next");

    nextButton.addEventListener('click', () => {
        plusSlides(1)
    });

    prevButton.addEventListener('click', () => {
        plusSlides(-1)
    });

    const dots = document.getElementsByClassName("dot");
    for (let i = 0; i < dots.length; i++) {
        dots[i].addEventListener('click', function () {
            currentSlide(parseInt(this.dataset.whichdot))
        })
    }

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

        if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none"
        }

        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
    }

}

myApp.init()

