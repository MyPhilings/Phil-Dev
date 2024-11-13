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