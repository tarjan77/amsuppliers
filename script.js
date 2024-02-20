
document.getElementById('copyrightYear').innerHTML = new Date().getFullYear();

//slide show of images
const slides = document.querySelectorAll('.slide');
const indicators = document.querySelectorAll('.indicator');
const arrows = document.querySelectorAll('.arrow');

let currentSlide = 0;

function showSlide(n) {
    slides.forEach((slide) => {
        slide.style.transform = `translateX(-${n * 100}vw)`;
    });
    indicators.forEach((indicator, index) => {
        if (index === n) {
            indicator.classList.add('active');
        } else {
            indicator.classList.remove('active');
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

setInterval(nextSlide, 5000);

showSlide(currentSlide);

indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        currentSlide = index;
        showSlide(currentSlide);
    });
});

arrows.forEach((arrow) => {
    arrow.addEventListener('click', () => {
        if (arrow.classList.contains('left')) {
            prevSlide();
        } else if (arrow.classList.contains('right')) {
            nextSlide();
        }
    });
});

function toggleArrowsVisibility() {
    if (currentSlide === 0) {
        arrows[0].style.display = 'none';
    } else {
        arrows[0].style.display = 'block';
    }

    if (currentSlide === slides.length - 1) {
        arrows[1].style.display = 'none';
    } else {
        arrows[1].style.display = 'block';
    }
}

toggleArrowsVisibility();

window.addEventListener('resize', () => {
    showSlide(currentSlide); // Ensure correct slide is shown on resize
});





// Add smooth scroll behavior for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Show or hide arrows based on current slide
function toggleArrowsVisibility() {
    if (currentSlide === 0) {
        arrows[0].style.display = 'none';
    } else {
        arrows[0].style.display = 'block';
    }

    if (currentSlide === slides.length - 1) {
        arrows[1].style.display = 'none';
    } else {
        arrows[1].style.display = 'block';
    }
}

// Add event listeners for arrows
arrows.forEach((arrow) => {
    arrow.addEventListener('click', () => {
        if (arrow.classList.contains('left')) {
            prevSlide();
        } else if (arrow.classList.contains('right')) {
            nextSlide();
        }
    });
});

// Handle scroll event to show/hide navigation bar
let lastScrollTop = 0;
window.addEventListener('scroll', function () {
    let st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > lastScrollTop) {
        // Downscroll code
        nav.style.top = '-50px';
    } else {
        // Upscroll code
        nav.style.top = '0';
    }
    lastScrollTop = st <= 0 ? 0 : st;
});
