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
const readBtn = document.querySelector('.readmore')

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




