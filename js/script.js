//navigation
const burgerBtn = document.querySelector('.burger-btn');
const closeBtn = document.querySelector('.mobile-nav__close-btn');
const mobileNav = document.querySelector('.mobile-nav');
const allNavItems = document.querySelectorAll('.mobile-nav-links__link');

const handleNav = () => {
    mobileNav.classList.toggle('active');
};

const closeNav = () => {
    mobileNav.classList.remove('active');
};

burgerBtn.addEventListener('click', handleNav);
closeBtn.addEventListener('click', closeNav);

allNavItems.forEach(item => {
    item.addEventListener('click', closeNav);
});

//hidden text

const hiddenText = document.querySelector('.text-wrapper--expanded')
const readBtn = document.getElementById('readmore1')

const showText = () => {
    hiddenText.style.display = "block"
    readBtn.style.display = "none"
}

readBtn.addEventListener('click', showText)

//carousel

const viewport = document.querySelector('.viewport');
const slides = document.querySelectorAll('.viewport__slide');
let isDragging = false;
let startX;
let translateX = 0;
let currentIndex = 0;

viewport.addEventListener('touchstart', (e) => {
    isDragging = true;
    startX = e.touches[0].clientX;
});

viewport.addEventListener('touchmove', (e) => {
    if (!isDragging) return;

    const currentX = e.touches[0].clientX;
    const diffX = currentX - startX;

    translateX += diffX;

    const lastSlideIndex = slides.length - 1;
    const maxTranslateX = -lastSlideIndex * (200 + 1);
    translateX = Math.max(maxTranslateX, Math.min(0, translateX));

    viewport.style.transform = `translateX(${translateX}px)`;

    startX = currentX;
});

viewport.addEventListener('touchend', () => {
    isDragging = false;
});

//hobby hidden text

const readmore2 = document.getElementById('readmore2')
const text2 = document.getElementById('text2')
const wheel1 = document.querySelector('.hobby-wrapper__wheel--one')
const hide2 = document.getElementById('hide2')

const showText2 = () => {
    text2.style.display = "block"
    readmore2.style.display = "none"
    wheel1.style.backgroundColor = "#AAC3DE"
    hide2.style.display = "none"
}

readmore2.addEventListener('click', showText2)



const readmore3 = document.getElementById('readmore3')
const text3 = document.getElementById('text3')
const wheel2 = document.querySelector('.hobby-wrapper__wheel--two')
const hide3 = document.getElementById('hide3')

const showText3 = () => {
    text3.style.display = "block"
    readmore3.style.display = "none"
    wheel2.style.backgroundColor = "#8CA6C1"
    hide3.style.display = "none"
}

readmore3.addEventListener('click', showText3)



const readmore4 = document.getElementById('readmore4')
const text4 = document.getElementById('text4')
const wheel3 = document.querySelector('.hobby-wrapper__wheel--three')
const hide4 = document.getElementById('hide4')

const showText4 = () => {
    text4.style.display = "block"
    readmore4.style.display = "none"
    wheel3.style.backgroundColor = "#5D7690"
    hide4.style.display = "none"
}

readmore4.addEventListener('click', showText4)



const readmore5 = document.getElementById('readmore5')
const text5 = document.getElementById('text5')
const wheel4 = document.querySelector('.hobby-wrapper__wheel--four')
const hide5 = document.getElementById('hide5')

const showText5 = () => {
    text5.style.display = "block"
    readmore5.style.display = "none"
    wheel4.style.backgroundColor = "#455E79"
    hide5.style.display = "none"
}

readmore5.addEventListener('click', showText5)












