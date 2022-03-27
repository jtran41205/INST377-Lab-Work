const track = document.querySelector('.carousel__track');
const nextButton = document.querySelector('.carousel__button--next');
const prevButton = document.querySelector('.carousel__button--prev');

// click prev to go left
prevButton.addEventListener('click', e => {
  const currentSlide = track.querySelector('.current-slide');
  const prevSlide = currentSlide.previousElementSibling;
  // move to next slide

  if (prevSlide != null) {
    currentSlide.classList.remove('current-slide');
    currentSlide.classList.add('inactive-slide');
    prevSlide.classList.add('current-slide');
    prevSlide.classList.remove('inactive-slide');
  } else {
    currentSlide.classList.remove('current-slide');
    currentSlide.classList.add('inactive-slide');

    const lastSlide = track.lastElementChild;
    lastSlide.classList.add('current-slide');
    lastSlide.classList.remove('inactive-slide');
  }
});
// click next to go right
nextButton.addEventListener('click', e => {
  const currentSlide = track.querySelector('.current-slide');
  const nextSlide = currentSlide.nextElementSibling;
  // move to next slide

  if (nextSlide != null) {
    currentSlide.classList.remove('current-slide');
    currentSlide.classList.add('inactive-slide');
    nextSlide.classList.add('current-slide');
    nextSlide.classList.remove('inactive-slide');
  } else {
    currentSlide.classList.remove('current-slide');
    currentSlide.classList.add('inactive-slide');

    const firstSlide = track.firstElementChild;
    firstSlide.classList.add('current-slide');
    firstSlide.classList.remove('inactive-slide');
  }
});