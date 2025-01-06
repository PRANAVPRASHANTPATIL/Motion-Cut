let currentAnimeSlide = 0;

function changeAnimeSlide(direction) {
  const slides = document.querySelectorAll('.anime-slide');
  currentAnimeSlide = (currentAnimeSlide + direction + slides.length) % slides.length;
  updateAnimeSlider();
}

function goToAnimeSlide(index) {
  currentAnimeSlide = index;
  updateAnimeSlider();
}

function updateAnimeSlider() {
  const slider = document.querySelector('.anime-slider');
  slider.style.transform = `translateX(-${currentAnimeSlide * 100}%)`;

  const thumbnails = document.querySelectorAll('.anime-thumbnails img');
  thumbnails.forEach((thumbnail, index) => {
    thumbnail.classList.toggle('active', index === currentAnimeSlide);
  });
}

// Initialize the first thumbnail as active
document.addEventListener('DOMContentLoaded', () => {
  const thumbnails = document.querySelectorAll('.anime-thumbnails img');
  if (thumbnails.length > 0) thumbnails[0].classList.add('active');
});
