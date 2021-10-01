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
const slidesToShow = 3;
const slidesToScroll = 3;
const inner = document.querySelector('.slider__inner');
const track = document.querySelector('.slider__track');
const btnPrev = document.querySelector('.btn__prev');
const btnNext = document.querySelector('.btn__next');
const items = document.querySelectorAll('.slider__item');
const itemsCount = items.length;
const itemWidth = inner.clientWidth / slidesToShow;
const movePosition = slidesToScroll * itemWidth;

items.forEach((item) => {
    item.style.minWidth = `${itemWidth}px`;
});

btnNext.addEventListener('click', () => {
    const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;

    position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

    setPosition();
    checkBtn();
});

btnPrev.addEventListener('click', () => {
    const itemsLeft = Math.abs(position) / itemWidth;

    position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

    setPosition();
    checkBtn();
});

const setPosition = () => {
    track.style.transform = `translateX(${position}px)`;
};

const checkBtn = () => {
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