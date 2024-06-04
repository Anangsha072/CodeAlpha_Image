const gallery = document.querySelector('.gallery');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const images = document.querySelectorAll('.gallery img');
let index = 0;

function showImage(index) {
    images.forEach((image, i) => {
        image.style.transform = `translateX(-${index * 100}%)`;
    });
}

function nextImage() {
    index = (index + 1) % images.length;
    showImage(index);
}

function prevImage() {
    index = (index - 1 + images.length) % images.length;
    showImage(index);
}

prevBtn.addEventListener('click', prevImage);
nextBtn.addEventListener('click', nextImage);

