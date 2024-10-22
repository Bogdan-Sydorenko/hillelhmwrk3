const slides = document.querySelectorAll('.slide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;

function showSlide(index) {
    const offset = -index * 100;
    document.querySelector('.slides').style.transform = `translateX(${offset}%)`;

    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });

    prevBtn.style.display = index === 0 ? 'none' : 'block';
    nextBtn.style.display = index === slides.length - 1 ? 'none' : 'block';
}

nextBtn.addEventListener('click', () => {
    if (currentIndex < slides.length - 1) {
        currentIndex++;
        showSlide(currentIndex);
    }
});

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        showSlide(currentIndex);
    }
});

dots.forEach(dot => {
    dot.addEventListener('click', (e) => {
        currentIndex = +e.target.getAttribute('data-slide');
        showSlide(currentIndex);
    });
});

showSlide(currentIndex);

