'use strict';

const btnScrollTo = document.querySelector('.btn--scroll-to');

const section1 = document.querySelector('#section--1');

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const nav = document.querySelector('.nav');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');


const openModal = function(e) {
    e.preventDefault();
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

const closeModal = function() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));



btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
});


btnScrollTo.addEventListener('click', function(e) {
    const s1coords = section1.getBoundingClientRect();
    console.log(s1coords);

    console.log(e.target.getBoundingClientRect());

    console.log('Current scroll (X/Y)', window.pageXOffset, pageYOffset);

    console.log('height and width of the viewport',
        document.documentElement.clientHeight,
        document.documentElement.clientWidth
    );

    // scrolling
    // window.scrollTo(
    //     s1coords.left + window.pageXOffset,
    //     s1coords.top + window.pageYOffset
    // );

    // window.scrollTo({
    //     top: s1coords.top + window.pageYOffset,
    //     left: s1coords.left + window.pageXOffset,
    //     behavior: 'smooth',
    // });

    section1.scrollIntoView({ behavior: 'smooth' });
})

///////////////////////////////////////////////////
// Page Navigation 

// document.querySelectorAll('.nav__link').forEach(function(el) {
//     el.addEventListener('click', function(e) {
//         e.preventDefault();
//         const id = this.getAttribute('href');
//         console.log(id);
//         document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//     })
// })

// Event Delegation
// 1. Add event listener to common parent element
// 2. Determine what element originated the event
document.querySelector('.nav__links').addEventListener('click', function(e) {
    console.log(e.target);

    // matching strategy (event delegation)
    if (e.target.classList.contains('nav__link')) {
        console.log('LINK');
        const id = e.target.getAttribute('href');
        console.log(id);
        document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
    }
});
// Tabbed component 
tabsContainer.addEventListener('click', function(e) {
    const clicked = e.target.closest('.operations__tab');

    // Guard clause 
    if (!clicked) return;

    // remove active classes
    tabs.forEach(t => t.classList.remove('operations__tab--active'));
    tabsContent.forEach(c => c.classList.remove('operations__content--active'));

    // activate tab
    clicked.classList.add('operations__tab--active');

    // activate content area
    document.querySelector(`.operations__content--${clicked.dataset.tab}`)
        .classList.add('operations__content--active');
});

// Menu fade animation
const handleHover = function(e) {
    if (e.target.classList.contains('nav__link')) {
        // console.log(this);
        const link = e.target;
        const siblings = link.closest('.nav').querySelectorAll('.nav__link');
        const logo = link.closest('.nav').querySelector('img');

        siblings.forEach(el => {
            if (el !== link) el.style.opacity = this;
        });
        logo.style.opacity = this;
    }
}

nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));

// // Sticky navigation
// const initCoords = section1.getBoundingClientRect();
// console.log(initCoords);

// window.addEventListener('scroll', function() {
//     // console.log(window.scrollY);
//     if (window.scrollY > initCoords.top) nav.classList.add('sticky')
//     else nav.classList.remove('sticky')

// });
// const obsCallback = function(entries, observer) {
//     entries.forEach(entry => console.log(entry));
// }

// const obsOpt = {
//     root: null,
//     threshold: [0, 0.2]
// }

// const observer = new IntersectionObserver(obsCallback, obsOpt);
// observer.observe(section1)


// Sticky navigation 
const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;
// console.log(navHeight);

const stickyNav = function(entries) {
    const [entry] = entries;
    // console.log(entries);

    if (!entry.isIntersecting) nav.classList.add('sticky');
    else nav.classList.remove('sticky');
}

const headerObserver = new IntersectionObserver(stickyNav, {
    root: null,
    threshold: 0,
    rootMargin: `-${navHeight}px`,
});
headerObserver.observe(header);

// Reveal sections
const allSections = document.querySelectorAll('.section')

const revealSection = function(entries, observer) {
    const [entry] = entries;
    // console.log(entry);
    if (!entry.isIntersecting) return;

    entry.target.classList.remove('section--hidden');
    observer.unobserve(entry.target);
}

const sectObs = new IntersectionObserver(revealSection, {
    root: null,
    threshold: 0.15,
})
allSections.forEach(function(section) {
    sectObs.observe(section);
    // section.classList.add('section--hidden');
})

// Lazy loading images
const imgTargets = document.querySelectorAll('img[data-src]');
// console.log(imgTargets);

const loadImg = function(entries, observer) {
    const [entry] = entries;
    // console.log(entry);

    if (!entry.isIntersecting) return;

    // replace src with data-src
    entry.target.src = entry.target.dataset.src;

    entry.target.addEventListener('load', function() {
        entry.target.classList.remove('lazy-img');
    });

    observer.unobserve(entry.target);
};

const imgObs = new IntersectionObserver(loadImg, {
    root: null,
    threshold: 0,
    rootMargin: '200px'
})

imgTargets.forEach(img => imgObs.observe(img));

// Slider
const slider = function() {

    const slides = document.querySelectorAll('.slide');
    const btnLeft = document.querySelector('.slider__btn--left')
    const btnRight = document.querySelector('.slider__btn--right');
    const dotContainer = document.querySelector('.dots');

    let curSlide = 0;
    const maxSlide = slides.length;


    // Functions
    const createDots = function() {
        slides.forEach((_, i) => {
            dotContainer.insertAdjacentHTML('beforeend',
                `<button class="dots__dot" data-slide="${i}"></button>`);
        });
    };


    const activateDot = function(slide) {
        document.querySelectorAll('.dots__dot').forEach(dot =>
            dot.classList.remove('dots__dot--active'));

        document
            .querySelector(`.dots__dot[data-slide="${slide}"]`)
            .classList.add('dots__dot--active');
    };

    const goToSlide = function(slide) {
        slides.forEach((s, i) => s.style.transform =
            `translateX(${100 * (i - slide)}%)`);
    }

    const nextSlide = function() {
        if (curSlide === maxSlide - 1) {
            curSlide = 0;
        } else {
            curSlide++;
        }

        goToSlide(curSlide);
        activateDot(curSlide);
    }

    const prevSlide = function() {
        if (curSlide === 0) {
            curSlide = maxSlide - 1;
        } else {
            curSlide--;
        }
        goToSlide(curSlide);
        activateDot(curSlide);
    }

    const init = function() {
        goToSlide(0);
        createDots();
        activateDot(0);
    }
    init();


    // Event handlers 
    btnRight.addEventListener('click', nextSlide);
    btnLeft.addEventListener('click', prevSlide);

    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowLeft') prevSlide();
        e.key === 'ArrowRight' && nextSlide();
    });

    dotContainer.addEventListener('click', function(e) {
        if (e.target.classList.contains('dots__dot')) {
            const { slide } = e.target.dataset;
            goToSlide(slide);
            activateDot(slide);
        }
    })
}
slider();

/*
///////////////////////////////////////////////////

// Selecting elements
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header');

const all = document.querySelectorAll('.section');
console.log(all);

const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

console.log(document.getElementsByClassName('btn'));

// Creating and inserting elements
// .insertAdjacentHTML

const msg =  document.createElement('div');
msg.classList.add('cookie-message');
msg.textContent = 'We use cookies for improved functionality';
msg.innerHTML = 'We use cookies for improved functionality. <button class="btn btn--close-cookie">Got it!</button>';

// header.prepend(msg);
 header.append(msg);
// header.append(msg.cloneNode(true));

header.before(msg);
header.after(msg);

// Delete elements
// document.querySelector('.btn--close-cookie').addEventListener('click', function() {
//   msg.remove();
// })

// Styles
msg.style.backgroundColor = '#37383d';
msg.style.width = '120%';

console.log(msg.style.backgroundColor);
console.log(msg.style.width);
console.log(getComputedStyle(msg).color);
console.log(getComputedStyle(msg).height);

msg.style.height = Number.parseInt(getComputedStyle(msg).height, 10) + 30 + 'px';

document.documentElement.style.setProperty('--color-primary', 'orangered');

// Attributes
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src);
console.log(logo.className);

logo.alt = 'Beautiful Minimalist Logo'

// non std
console.log(logo.getAttribute('designer'));
console.log(logo.getAttribute('src'));
console.log(logo.setAttribute('company', 'Bankist'));

const link = document.querySelector('.nav__link--btn');
console.log(link.href);
console.log(link.getAttribute('href'));

// Data Attributes
console.log(logo.dataset.versionNumber);

// Classes
logo.classList.add('c', 'j');
logo.classList.remove('c');


const btnScrollTo = document.querySelector('.btn--scroll-to');

const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function(e) {
    const s1coords = section1.getBoundingClientRect();
    console.log(s1coords);

    console.log(e.target.getBoundingClientRect());

    console.log('Current scroll (X/Y)', window.pageXOffset, pageYOffset);

    console.log('height and width of the viewport',
        document.documentElement.clientHeight,
        document.documentElement.clientWidth
    );

    // scrolling
    // window.scrollTo(
    //     s1coords.left + window.pageXOffset,
    //     s1coords.top + window.pageYOffset
    // );

    // window.scrollTo({
    //     top: s1coords.top + window.pageYOffset,
    //     left: s1coords.left + window.pageXOffset,
    //     behavior: 'smooth',
    // });

    section1.scrollIntoView({ behavior: 'smooth' });
})


const h1 = document.querySelector('h1');

const alertH1 = function(e) {
    alert('addEventListener: Great! You are reading the heading :D');
}

h1.addEventListener('mouseenter', alertH1)

setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);


// h1.onmouseenter = function(e) {
//     alert('onmouseenter: Great! You are reading the heading :D');
// }

const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = () => `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

document.querySelector('.nav__link').addEventListener('click', function(e) {
    this.style.backgroundColor = randomColor();
    console.log('LINK', e.target, e.currentTarget);
    console.log(e.currentTarget === this) // true

    // stop propagation 
    // e.stopPropagation(); --> not used generally
})

document.querySelector('.nav__links').addEventListener('click', function(e) {
    this.style.backgroundColor = randomColor();
    console.log('CONTAINER', e.target, e.currentTarget);
})

// document.querySelector('.nav').addEventListener('click', function(e) {
//     this.style.backgroundColor = randomColor();
//     console.log('TARGET', e.target, e.currentTarget);
// });


const h1 = document.querySelector('h1');

// Going downwards: child
console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes);
console.log(h1.children);
h1.firstElementChild.style.color = 'black';
h1.lastElementChild.style.color = 'orangered';

// Going upwards: parents
console.log(h1.parentNode);
console.log(h1.parentElement);

// h1.closest('.header').style.background = 'var(--gradient-another)';
// h1.closest('h1').style.background = 'var(--gradient-primary)';

// Going sideways: sibling

console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

// h1.nextElementSibling.style.background = '#ff58602d';
// console.log(h1.previousSibling);
// console.log(h1.nextSibling);

console.log(h1.parentElement.children);

// const head = document.querySelector('header');
// head.querySelector('.nav__links').style.backgroundColor = '#5ec5c067';
// // console.log(head.children);
// // console.log(head.parentElement.children);

[...h1.parentElement.children].forEach(function(e) {
    if (e !== h1) e.style.transform = 'scale(0.7)';
})
*/

// document.addEventListener('DOMContentLoaded', function(e) {
//     console.log('HTML parsed and DOM tree built', e);
// })

// window.addEventListener('load', function(e) {
//     console.log('Page fully loaded', e);
// });

// window.addEventListener('beforeunload', function(e) {
//     e.preventDefault();
//     console.log(e);
//     e.returnValue = '';
// });