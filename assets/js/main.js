// Accordion
let accordion = document.getElementsByClassName('accordion__item');

for (let i = 0; i < accordion.length; i++) {
    accordion[i].firstElementChild.addEventListener('click', change)
}

function change(event) {
    let targ = event.target;

    if (targ.parentElement.classList.contains('accordion__item')) {
        par = targ.parentElement;
    } else {
        par = targ.parentElement.parentElement;
    }

    if (par.classList.contains('active')) {
        par.classList.remove('active')
    } else {
        for (let i = 0; i < accordion.length; i++) {
            accordion[i].classList.remove('active')
        }
        par.classList.add('active')
    }
}


// Nav scroll
const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
}

// Slider
let position = 0;
let slidesToShow = 2;
const slidesToScroll = 2;
let inner = document.querySelector('.slider__inner');
const track = document.querySelector('.slider__track');
const btnPrev = document.querySelector('.btn__prev');
const btnNext = document.querySelector('.btn__next');
const items = document.querySelectorAll('.slider__item');
let itemsCount = items.length;
let itemWidth = inner.clientWidth / slidesToShow;
let movePosition = slidesToScroll * itemWidth;

items.forEach((item) => {
    item.style.minWidth = `${itemWidth}px`;
});

btnNext.addEventListener('click', () => {
    let itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;

    position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

    setPosition();
    checkBtn();
});

btnPrev.addEventListener('click', () => {
    let itemsLeft = Math.abs(position) / itemWidth;

    position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

    setPosition();
    checkBtn();
});

let setPosition = () => {
    track.style.transform = `translateX(${position}px)`;
};

let checkBtn = () => {
    btnPrev.disabled = position === 0;
    btnNext.disabled = position <= -(itemsCount - slidesToShow) * itemWidth;
};

checkBtn();

// Sticky header
let header = document.getElementById('header');
let introH = document.getElementById('intro').clientHeight;
let scrollOffset = window.pageYOffset;

checkPos(scrollOffset);

window.onscroll = function () {
    scrollOffset = window.pageYOffset;

    checkPos(scrollOffset);
}

function checkPos(scrollOffset) {
    if (scrollOffset >= introH) {
        header.classList.add("fixed");
      } else {
          header.classList.remove("fixed");
      }
}

// nav togle
let navTogle = document.getElementById('nav_toggle');
let nav = document.getElementById('nav');
navTogle.onclick = function (event) {
    event.preventDefault();

    if (this.classList.contains('active')) {
        this.classList.remove('active');
        nav.classList.remove('active');
        header.classList.remove('active');
    } else {
        header.classList.add('active');
        this.classList.add('active');
        nav.classList.add('active');
    }
    
}