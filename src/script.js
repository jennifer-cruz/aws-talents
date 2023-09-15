const cvs = ["./public/images/Emily.png", "./public/images/Jennifer.png", "./public/images/Moises.png", "./public/images/Wilson.png", "./public/images/Yuichi.png"];
const slider = document.querySelectorAll('.slider');
const btnPrev = document.getElementById('prev-button');
const btnNext = document.getElementById('next-button');

let currentSlide = 0;

function hideSlider(){
    slider.forEach(item => item.classList.remove('on'))
}

function showSlider(){
    slider[((currentSlide % 2) + 2) % 2].classList.add('on')
}

function nextSlider(){
    hideSlider()
    slider[(((currentSlide + 1) % 2) + 2) % 2].src = cvs[(((currentSlide + 1) % 5) + 5) % 5]

    currentSlide++
    
    console.log(currentSlide)
    showSlider()
}

function prevSlider(){
    hideSlider()
    slider[(((currentSlide - 1) % 2) + 2) % 2].src = cvs[(((currentSlide - 1) % 5) + 5) % 5]

    currentSlide--
    
    console.log(currentSlide)
    showSlider()
}

btnNext.addEventListener('click', nextSlider)
btnPrev.addEventListener('click', prevSlider)

console.log(slider)