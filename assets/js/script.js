let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('nav ul li a');

window.onscroll = () => {
    let top = window.scrollY;

    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            document.querySelector(`nav ul li a[href='#${id}']`).classList.add('active');
        }
    });
};

document.addEventListener("wheel", (event) => {
    event.preventDefault();
    let scrollTimeout;
    clearTimeout(scrollTimeout);

    scrollTimeout = setTimeout(() => {
        window.scrollBy({
            top: event.deltaY,
            behavior: "smooth",
        });
    }, 50);
}, { passive: false });

window.addEventListener("scroll", function() {
    const scrollPosition = window.scrollY;
    const delayFactor = -0.1;
    document.body.style.backgroundPositionY = `${scrollPosition * delayFactor}px`;
});

document.addEventListener('DOMContentLoaded', () => {
    const mobileMenu = document.getElementById('mobile-menu');
    const menuLinks = document.querySelector('.menu-links');

    mobileMenu.addEventListener('click', () => {
        menuLinks.classList.toggle('active');
    });
});


// Projects Section
let items = document.querySelectorAll('.slider .list .item');
let thumbnails = document.querySelectorAll('.thumbnail .item');

let countItem = items.length;
let itemActive = 0;

// Automatically advance the slider at intervals
let refreshInterval = setInterval(() => {
    itemActive = (itemActive + 1) % countItem; // Cycle through items
    showSlider();
}, 6000);

function showSlider() {
    // Remove old active item
    let itemActiveOld = document.querySelector('.slider .list .item.active');
    let thumbnailActiveOld = document.querySelector('.thumbnail .item.active');
    if (itemActiveOld) itemActiveOld.classList.remove('active');
    if (thumbnailActiveOld) thumbnailActiveOld.classList.remove('active');

    // Activate new item
    items[itemActive].classList.add('active');
    thumbnails[itemActive].classList.add('active');
}

// Click thumbnail to change slide and stop auto-cycling
thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        itemActive = index;
        showSlider();

        // Stop cycling when a thumbnail is clicked
        clearInterval(refreshInterval);
    });
});
