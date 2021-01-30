let slider = document.querySelector('.slider');
let slides = document.querySelectorAll('.slide');

let sliderSwipe = new Hammer(slider);

sliderSwipe.on("swipeleft swiperight", function(ev) {
    let activeSlide;
    slides.forEach(slide => {
        slide.classList.contains('active') ? 
            activeSlide = slide
            : null
    })
    switch (ev.type) {
        case 'swipeleft':
            if (!activeSlide.classList.contains('sixth-slide')) {
                activeSlide.nextElementSibling.classList.add('active');
                activeSlide.classList.remove('active');
            } else {
                slides[0].classList.add('active');
                activeSlide.classList.remove('active');
            }
            break;
        case 'swiperight':
            if (!activeSlide.classList.contains('first-slide')) {
                activeSlide.previousElementSibling.classList.add('active');
                activeSlide.classList.remove('active');
            } else {
                slides[5].classList.add('active');
                activeSlide.classList.remove('active');
            }
            break;
    }
});