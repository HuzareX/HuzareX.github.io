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

const hiddenText = document.querySelector('.section-wrapper--hidden')
const readBtn = document.querySelector('.read-btn')

const showText = () => {
    hiddenText.style.display = "block"
    readBtn.style.display = "none"
}





readBtn.addEventListener('click', showText)