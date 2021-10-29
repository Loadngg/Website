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
    smoothLink.addEventListener('click', function(event) {
        event.preventDefault();
        const yOffset = -80;
        const id = smoothLink.getAttribute('href');
        const element = document.querySelector(id)
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

        window.scrollTo({top: y, behavior: 'smooth'});
    })
}

// slick
$(document).ready(function(){
	$('.slider').slick({
		arrows:true,
		dots:true,
		slidesToShow:3,
		autoplay:true,
		speed:1000,
		autoplaySpeed:2000,
		responsive:[
			{
				breakpoint: 768,
				settings: {
					slidesToShow:2
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow:1
				}
			}
		]
	});
});

// Sticky header
let header = document.getElementById('header');
let headerH = header.clientHeight;
let scrollOffset = window.pageYOffset;

checkPos(scrollOffset);

window.onscroll = function () {
    scrollOffset = window.pageYOffset;

    checkPos(scrollOffset);
}

function checkPos(scrollOffset) {
    if (scrollOffset >= headerH) {
        header.classList.add("fixed");
      } else {
          header.classList.remove("fixed");
      }
}

// nav toggle
let navToggle = document.getElementById('nav_toggle');
let nav = document.getElementById('nav');
let navLinks = document.getElementsByClassName('nav__link');

navToggle.onclick = function (event) {
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

for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click', function() {
        navToggle.classList.remove('active');
        nav.classList.remove('active');
        header.classList.remove('active');
    })
}