// Scroll Top on reload
$(window).on('beforeunload', function(){
    $(window).scrollTop(0);
});

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

    $('.reviews').slick({
        arrows:true,
		dots:true,
		slidesToShow:2,
        slidesToScroll:1,
		autoplay:false,
		speed:1000,
		autoplaySpeed:2000,
        responsive:[
			{
				breakpoint: 1060,
				settings: {
					slidesToShow:1
				}
			}
		]
    })
});

// Sticky header
let header = document.getElementById('header');
let headerH = header.clientHeight;
let scrollOffset = window.scrollY;

checkPos(scrollOffset);

window.onscroll = function () {
    scrollOffset = window.scrollY;

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

// Animation
const animItems = document.querySelectorAll('.anim-items');

if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll() {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemH = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemH / animStart;
            if (animItemH > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if ((scrollY > animItemOffset - animItemPoint) && scrollY < (animItemOffset + animItemH)) {
                animItem.classList.add('show');
            } else {
                // animItem.classList.remove('show');
            }
        }
    }

    function offset(el) {
        const rect = el.getBoundingClientRect(),
        scrollLeft = window.scrollX || document.documentElement.scrollLeft,
        scrollTop = window.scrollY || document.documentElement.scrollTop;
        return {
            top: rect.top + scrollTop,
            left: rect.left + scrollLeft
        }
    }

    setTimeout(() => {
        animOnScroll();
    }, 300) 
}

// Make review
let makeBtn = document.getElementById('make__review');
let form = document.getElementById('review__form');

console.log(makeBtn);
$(window).scroll(function() {
    if($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
        makeBtn.classList.remove('hidden')
        setTimeout(() => {
            makeBtn.classList.remove('transparent')
        }, 200)
    }
})

function showForm() {
    form.classList.remove('hidden')
    setTimeout(() => {
        form.classList.remove('transparent')
    }, 200)
}

function closeForm() {
    form.classList.add('transparent')
    setTimeout(() => {
        form.classList.add('hidden')
    }, 200)
}